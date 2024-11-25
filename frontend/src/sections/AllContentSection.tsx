import { motion } from "framer-motion";
import ImageCard from "@/components/card/ImageCard";
import NoteCard from "@/components/card/NoteCard";
import TweetCard from "@/components/card/TweetCard";
import TagCard from "@/components/card/TagCard";
import LinkCard from "@/components/card/LinkCard";
import { useContentContext } from "@/context/ContentContext";

const AllContentSection = () => {
  const { contentData } = useContentContext();
  const sortedContentData = Array.isArray(contentData)
    ? contentData.sort((a, b) => {
        const dateA = new Date(a.addedOn).getTime();
        const dateB = new Date(b.addedOn).getTime();
        return dateB - dateA;
      })
    : contentData;

  return (
    <section className="w-full min-h-[200vh] dark:bg-black bg-white p-5 px-8">
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

export default AllContentSection;
