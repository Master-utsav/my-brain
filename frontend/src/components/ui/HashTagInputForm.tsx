import { Tag, TagInput } from "emblor";
import { useState } from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";

export default function HashTagInputForm({
  tags,
  OnTags,
}: {
  tags: Tag[];
  OnTags: (tags: Tag[]) => void;
}) {
  const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className="w-full space-y-2">
      <HoverBorderGradient
        isAnimation={false}
        containerClassName="w-full rounded-xl mb-1"
        className="w-full flex p-0 font-ubuntu justify-center dark:bg-black bg-white-800 items-center text-black dark:text-white"
      >
        <TagInput
          id="input-57"
          tags={exampleTags}
          setTags={(value: React.SetStateAction<Tag[]>) => {
            setExampleTags((prevState) =>
              typeof value === "function" ? value(prevState) : value
            );

            if (typeof value === "function") {
              OnTags(value(exampleTags));
            } else {
              OnTags(value);
            }
          }}
          placeholder="Add a tag"
          styleClasses={{
            inlineTagsContainer:
              "border-input rounded-lg bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-none focus-within:outline-none focus-within:ring-none p-1 gap-1 dark:bg-black bg-white-800 text-black dark:text-white text-sm  rounded-lg resize-none hide-scrollbar focus-visible:ring-0 focus-visible:ring-offset-0",
            input:
              "w-full min-w-[80px] focus-visible:outline-none shadow-none px-2 h-7 ",
            tag: {
              body:
                "h-7 relative bg-background border border-input font-noto-sans hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
              closeButton:
                "absolute -inset-y-px -end-px p-0 rounded-e-lg flex size-7 transition-colors outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 text-muted-foreground/80 hover:text-foreground",
            },
          }}
          activeTagIndex={activeTagIndex}
          setActiveTagIndex={setActiveTagIndex}
        />
      </HoverBorderGradient>
    </div>
  );
}