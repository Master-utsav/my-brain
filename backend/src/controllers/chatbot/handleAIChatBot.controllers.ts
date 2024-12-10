import { Response } from "express";
import { TextToVector } from "../../helpers/textToVector";
import { getEmbeddingRelatedData } from "../../utils/db.config";
import { aiChatResponse } from "../../helpers/aiChatModel";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";

export async function handleAIChatBot(
  req: AuthenticatedRequest,
  res: Response
) {
  const userUniqueId = req.userUniqueId;
  if (!userUniqueId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const { text } = req.body;

  try {
    const textEmbeddings = await TextToVector(text);
    if (textEmbeddings) {
      const responseArray = await getEmbeddingRelatedData(textEmbeddings);
      let titles: string[] = [];
      let descriptions: string[] = [];

      responseArray.map((item) => {
        titles.push(item.title);
        descriptions.push(item.description);
      });

      const response = await aiChatResponse(titles, descriptions, text);

      return res.status(200).json({ success: true, message: response });
    }
  } catch (error: any) {
    console.error("Error handling in getting response", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}
