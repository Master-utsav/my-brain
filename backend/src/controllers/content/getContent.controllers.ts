import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import { Response } from "express";
import ContentModel, { IContent } from "../../models/Content.model";

export async function handleGetAllContentOfUserFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;

  if (!userUniqueId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const content: IContent[] = await ContentModel.find({
      createdById: userUniqueId,
    });

    const responseData = content.map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      tags: item.tags,
      type: item.type,
      cardId: item.cardId,
      isShareable: item.isShareable,
      createdById: item.createdById,
      addedOn: item.addedOn,
    }));

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching content.",
    });
  }
}
