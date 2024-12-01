import { motion } from "framer-motion";
import ImageCard from "@/components/card/ImageCard";
import NoteCard from "@/components/card/NoteCard";
import TweetCard from "@/components/card/TweetCard";
import TagCard from "@/components/card/TagCard";
import LinkCard from "@/components/card/LinkCard";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { CONTENT_API } from "@/lib/env";
import { AllContentInterface } from "@/constants";
import axios from "axios";

const ViewSection = () => {
  const { cardId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AllContentInterface[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!cardId) return;
      setLoading(true);
      setError(null); 

      try {
        const response = await axios.get(`${CONTENT_API}/get-content/${cardId}`);
        if (response.data.success) {
          setData(response.data.data);
        } else {
          setError("Failed to fetch content data.");
        }
      } catch (err: any) {
        setError(
          err.response?.data?.message || "An error occurred while fetching content."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cardId]);

  const sortedContentData = Array.isArray(data)
    ? data.sort((a, b) => {
        const dateA = new Date(a.addedOn).getTime();
        const dateB = new Date(b.addedOn).getTime();
        return dateB - dateA;
      })
    : data;

  if(loading){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>{error}</div>;
  }

  return (
    <section className="w-full min-h-[200vh] dark:bg-black bg-white  px-8 py-28">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(sortedContentData) &&
          sortedContentData.map((item, idx) => (
            <motion.div
              key={item.cardId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {item.type === "note" && (
                <NoteCard key={item.cardId} cardDetails={item} />
              )}
              {item.type === "tweet" && (
                <TweetCard key={item.cardId} cardDetails={item} />
              )}
              {item.type === "tag" && (
                <TagCard key={item.cardId} cardDetails={item} />
              )}
              {item.type === "link" && (
                <LinkCard key={item.cardId} cardDetails={item} />
              )}
              {item.type === "image" && (
                <ImageCard key={item.cardId} cardDetails={item} />
              )}
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default ViewSection;
