import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import User from "../../models/User.model";

export async function handleGetUserDataFunction(req: AuthenticatedRequest, res: Response) {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const userData = {
      uniqueId: user.uniqueId,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      userDob: user.userDob,
      bio: user.bio,
      address: user.address,
      emailVerificationStatus: user.emailVerificationStatus,
      phoneNumber: user.phoneNumber,
      phoneNumberVerificationStatus: user.phoneNumberVerificationStatus,
      uploadedContent: user.uploadedContent,
      bookmarks: user.bookmarks,
    };

    return res.status(200).json({ success: true, data: userData });
  } catch (error) {
    console.error("Error fetching content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching content.",
    });
  }
}
