import nodemailer from "nodemailer";
import dotenv from "dotenv"

dotenv.config()
export const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });