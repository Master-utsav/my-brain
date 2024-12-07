import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import ContentModel, { ContentType } from "../../models/Content.model";
import { cloudinaryDeleteContentImage, cloudinaryUploadContentImageFiles } from "../../utils/cloudinary.config";

export async function handleEditContentRequestFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;
  const { cardId } = req.params;

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

    if (!cardId) {
      return res.status(400).json({
        success: false,
        message: "Card ID is required.",
      });
    }

    const content = await ContentModel.findOne({ cardId });

    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found.",
      });
    }

    // Ensure the user is authorized to edit the content
    if (content.createdById !== userUniqueId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to edit this content.",
      });
    }

    // Validate content type if provided
    if (type && !Object.values(ContentType).includes(type)) {
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

    let imageFile = content.image; 

    if(imageFile){
        await cloudinaryDeleteContentImage(imageFile);
      }
      
    if (type === "image") {
      if (req.file) {
        const uploadResult = (await cloudinaryUploadContentImageFiles(
          req.file.buffer
        )) as { url: string; public_id: string };
        imageFile = uploadResult.url;
      } else if (image) {
        imageFile = image;
      }
    }

    if (title) content.title = title;
    if (description) content.description = description;
    if (linkArray.length > 0) content.link = linkArray;
    if (tagsArray.length > 0) content.tags = tagsArray;
    if (type) content.type = type;
    if (imageFile) content.image = imageFile;
    if (listsArray.length > 0) content.list = listsArray;
    if (isShareable !== undefined) content.isShareable = isShareable;

    content.addedOn = Date.now(),

    await content.save();

    const responseData = {
      title: content.title,
      description: content.description,
      link: content.link,
      tags: content.tags,
      image: content.image,
      type: content.type,
      list: content.list,
      cardId: content.cardId,
      isShareable: content.isShareable,
      createdById: content.createdById,
      addedOn: content.addedOn,
    };

    return res.status(200).json({
      success: true,
      message: "Content updated successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error editing content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while editing content.",
    });
  }
}
