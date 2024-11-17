import { Request, Response } from "express";
import User from "../../models/User.model"
import bcrypt from "bcryptjs";
import {checkPasswordConstraints } from "../../validchecks/checkAuthConstraints";
import {sendResetPasswordVerification } from "../../helpers/mailer";

export async function handleResetPasswordFunction(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "user doesn't exists" });
      }
      if (!user?.emailVerificationStatus) {
        return res
          .status(400)
          .json({ success: false, message: "email not verified" });
      }
  
      if (user && user.passwordResetOTPExpires) {
        const emailTime = user.passwordResetOTPExpires;
        const currentTime = Date.now();
        const remainingTime = emailTime - currentTime;
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        if (remainingTime > 0) {
          return res.status(404).json({
            success: false,
            message: `try after ${minutes}min ${seconds}s`,
          });
        } else {
          await sendResetPasswordVerification(user.email, user._id);
        }
      }
  
      if (user && user.passwordSendTime) {
        const emailTime = user.passwordSendTime;
        const currentTime = Date.now();
        const remainingTime = emailTime - currentTime;
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        if (remainingTime > 0) {
          return res.status(404).json({
            success: false,
            message: `try after ${hours}hr ${minutes}min ${seconds}s`,
          });
        }
      }
  
      await sendResetPasswordVerification(user.email, user._id);
  
      return res
        .status(200)
        .json({ message: "OTP send successfully", success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
  
  export async function handleResetPasswordVerificationOTP(
    req: Request,
    res: Response
  ) {
    try {
      const { otp, newPassword, email } = req.body;
  
      if (!otp || !newPassword || !email) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }
  
      const isValidPassword = checkPasswordConstraints(newPassword);
      if (!isValidPassword) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid password format" });
      }
  
      const user = await User.findOne({ email, passwordResetOTP: otp });
  
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid OTP or email" });
      }
  
      if (user && user.passwordResetOTPExpires) {
        const emailTime = user.passwordResetOTPExpires;
        const currentTime = Date.now();
        const remainingTime = emailTime - currentTime;
        if (remainingTime < 0) {
          return res.status(404).json({ success: false, message: `OTP expires` });
        }
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      const updateUserPassword = await User.findByIdAndUpdate(user._id, {
        $set: {
          password: hashedPassword,
          passwordSendTime: Date.now() + 15 * 24 * 60 * 60 * 1000,
        },
        $unset: {
          passwordResetOTP: "",
          passwordResetOTPExpires: "",
        },
      });
      await updateUserPassword.save();
  
      await user.save();
  
      return res
        .status(200)
        .json({ success: true, message: "Password changed successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }