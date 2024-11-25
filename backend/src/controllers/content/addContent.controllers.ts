import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import ContentModel, { ContentType } from "../../models/Content.model";
import { cloudinaryUploadContentImageFiles } from "../../utils/cloudinary.config";

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
      cardId,
      isShareable,
      image,
    } = req.body;

    if (!title || !type) {
      return res.status(400).json({
        success: false,
        message: "Title, Type, and Card ID are required.",
      });
    }

    if (!Object.values(ContentType).includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid content type provided.",
      });
    }

    let imageFile = "";

    if (req.file) {
      const uploadResult = (await cloudinaryUploadContentImageFiles(
        req.file.buffer
      )) as { url: string; public_id: string };

      imageFile = uploadResult.url;
    } else if (image) {
      imageFile = image;
    } else {
      return res
        .status(400)
        .json({ success: false, message: "No image file or URL provided." });
    }

    const { nanoid } = await import("nanoid");

    const newContent = new ContentModel({
      title,
      description,
      link,
      tags,
      type,
      image: imageFile,
      cardId : nanoid(),
      isShareable: isShareable ?? false,
      createdById: userUniqueId,
      addedOn: Date.now(),
    });

    await newContent.save();

    const responseData = {
        title: newContent.title,
        description: newContent.description,
        link: newContent.link,
        tags: newContent.tags,
        type: newContent.type,
        cardId: newContent.cardId,
        isShareable: newContent.isShareable,
        createdById: newContent.createdById,
        addedOn: newContent.addedOn,
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
