import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import { Response } from "express";
import User from "../../models/User.model";
import bcrypt from "bcryptjs"
import { cloudinaryDeleteUserImage } from "../../utils/cloudinary.config";

export async function handleDeleteAccountFunction(
    req: AuthenticatedRequest,
    res: Response
  ) {
    const userId = req.userId;
    const { password } = req.body;
  
    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No user found" });
    }
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid password" });
      }
      
      if(user.profileImageUrl){
        await cloudinaryDeleteUserImage(user.profileImageUrl);
      }
      
      const deletedUser = await User.deleteOne({ email: user.email });
  
      if (!deletedUser) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Account deleted successfully" });
    } catch (error) {
      console.error("Error deleting account:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }