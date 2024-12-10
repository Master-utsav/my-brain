import { VoyageAIClient } from "voyageai";

const client = new VoyageAIClient({
  apiKey: process.env.VOYAGE_API_KEY_TEXT_TO_VECTOR!,
});

export async function TextToVector(title: string, description?: string) {
  let text = "";
  if (title && description) {
    text = title + description;
  }else{
    text = title
  }
  const result = await client.embed({
    input: text,
    model: "voyage-3",
  });
  return result.data && result.data[0].embedding;
}
