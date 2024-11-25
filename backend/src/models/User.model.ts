import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  uniqueId: string;
  firstName?:string;
  lastName?:string;
  userName: string;
  password: string;
  email: string;
  profileImageUrl?: string | undefined;
  userDob?: string;
  bio?: string;
  address?: {
    country: string;
    state: string;
    city: string;
  };
  emailVerificationOTP?: string;
  emailVerificationOTPExpires?: string;
  emailVerificationStatus?: boolean;
  emailSendTime?: string;
  passwordResetOTP?: string;
  passwordResetOTPExpires?: string;
  passwordSendTime?: string;
  phoneNumber?: {
    code: string;
    number: string;
  };
  phoneNumberVerificationStatus?: boolean;
  uploadedContent?: string[];
  bookmarks?: {
    content: string[];
  };
}

const userSchema = new mongoose.Schema<IUser>(
  {
    uniqueId: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String, required: [true, "Username is required"] },
    password: { type: String, required: [true, "Password is required"] },
    email: { type: String, required: [true, "Email is required"] },
    profileImageUrl: { type: String || undefined },
    emailVerificationOTP: { type: String },
    emailVerificationOTPExpires: { type: String },
    emailVerificationStatus: { type: Boolean, default: false },
    emailSendTime: { type: String },
    passwordResetOTP: { type: String },
    passwordResetOTPExpires: { type: String },
    passwordSendTime: { type: String },
    phoneNumber: {
      code: { type: String },
      number: { type: String },
    },
    phoneNumberVerificationStatus: { type: Boolean, default: false },
    userDob: { type: String },
    bio: {
      type: String,
      default: "Welcome to the, myB utilize your resources carefully.",
      max: [500, "bio must be within the 500 chars"],
    },
    address: {
      country: { type: String },
      city: { type: String },
      state: { type: String },
    },
    uploadedContent: [{ type: String, ref: "Content" }],

    bookmarks: {
      course: [{ type: String, ref: "Content" }],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
