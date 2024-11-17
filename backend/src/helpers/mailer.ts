import User from "../models/User.model";
import mongoose from "mongoose";
import { transporter } from "../utils/mail.config";
import dotenv from "dotenv";

dotenv.config();

export const sendEmailVerification = async (
  email: string,
  userId: mongoose.Types.ObjectId
) => {
  const verificationLink = process.env
    .PUBLIC_FRONTEND_EMAIL_VERIFICATION_ROUTE!;

  try {
    const emailVerificationOTP = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const emailUser = await User.findByIdAndUpdate(userId, {
      $set: {
        emailVerificationOTP: emailVerificationOTP,
        emailVerificationOTPExpires: Date.now() + 600000,
        emailSendTime: Date.now() + 120000,
      },
    });
    await emailUser.save();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
      body { font-family: Arial, sans-serif; background-color: #121212; color: #E0E0E0; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 40px auto; background-color: #1E1E1E; padding: 0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); overflow: hidden; }
      .header { text-align: center; background-color: #333333; color: #ffffff; padding: 20px; }
      .header h1 { margin: 0; font-size: 24px; }
      .logo { width: 150px; margin: 0 auto; display: block; }
      .content { padding: 30px; text-align: center; }
      .content h2 { font-size: 22px; color: #76c7c0; margin: 0; }
      .content p { font-size: 16px; line-height: 1.6; color: #B0B0B0; }
      .otp { font-size: 36px; font-weight: bold; color: #76c7c0; letter-spacing: 8px; margin: 20px 0; }
      .cta-button { display: inline-block; background-color: #76c7c0; color: #ffffff; padding: 12px 24px; font-size: 16px; font-weight: bold; border-radius: 5px; text-decoration: none; margin-top: 20px; }
      .cta-button:hover { background-color: #65b2ad; }
      .footer { text-align: center; padding: 20px; font-size: 12px; color: #888888; background-color: #1E1E1E; }
      .footer p { margin: 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${process.env.PUBLIC_FRONTEND_DOMAIN}/dark-mode-logo.png" alt="Master's Brain Logo" class="logo" />
      <h1>Email Verification</h1>
    </div>
    <div class="content">
      <h2>Hello,</h2>
      <p>Thanks for registering with Master's Brain! Please verify your email address using the 6-digit OTP below:</p>
      <div class="otp">${emailVerificationOTP}</div>
      <p>If you did not sign up for this account, please ignore this email.</p>
      <a href="${verificationLink}?email=${email}" class="cta-button">Verify Email</a>
    </div>
    <div class="footer">
      <p>© 2024 Master's Brain. All rights reserved.</p>
      <p>Need help? <a href="${process.env.PUBLIC_FRONTEND_DOMAIN}/contact" style="color: #76c7c0;">Contact Support</a></p>
    </div>
  </div>
</body>
</html>
`;

    const mailOptions = {
      from: `"Master's Brain" <${process.env.PUBLIC_GMAIL}>`, // sender address
      to: email,
      subject: "Email Verification OTP",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const sendResetPasswordVerification = async (
  email: string,
  userId: mongoose.Types.ObjectId
) => {
  try {
    const passwordResetOTP = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const emailUser = await User.findByIdAndUpdate(userId, {
      $set: {
        passwordResetOTP: passwordResetOTP,
        passwordResetOTPExpires: Date.now() + 600000,
        passwordSendTime: Date.now() + 3600000,
      },
    });
    await emailUser.save();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
      body { font-family: Arial, sans-serif; background-color: #121212; color: #E0E0E0; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 40px auto; background-color: #1E1E1E; padding: 0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); overflow: hidden; }
      .header { text-align: center; background-color: #b23b3b; color: #ffffff; padding: 20px; }
      .header h1 { margin: 0; font-size: 24px; }
      .logo { width: 150px; margin: 0 auto; display: block; }
      .content { padding: 30px; text-align: center; }
      .content h2 { font-size: 22px; color: #ff6f61; margin: 0; }
      .content p { font-size: 16px; line-height: 1.6; color: #B0B0B0; }
      .otp { font-size: 36px; font-weight: bold; color: #ff6f61; letter-spacing: 8px; margin: 20px 0; }
      .cta-button { display: inline-block; background-color: #ff6f61; color: #ffffff; padding: 12px 24px; font-size: 16px; font-weight: bold; border-radius: 5px; text-decoration: none; margin-top: 20px; }
      .cta-button:hover { background-color: #e65e55; }
      .footer { text-align: center; padding: 20px; font-size: 12px; color: #888888; background-color: #1E1E1E; }
      .footer p { margin: 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${process.env.PUBLIC_FRONTEND_DOMAIN}/dark-mode-logo.png" alt="Master's Brain Logo" class="logo" />
      <h1>Password Reset</h1>
    </div>
    <div class="content">
      <h2>Hello,</h2>
      <p>We received a request to reset your password. Use the 6-digit OTP below:</p>
      <div class="otp">${passwordResetOTP}</div>
      <p>If you did not request this, please ignore this email.</p>
      <a href="${process.env.PUBLIC_FRONTEND_DOMAIN}/reset-password" class="cta-button">Reset Password</a>
    </div>
    <div class="footer">
      <p>© 2024 Master's Brain. All rights reserved.</p>
      <p>Need help? <a href="${process.env.PUBLIC_FRONTEND_DOMAIN}/contact" style="color: #ff6f61;">Contact Support</a></p>
    </div>
  </div>
</body>
</html>
`;

    const mailOptions = {
      from: `"Master's Brain" <${process.env.PUBLIC_GMAIL}>`, // sender address
      to: email,
      subject: "Password Reset OTP",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const emailVerificationAlert = async (email: string) => {
  const verificationLink = process.env
    .PUBLIC_FRONTEND_EMAIL_VERIFICATION_ROUTE!;
  try {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification Alert</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #1a202c; /* Dark mode background */
      color: #ffffff; /* White text for contrast */
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #2d3748; /* Slightly lighter dark background */
      padding: 0;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
    .header {
      text-align: center;
      background-color: #4caf50; /* Green accent */
      color: #ffffff;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .logo {
      width: 120px;
      margin: 0 auto 10px;
      display: block;
    }
    .content {
      padding: 30px;
      text-align: center;
    }
    .content h2 {
      font-size: 22px;
      color: #4caf50; /* Green accent */
      margin-bottom: 15px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      color: #cbd5e0; /* Muted text for readability */
    }
    .button {
      display: inline-block;
      background-color: #4caf50; /* Green accent */
      color: #ffffff;
      padding: 12px 24px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #45a049; /* Slightly darker green */
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 12px;
      color: #a0aec0; /* Muted footer text */
      background-color: #2c2f33; /* Dark footer background */
    }
    .footer a {
      color: #4caf50; /* Green accent links */
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header with Logo -->
    <div class="header">
      <img src="${process.env.PUBLIC_FRONTEND_DOMAIN}/dark-mode-logo.png" alt="Master's Brain Logo" class="logo" />
      <h1>Email Verification</h1>
    </div>

    <!-- Email Content -->
    <div class="content">
      <h2>Hello,</h2>
      <p>Thank you for signing up for Master's Brain! To complete your registration, please verify your email address by clicking the button below:</p>
      
      <!-- Verification Button -->
      <a href="${verificationLink}?email=${email}" target="_blank" class="button">Verify Email</a>
      
      <p>If you didn’t sign up for this account, you can safely ignore this email.</p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>© 2024 Master's Brain. All rights reserved.</p>
      <p>Need help? <a href="${process.env.PUBLIC_FRONTEND_DOMAIN}/contact">Contact Support</a></p>
    </div>
  </div>
</body>
</html>
`;

    const mailOptions = {
      from: `"Master's Brain" <${process.env.PUBLIC_GMAIL}>`, // sender address
      to: email,
      subject: "Email Verification Alert",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export const sendGoogleAuthPasswordMail = async (
  email: string,
  password: string
) => {
  const resetPasswordLink = process.env.PUBLIC_FRONTEND_RESET_PASSWORD_ROUTE!;

  try {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Authentication Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a202c; /* Dark mode background */
            color: #ffffff; /* White text */
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #2d3748; /* Slightly lighter dark background */
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }
        .header {
            text-align: center;
            background-color: #4caf50; /* Green accent */
            color: #ffffff;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .logo {
            width: 120px;
            margin: 0 auto 10px;
            display: block;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h2 {
            font-size: 22px;
            color: #4caf50; /* Green accent */
            margin: 0;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            color: #cbd5e0; /* Muted text for readability */
        }
        .password {
            font-size: 24px;
            font-weight: bold;
            color: #34a853; /* Green color */
            margin: 20px 0;
            letter-spacing: 2px;
        }
        .button {
            display: inline-block;
            background-color: #ea4335; /* Red accent */
            color: #ffffff;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #cc392b; /* Darker red */
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #a0aec0; /* Muted footer text */
            background-color: #2c2f33; /* Dark footer background */
        }
        .footer a {
            color: #4caf50; /* Green accent links */
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with Logo -->
        <div class="header">
            <img src="${process.env.PUBLIC_FRONTEND_DOMAIN}/dark-mode-logo.png" alt="Master's Brain Logo" class="logo" />
            <h1>Welcome to Master's Brain with Google</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
            <h2>Hello,</h2>
            <p>You've successfully signed in using your Google account!</p>
            <p>Your temporary password is:</p>
            <div class="password">${password}</div>
            <p>We recommend that you reset your password immediately to secure your account.</p>
            
            <!-- Call to Action Button -->
            <a href="${resetPasswordLink}" target="_blank" class="button">Reset Password</a>
            
            <p>If you did not sign up for this account, please ignore this email.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 Master's Brain. All rights reserved.</p>
            <p>Need help? <a href="${process.env.PUBLIC_FRONTEND_DOMAIN}/contact">Contact Support</a></p>
        </div>
    </div>
</body>
</html>
`;

    const mailOptions = {
      from: `"Master's Brain" <${process.env.PUBLIC_GMAIL}>`, // sender address
      to: email,
      subject: "Google Authentication Successful",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export const sendGithubAuthPasswordMail = async (
  email: string,
  password: string
) => {
  const resetPasswordLink = process.env.PUBLIC_FRONTEND_RESET_PASSWORD_ROUTE!;

  try {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Authentication Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a202c; /* Dark mode background */
            color: #ffffff; /* White text for readability */
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #2d3748; /* Slightly lighter dark background */
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            overflow: hidden;
        }
        .header {
            text-align: center;
            background-color: #24292e; /* GitHub's dark gray */
            color: #ffffff;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .logo {
            width: 120px;
            margin: 0 auto 10px;
            display: block;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h2 {
            font-size: 22px;
            color: #0366d6; /* GitHub blue */
            margin: 0;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            color: #cbd5e0; /* Muted text for readability */
        }
        .password {
            font-size: 24px;
            font-weight: bold;
            color: #34a853; /* Green accent */
            margin: 20px 0;
            letter-spacing: 2px;
        }
        .button {
            display: inline-block;
            background-color: #28a745; /* GitHub green */
            color: #ffffff;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #218838; /* Darker green */
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #a0aec0; /* Muted footer text */
            background-color: #2c2f33; /* Dark footer background */
        }
        .footer a {
            color: #4caf50; /* Green accent links */
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with Logo -->
        <div class="header">
            <img src="${process.env.PUBLIC_FRONTEND_DOMAIN}/images/masters-brain-logo-light-mode.png" alt="Master's Brain Logo" class="logo" />
            <h1>Welcome to Master's Brain with GitHub</h1>
        </div>

        <!-- Email Content -->
        <div class="content">
            <h2>Hello,</h2>
            <p>You've successfully signed in using your GitHub account!</p>
            <p>Your temporary password is:</p>
            <div class="password">${password}</div>
            <p>For security, please reset your password as soon as possible.</p>
            
            <!-- Call to Action Button -->
            <a href="${resetPasswordLink}" target="_blank" class="button">Reset Password</a>
            
            <p>If this wasn't you, feel free to ignore this email.</p>
        </div>

        <!-- Footer -->
        <div class="footer">

            <p>© 2024 Master's Brain. All rights reserved.</p>
            <p>Need assistance? <a href="${process.env.PUBLIC_FRONTEND_DOMAIN}/contact">Contact Support</a></p>
        </div>
    </div>
</body>
</html>

    `;

    const mailOptions = {
      from: `"Master's Brain" <${process.env.PUBLIC_GMAIL}>`, // sender address
      to: email,
      subject: "GitHub Authentication Successful",
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
