import { MdDateRange } from "react-icons/md";
import { HoverBorderGradient } from "./HoverBorderGradient";

const AddedOnChip = ({
  date = "2024-11-25T18:50:58.961Z",
}: {
  date?: string;
}) => {
  const fetchDate = (date: string) => {
    const validDate = new Date(date);

    if (isNaN(validDate.getTime())) {
      return "Invalid Date";
    }

    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const parts = formatter.formatToParts(validDate);
    const day = parts.find((p) => p.type === "day")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const year = parts.find((p) => p.type === "year")?.value;

    return `${day} / ${month} / ${year}`;
  };

  return (
    <div className="font-noto-sans text-black-500 flex gap-1 justify-center items-center rounded-full bg-white-700/50 dark:bg-black-500/40 pr-2">
      <HoverBorderGradient
        isAnimation={false}
        containerClassName="cursor-not-allowed"
        className="cursor-not-allowed p-2 flex justify-center items-center dark:bg-black bg-white-800 text-black dark:text-white "
      >
        <MdDateRange className="h-[0.8rem] w-[0.8rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Added on</span>
      </HoverBorderGradient>
      <span className="dark:text-white text-black text-sm font-noto-sans ">
        {fetchDate(date)}
      </span>
    </div>
  );
};

export default AddedOnChip;
