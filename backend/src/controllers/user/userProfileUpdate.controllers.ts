import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import User from "../../models/User.model";
import { cloudinaryDeleteUserImage, cloudinaryUploadUserImageFiles } from "../../utils/cloudinary.config";
import {Response} from "express"
// import fs from "fs";

export async function handleUpdateUserImageFunction(req : AuthenticatedRequest, res: Response) {
    try {
      const userId = req.userId;
      
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      if (!req.file) {
        return res.status(400).json({ message: "No image file uploaded." });
      }
      
      if(user.profileImageUrl){
        await cloudinaryDeleteUserImage(user.profileImageUrl);
      }
      
      // const localFilePath = req.file.path;
  
      // const uploadResult = await cloudinaryUploadUserImageFiles(localFilePath);
      const uploadResult = await cloudinaryUploadUserImageFiles(req.file.buffer) as { url: string; public_id: string };

      
      if (!uploadResult) {
        return res.status(500).json({ message: "Failed to upload image to Cloudinary." });
      }
  
      // fs.unlink(localFilePath, (err:any) => {
      //   if (err) {
      //     console.error("Error deleting local file:", err);
      //   }
      // });
  
      const updatedUser = await User.findByIdAndUpdate(userId , {
        $set : {
          profileImageUrl : uploadResult.url
        }
      })
      
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
      }
      
      await updatedUser.save();
      

      return res.status(200).json({
        success: true,
        message: "Image uploaded successfully.",
      });
    } catch (error) {
      console.error("Error updating user image:", error);
      return res.status(500).json({success: false, message: "An error occurred while uploading the image." });
    }
  }