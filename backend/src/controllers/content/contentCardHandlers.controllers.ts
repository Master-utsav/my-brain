import { Response } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import ContentModel from "../../models/Content.model";
import User from "../../models/User.model";

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
    const userUpdateResult = await User.updateOne(
      { uniqueId : userUniqueId },  
      { $pull: { uploadedContent: cardId } }  
    );

    if(!userUpdateResult){
      return res.status(401).json({ success: false, message: "card not found" });
    }
    
    const deleteResult = await ContentModel.deleteOne({ cardId: cardId });
    if (deleteResult.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }
    
    return res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (error: any) {
    console.error("Error fetching content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching content.",
      error: error.message,
    });
  }
}

export async function handleBookmarkCardFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;
  const cardId = req.params.cardId;

  if (!userUniqueId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  if (!cardId) {
    return res
      .status(400)
      .json({ success: false, message: "CardId is required" });
  }

  try {
    const card = await ContentModel.findOne({ cardId });

    if (!card) {
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });
    }

    if (typeof card.isBookmarked === "undefined") {
      card.isBookmarked = false;
    }

    card.isBookmarked = !card.isBookmarked;

    await card.save();

    return res.status(200).json({
      success: true,
      message: `Card ${
        card.isBookmarked ? "bookmarked" : "un-bookmarked"
      } successfully`,
      card,
    });
  } catch (error: any) {
    console.error("Error handling bookmark card:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function handleIsShareableCardFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;
  const cardId = req.params.cardId;

  if (!userUniqueId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  if (!cardId) {
    return res
      .status(400)
      .json({ success: false, message: "CardId is required" });
  }

  try {
    const card = await ContentModel.findOne({ cardId });

    if (!card) {
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });
    }

    if (typeof card.isShareable === "undefined") {
      card.isShareable = false;
    }

    card.isShareable = !card.isShareable;

    await card.save();

    return res.status(200).json({
      success: true,
      message: `Card ${
        card.isBookmarked ? "can now shareable" : "remove from shareable"
      }`,
      card,
    });
  } catch (error: any) {
    console.error("Error handling making  shareable card:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}
