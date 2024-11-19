import ShareButton from "../ui/ShareButton";
import CardTypeButton from "../ui/CardTypeButton";
import { BsTwitter } from "react-icons/bs";
import EditButton from "../ui/EditButton";
import DeleteButton from "../ui/DeleteButton";
import { TweetInterface } from "@/constants";

const TweetCard = ({ cardDetails }: { cardDetails: TweetInterface }) => {
  return (
    <div className="w-full h-full flex flex-col rounded-lg justify-center shadow-md items-center p-3 gap-1 dark:bg-[#121212]/80 bg-[#f5f5f5]/80 dark:text-white text-black border-[1px] transition-all ease-soft-spring delay-75 dark:border-[#121212] border-[#f5f5f5] hover:dark:bg-black hover:bg-white hover:border-black/40 hover:dark:border-white/40 group">
      <div className="w-full header gap-2 flex justify-between items-start">
        <div className="flex justify-start items-start flex-col gap-1">
          <h1 className="w-full md:text-2xl text-lg font-ubuntu dark:text-white-800 text-black-300 group-hover:dark:text-white group-hover:text-black">
            {cardDetails.title}
          </h1>
          <p className="mt-2 text-base font-noto-sans dark:text-white-600 text-black-500/80 group-hover:dark:text-white-800 group-hover:text-black-300">
            {cardDetails.description}
          </p>
        </div>
        <div className="seperator h-full border-[1px] dark:border-white-800/20 border-black-200/20" />
        <div className="flex justify-center items-center flex-col gap-1">
          <CardTypeButton Icon={BsTwitter} />
          <EditButton />
          <ShareButton isAnimation={false} />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
