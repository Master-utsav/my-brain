import { Response, Request } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";
import ContentModel from "../../models/Content.model";
import User from "../../models/User.model";

export async function handlePostShareBundleFunction(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;

  if (!userUniqueId) {
    return res
      .status(401)
      .json({ success: false, message: "User is unauthorized." });
  }

  const { cardIds } = req.body;
  if (!Array.isArray(cardIds)) {
    return res
      .status(400)
      .json({ success: false, message: "cardIds must be an array." });
  }

  try {
    const user = await User.findOne({ uniqueId: userUniqueId });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const { nanoid } = await import("nanoid");
    const previousGroupedKey = user.groupedKey || nanoid();
    user.groupedKey = previousGroupedKey;
    await user.save();

    const cardUpdated = await ContentModel.find({
      groupedIn: previousGroupedKey,
      createdById: userUniqueId,
    });

    for (const card of cardUpdated) {
      card.groupedIn = undefined;
      await card.save();
    }

    for (const cardId of cardIds) {
      const cardData = await ContentModel.findOne({
        cardId: cardId,
        createdById: userUniqueId,
        isShareable: true,
      });

      if (cardData) {
        cardData.groupedIn = previousGroupedKey;
        await cardData.save();
      }
    }

    return res.status(200).json({
      success: true,
      message: "Group key created successfully.",
      groupedKey: previousGroupedKey,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing the request.",
    });
  }
}

export async function handleGetShareBundleFunction(
  req: Request,
  res: Response
) {
  const groupedKey = req.params.id;

  if (!groupedKey) {
    res.status(404).json({ success: false, message: "Link is invalid" });
  }

  try {
    const cardsResponseData = await ContentModel.find({
      groupedIn: groupedKey,
    });
    const responseData = cardsResponseData.map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      tags: item.tags,
      type: item.type,
      image: item.image,
      list: item.list,
      cardId: item.cardId,
      isShareable: item.isShareable,
      createdById: item.createdById,
      addedOn: item.addedOn,
      isBookmarked: item.isBookmarked,
      groupedIn: item.groupedIn,
    }));

    res.status(200).json({
      success: true,
      message: "data fetched successfully",
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
