import { Request, Response } from "express";
import User, { IUser } from "../../models/User.model"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { checkConstraints, checkLoginConstraintsAsEmail, checkLoginConstraintsAsUserName, returnIdentity } from "../../validchecks/checkAuthConstraints";
import { emailVerificationAlert, sendEmailVerification } from "../../helpers/mailer";

export async function handleSignUpFunction(req: Request, res: Response) {
    try {
      const { userName, email, password }: IUser = req.body;
  
      if (!userName || !email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Please filled all the fields" });
      }
  
      const isValid = checkConstraints(
        userName,
        email,
        password,
      );

      if (!isValid) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Constraints" });
      }
  
      const user = await User.findOne({ email: email });
  
      if (user && user.email === email && !user.emailVerificationStatus) {
        await emailVerificationAlert(user.email);
      }
  
      if (user && user.emailVerificationStatus === true) {
        return res.status(400).json({
          success: false,
          message: "User already exists with this email",
        });
      }
  
      const username = await User.findOne({ userName: userName });
      if (username && username.emailVerificationStatus) {
        return res
          .status(400)
          .json({ success: false, message: "User Name already taken" });
      }
      const hashedPassword: string = await bcrypt.hash(password, 10);
      
      const { nanoid } = await import('nanoid');
      const newUser = new User({
        uniqueId: nanoid(),
        userName: userName,
        email: email,
        password: hashedPassword,
      });
  
      const userId = newUser._id;
  
      await newUser.save();
  
      await sendEmailVerification(email, userId);
  
      return res.status(201).json({
        success: true,
        message: "signed up successfully, please verify your email",
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
  
  export async function handleLoginFunction(req: Request, res: Response) {
    try {
      const { identity, password } = req.body;
  
      if (!identity || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Please fill all the fields" });
      }
  
      let userIdentity: null | string = null;
      const returnedIdentity = returnIdentity(identity);
  
      if (returnedIdentity === "userName") {
        const isValidConstraintsAsUserName = checkLoginConstraintsAsUserName(
          identity,
          password
        );
        if (!isValidConstraintsAsUserName) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid username or password" });
        }
  
        userIdentity = identity;
      } else if (returnedIdentity === "email") {
        const isValidConstraintsAsEmail = checkLoginConstraintsAsEmail(
          identity,
          password
        );
        if (!isValidConstraintsAsEmail) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid email or password" });
        }
  
        userIdentity = identity;
      }
  
      const user = await User.findOne({
        $or: [{ userName: userIdentity }, { email: userIdentity }],
      });
  
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Incorrect password" });
      }
  
      const token = jwt.sign(
        { id: user._id , uniqueId: user.uniqueId},
        process.env.JWT_SECRET!,
        {
          expiresIn: "15d",
        }
      );
  
      return res
        .status(200)
        .json({ success: true, message: "Login successful", token });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
  