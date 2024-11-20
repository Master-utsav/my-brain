import { MdDateRange } from "react-icons/md";
import { HoverBorderGradient } from "./HoverBorderGradient";

const AddedOnChip = ({
  date = new Date("2024-11-17T11:42:54.118+00:00"),
}: {
  date?: Date;
}) => {
  const fetchDate = (date: Date) => {
    const stringDate = date.toDateString();
    const splitedDate = stringDate.split(" ");
    const month = splitedDate[1];
    const year = splitedDate[3];
    const dateNum = splitedDate[2];
    return `${dateNum} / ${month} / ${year}`;
  };

  return (
    <div
      className="font-noto-sans text-black-500 flex gap-1 justify-center items-center rounded-full bg-white-700/50 dark:bg-black-500/40 pr-2"
    >
        <HoverBorderGradient
          isAnimation={false}
          containerClassName="cursor-not-allowed"
          className="cursor-not-allowed p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white "
        >
          <MdDateRange className="h-[0.8rem] w-[0.8rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Added on</span>
        </HoverBorderGradient>
      <span className="dark:text-white text-black text-sm font-noto-sans ">{fetchDate(date)}</span>
    </div>
  );
};

export default AddedOnChip;
