import mongoose from "mongoose";
import { MongoClient } from "mongodb";

interface SearchQueryInput {
  userEmbeddings: number[];
}

interface SearchQueryOutput {
  index: string;
  knnBeta: {
    vector: number[];
    path: string;
    k: number;
  };
}

export async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI!);
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export const searchQuery = ({ userEmbeddings }: SearchQueryInput): SearchQueryOutput => ({
  index: "vector_search", 
  knnBeta: {
    vector: userEmbeddings,
    path: "embeddings", 
    k: 10, 
  },
});

export async function getEmbeddingRelatedData(userEmbeddings: number[]) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI!);

    await client.connect();

    const db = client.db(process.env.DB_NAME!); 
    const collection = db.collection(process.env.COLLECTION_NAME!); 

    searchQuery({ userEmbeddings });
    const results = await collection
    .aggregate([
        {
          "$vectorSearch": {
            "index": "vector_search",
            "path": "embeddings",
            "queryVector": userEmbeddings,
            "numCandidates": 1024,
            "limit": 10,
          }
        }
      ])
      .toArray();

    await client.close();

    return results;
  } catch (error) {
    console.error("Error fetching related data:", error);
    throw new Error("Failed to fetch related data.");
  }
}
