import {Request , Response} from "express";
import { sendEmailVerification } from "../../helpers/mailer";
import User from "../../models/User.model";

export async function handleEmailVerificationOTP(req: Request, res: Response) {
    try {
      const { otp, email } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "user doesn't exists" });
      }
      if (user?.emailVerificationOTP !== otp) {
        return res.status(400).json({ success: false, message: "Invalid OTP" });
      }
  
      const userId = user._id;
      const updateUseremailVerificationStatus = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            emailVerificationStatus: true,
          },
          $unset: {
            emailSendTime: "",
            emailVerificationOTP: "",
            emailVerificationOTPExpires: "",
          },
        }
      );
      await updateUseremailVerificationStatus.save();
  
      return res
        .status(200)
        .json({ success: true, message: "OTP verified successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }

  export async function handleResendVerficationOTPFunction(
    req: Request,
    res: Response
  ) {
    try {
      const { email } = req.body;
  
      const user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "user doesn't exists" });
      }
  
      if (user && user.emailVerificationStatus) {
        return res
          .status(400)
          .json({ success: false, message: "email already Verified exists" });
      }
  
      if (user?.emailSendTime) {
        const emailTime = user.emailSendTime.getTime();
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
        }
      }
  
      await sendEmailVerification(user.email, user._id);
  
      return res
        .status(200)
        .json({ message: "verification mail send successfully", success: true });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }