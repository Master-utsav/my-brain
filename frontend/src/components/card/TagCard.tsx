import ShareButton from "../ui/ShareButton";
import CardTypeButton from "../ui/CardTypeButton";
import EditButton from "../ui/EditButton";
import DeleteButton from "../ui/DeleteButton";
import { TagsInterface } from "@/constants";
import BurgerButton from "../ui/BurgerButton";
import { useRef, useEffect, useState } from "react";
import ExpandButton from "../ui/ExpandButton";
import BookmarkButton from "../ui/BookmarkButton";
import LinkReadInput from "../ui/LinkReadInput";
import HashTagChips from "../ui/HashTagChips";
import AddedOnChip from "../ui/AddedOnChip";
import { FaHashtag } from "react-icons/fa6";

const TagCard = ({ cardDetails }: { cardDetails: TagsInterface }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  function handleBurgerButton() {
    setActiveCardId(
      activeCardId === cardDetails.cardId ? null : cardDetails.cardId
    );
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setActiveCardId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, [setActiveCardId]);

  const isOpen = activeCardId === cardDetails.cardId;

  return (
    <div className="w-full h-full relative flex flex-col rounded-lg justify-start shadow-md items-start p-3 gap-2 dark:bg-[#121212]/80 bg-[#f5f5f5]/80 dark:text-white text-black border-[1px] transition-all ease-soft-spring delay-75 dark:border-[#121212] border-[#f5f5f5] hover:dark:bg-black hover:bg-white hover:border-black/40 hover:dark:border-white/40 group">
      <div className="w-full header gap-2 flex justify-between items-start">
        <div className="w-full flex justify-start items-start flex-col gap-1">
          <h1 className="w-full md:text-xl text-lg font-ubuntu dark:text-white-800 text-black-300 group-hover:dark:text-white group-hover:text-black">
            {cardDetails.title}
          </h1>
        </div>
        <div className="seperator h-full w-[1px] border-[1px] dark:border-white-800/20 border-black-200/20" />

        <div className="flex justify-center items-center flex-col sm:flex-row gap-1">
          <CardTypeButton Icon={FaHashtag} />
          <BurgerButton onClickBtn={handleBurgerButton} />
        </div>
      </div>
      <p className="mt-2 text-sm font-noto-sans dark:text-white-600 text-black-500/80 group-hover:dark:text-white-800 group-hover:text-black-300">
        {cardDetails.description}
      </p>

      <div className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md ">
      {cardDetails.tags && (
        <div className="flex justify-start items-start flex-wrap gap-1 mt-2">
          {cardDetails.tags.map((tag, idx) => (
            <HashTagChips content={tag} key={idx} />
          ))}
        </div>
      )}
      </div>

      {Array.isArray(cardDetails.link) &&
        cardDetails.link.some((link) => link) && (
          <LinkReadInput link={cardDetails.link} />
      )}


      <AddedOnChip date={cardDetails.addedOn} />

      {/* Popup Menu */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute sm:right-1 top-14 p-2 rounded-xl z-50 backdrop-blur-xl flex justify-start items-start sm:flex-col flex-row gap-2 shadow-md dark:bg-[#f5f5f5]/5 bg-[#121212]/5 dark:text-white text-black transition-all ease-soft-spring delay-75"
        >
          <EditButton />
          <ShareButton isAnimation={false} />
          <ExpandButton />
          <BookmarkButton />
          <DeleteButton />
        </div>
      )}
    </div>
  );
};

export default TagCard;
