import { CohereClientV2 } from "cohere-ai"

const cohere = new CohereClientV2({});

export async function aiChatResponse(titles: string[] , descriptions: string[] , userText: string) {
  const stream = await cohere.chatStream({
    model: 'command-r-plus-08-2024',
    messages: [
        {
          role: 'system',
          content: 'You are a highly skilled chatbot that responds in a natural, human-like manner. When answering queries, make sure to format your response cleanly, using bullet points for lists and code snippets for any code. The response should be concise and easy to understand.'
        },
        {
          role: 'user',
          content: `Here is the user query: "${userText}". Before answering the query, please consider the following titles and descriptions, as they may be relevant to the user's query.`
        },
        {
          role: 'user',
          content: `Titles: ${titles}, Descriptions: ${descriptions}. If these are relevant to the query, please incorporate them into your response. Ensure that the response is brief and focused on answering the user's question directly.`
        }
      ]
  });

  let accumulatedContent = ""; 
  for await (const chatEvent of stream) {
    if (chatEvent.type === 'content-delta') {
      const messageContent = chatEvent.delta?.message?.content?.text;
      if (messageContent) {
        accumulatedContent += messageContent; 
      }
    }
  }
  return accumulatedContent;
};
