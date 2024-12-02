import { AllContentInterface } from "@/constants";
import ShareButton from "../ui/ShareButton";
import CardTypeButton from "../ui/CardTypeButton";
import EditButton from "../ui/EditButton";
import DeleteButton from "../ui/DeleteButton";
import BurgerButton from "../ui/BurgerButton";
import { useRef, useEffect, useState } from "react";
import ExpandButton from "../ui/ExpandButton";
import BookmarkButton from "../ui/BookmarkButton";
import LinkReadInput from "../ui/LinkReadInput";
import HashTagChips from "../ui/HashTagChips";
import AddedOnChip from "../ui/AddedOnChip";
import { FaCross, FaHashtag, FaImage, FaNoteSticky } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import useCardHandler from "@/hooks/cardHandler";
import { getVerifiedToken } from "@/lib/cookieService";
import { useAuthContext } from "@/context/AuthContext";
import ShareCardModal from "../modal/shareCardModal";
import { CiSaveDown2 } from "react-icons/ci";
import { RxDot } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { HiLink } from "react-icons/hi";
import UniversalCardModal from "../modal/UniversalCardModal";

const UniversalCard = ({
  cardDetails,
}: {
  cardDetails: AllContentInterface;
}) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isExpandModalOpen, setIsExpandModalOpen] = useState<boolean>(false);
  const { cardHandler } = useCardHandler();
  const { userData } = useAuthContext();
  const token = getVerifiedToken();

  function handleBurgerButton() {
    setActiveCardId(
      activeCardId === cardDetails.cardId ? null : cardDetails.cardId
    );
  }

  function deleteBtnhandler() {
    if (!token) {
      return;
    }
    cardHandler(`delete/${cardDetails.cardId}`, token);
  }

  function bookmarkBtnhandler() {
    if (!token) {
      return;
    }
    cardHandler(`bookmark/${cardDetails.cardId}`, token);
  }

  function handleShareModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleExpandModal(){
    setIsExpandModalOpen(!isExpandModalOpen)
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
          <CardTypeButton Icon={returnTypeIcon(cardDetails.type)} />
          {cardDetails.createdById === userData.id ? (
            <BurgerButton onClickBtn={handleBurgerButton} />
          ) : (
            <CardTypeButton Icon={CiSaveDown2} />
          )}
        </div>
      </div>

      {/* for type image */}
      {cardDetails.type === "image" && typeof cardDetails.image === "string" && (
        <div className="w-24 mx-auto relative">
          <Image
            isBlurred
            className="w-full aspect-square mx-auto object-cover rounded-lg"
            alt={cardDetails.title}
            src={cardDetails.image}
          />
        </div>
      )}

      <p className="mt-2 text-sm font-noto-sans dark:text-white-600 text-black-500/80 group-hover:dark:text-white-800 group-hover:text-black-300 leading-4">
        {cardDetails.description}
      </p>

      {/* for type note */}
      {cardDetails.type === "note" && (
        <ul className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md ">
          {cardDetails.list.map((item, idx) => (
            <li
              key={idx}
              className="w-full flex justify-start items-center gap-1 text-sm font-noto-sans dark:text-blue-100 text-blue-900"
            >
              <RxDot className="size-5 dark:text-blue-200 text-blue-900" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* for type link */}
      {cardDetails.type === "link" ? (
        <div className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md flex flex-col gap-1">
          {cardDetails.link.map((item, idx) => (
            <LinkReadInput link={item ?? ""} key={idx} />
          ))}
        </div>
      ) : (
        Array.isArray(cardDetails.link) &&
        cardDetails.link.some((link) => link) && (
          <LinkReadInput link={cardDetails.link} />
        )
      )}

      {/* for type tags */}
      {cardDetails.type === "tag" ? (
        <div className="w-full dark:bg-black-300/40 bg-white-800/40 p-1 rounded-lg dark:shadow-white-500/10 shadow-md ">
          {cardDetails.tags && (
            <div className="flex justify-start items-start flex-wrap gap-1 mt-2">
              {cardDetails.tags.map((tag, idx) => (
                <HashTagChips content={tag} key={idx} />
              ))}
            </div>
          )}
        </div>
      ) : (
        cardDetails.tags && (
          <div className="flex justify-start items-start flex-wrap gap-1 mt-2">
            {cardDetails.tags.map((tag, idx) => (
              <HashTagChips content={tag} key={idx} />
            ))}
          </div>
        )
      )}

      <AddedOnChip date={cardDetails.addedOn} />

      {/* Popup Menu */}
      {isOpen && cardDetails.createdById === userData.id && (
        <div
          ref={popupRef}
          className="absolute sm:right-1 top-14 p-2 rounded-xl z-50 backdrop-blur-xl flex justify-start items-start sm:flex-col flex-row gap-2 shadow-md dark:bg-[#f5f5f5]/5 bg-[#121212]/5 dark:text-white text-black transition-all ease-soft-spring delay-75"
        >
          <EditButton />
          <ShareButton isAnimation={false} onClickBtn={handleShareModal} />
          <ExpandButton onClickBtn={handleExpandModal}/>
          <BookmarkButton onClickBtn={bookmarkBtnhandler} />
          <DeleteButton onClickBtn={deleteBtnhandler} />
        </div>
      )}
      {isModalOpen && (
        <ShareCardModal
          cardId={cardDetails.cardId}
          isOpen={isModalOpen}
          isShareable={cardDetails.isShareable}
          onClose={handleShareModal}
        />
      )}

      {isExpandModalOpen && (
        <UniversalCardModal
          cardDetails={cardDetails}
          isOpen={isExpandModalOpen}
          onClose={handleExpandModal}
        />
      )}
    </div>
  );
};

export default UniversalCard;

export function returnTypeIcon(type: string) {
  switch (type) {
    case "note":
      return FaNoteSticky;
    case "tweet":
      return BsTwitter;
    case "link":
      return HiLink;
    case "tag":
      return FaHashtag;
    case "image":
      return FaImage;
    default:
      return FaCross;
  }
}
