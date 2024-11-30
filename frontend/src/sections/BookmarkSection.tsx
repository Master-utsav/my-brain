import React from "react";
import LinkCard from "@/components/card/LinkCard";
import { AllContentInterface } from "@/constants";
import { useContentContext } from "@/context/ContentContext";
import { motion } from "framer-motion";
import ImageCard from "@/components/card/ImageCard";
import NoteCard from "@/components/card/NoteCard";
import TagCard from "@/components/card/TagCard";
import TweetCard from "@/components/card/TweetCard";

const BookmarkSection: React.FC = () => {
  const { contentData } = useContentContext();
  const bookmarkData: AllContentInterface[] = Array.isArray(contentData)
    ? contentData
        .filter((item) => item.isBookmarked === true)
        .sort((a, b) => {
          const dateA = new Date(a.addedOn).getTime();
          const dateB = new Date(b.addedOn).getTime();
          return dateB - dateA;
        })
    : [];

  return (
    <section className="w-full min-h-[200vh] dark:bg-black bg-white p-5 px-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {Array.isArray(bookmarkData) &&
          bookmarkData.map((item, idx) => (
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

export default BookmarkSection;
