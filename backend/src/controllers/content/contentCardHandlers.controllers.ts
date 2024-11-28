import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import ContentModel from "../../models/Content.model";

export async function handleDeleteCardFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;
  const cardId = req.params.cardId;

  if (!userUniqueId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  if (!cardId) {
    return res.status(401).json({ success: false, message: "CardId Required" });
  }

  try {
    const deleteResult = await ContentModel.deleteOne({ cardId: cardId });
    if (deleteResult.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error fetching content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching content.",
    });
  }
}
