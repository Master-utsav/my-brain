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
    res
      .status(401)
      .json({ success: false, messsage: "user is un-authourized" });
  }

  const { cardIds } = req.body;
  if (!Array.isArray(cardIds)) {
    res
      .status(404)
      .json({ success: false, message: "cardIds are not in a array" });
  }

  const { nanoid } = await import("nanoid");
  const groupedkey = nanoid();

  try {
    cardIds.map(async (cardId: string) => {
      const cardData = await ContentModel.findOne({
        cardId: cardId,
        createdById: userUniqueId,
        isShareable: true,
      });
      cardData.groupedIn = groupedkey;

      await cardData.save();
    });

    const user = await User.findOne({ uniqueId: userUniqueId });
    user.groupedkey = groupedkey;
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "group key created successfully" });
  } catch (error) {
    console.error("Error fetching content:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching content.",
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
