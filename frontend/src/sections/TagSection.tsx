import UniversalCard from "@/components/card/UniversalCard";
import { TagsInterface } from "@/constants";
// import { tagsData } from '@/constants'
import { useContentContext } from "@/context/ContentContext";
import { motion } from "framer-motion";
import React from "react";

const TagSection: React.FC = () => {
  const { contentData } = useContentContext();
  const tagsData: TagsInterface[] = Array.isArray(contentData)
    ? contentData.filter((item) => item.type === "tag")
    : [];

  return (
    <section className="w-full min-h-[200vh] dark:bg-black bg-white p-5 px-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {tagsData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <UniversalCard cardDetails={item} key={item.cardId}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TagSection;
