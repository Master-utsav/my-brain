import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import ContentModel, { ContentType } from "../../models/Content.model";
import { cloudinaryUploadContentImageFiles } from "../../utils/cloudinary.config";
import User from "../../models/User.model";

export async function handleAddContentRequestFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;

  try {
    const {
      title,
      description,
      link,
      tags,
      type,
      list,
      isShareable,
      image,
    } = req.body;

    if (!title || !type) {
      return res.status(400).json({
        success: false,
        message: "Title and Type are required.",
      });
    }

    if (!Object.values(ContentType).includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid content type provided.",
      });
    }

    let tagsArray: string[] = [];
    if (tags) {
      try {
        tagsArray = JSON.parse(tags);
      } catch {
        return res.status(400).json({
          success: false,
          message: "Invalid tags format. Must be a JSON array.",
        });
      }
    }
    
    let listsArray: string[] = [];
    if (list) {
      try {
        listsArray = JSON.parse(list);
      } catch {
        return res.status(400).json({
          success: false,
          message: "Invalid list format. Must be a JSON array.",
        });
      }
    }

    let linkArray: string[] = [];
    if (link) {
      try {
        linkArray = JSON.parse(link);
      } catch {
        return res.status(400).json({
          success: false,
          message: "Invalid link format. Must be a JSON array.",
        });
      }
    }

    let imageFile = "";
    if (type === "image") {
      if (req.file) {
        const uploadResult = (await cloudinaryUploadContentImageFiles(
          req.file.buffer
        )) as { url: string; public_id: string };
        imageFile = uploadResult.url;
      } else if (image) {
        imageFile = image;
      } else {
        return res.status(400).json({
          success: false,
          message: "No image file or URL provided for image content.",
        });
      }
    }

    const { nanoid } = await import("nanoid");

    const newContent = new ContentModel({
      title,
      description,
      link: linkArray,
      tags: tagsArray,
      type,
      image: imageFile,
      list: listsArray,
      cardId: nanoid(),
      isShareable: isShareable ?? false,
      createdById: userUniqueId,
      addedOn: Date.now(),
      groupedIn: ""
    });

    await newContent.save();

    const user = await User.findOne({ uniqueId: userUniqueId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.uploadedContent.push(newContent.cardId);
    await user.save();

    // Prepare response data
    const responseData = {
      title: newContent.title,
      description: newContent.description,
      link: newContent.link,
      tags: newContent.tags,
      image: newContent.image,
      type: newContent.type,
      list: newContent.list,
      cardId: newContent.cardId,
      isShareable: newContent.isShareable,
      createdById: newContent.createdById,
      addedOn: newContent.addedOn,
      groupedIn: newContent.groupedIn
    };

    return res.status(201).json({
      success: true,
      message: "Content added successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error adding content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while adding content.",
    });
  }
}
