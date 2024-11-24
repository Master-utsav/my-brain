import { useState, useEffect } from "react";
import AutoGrowTextArea from "@/components/ui/AutoGrowTextArea";
import { HoverBorderGradient } from "./HoverBorderGradient";
import CloseButton from "./CloseButton";

export default function ListWithAutoGrowTextArea({
  listItem,
  onListItem,
}: {
  listItem: string[];
  onListItem: (data: string[]) => void;
}) {
  const [list, setList] = useState<string[]>(listItem || [""]);
  const [error, setError] = useState<string | null>(null);

  // Function to validate the list
  const validateList = (updatedList: string[]) => {
    if (updatedList.length === 0 || updatedList.every((item) => item.trim() === "")) {
      setError("At least one non-empty list item is required.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleAddItem = () => {
    const updatedList = [...list, ""];
    setList(updatedList);
    validateList(updatedList); 
  };

  const handleRemoveItem = (index: number) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    validateList(updatedList); 
    onListItem(updatedList); 
  };

  const handleTextAreaChange = (index: number, value: string) => {
    const updatedList = list.map((item, i) => (i === index ? value : item));
    setList(updatedList);
    validateList(updatedList); 
    onListItem(updatedList); 
  };

  useEffect(() => {
    validateList(list);
  }, [list]);

  return (
    <div className="w-full relative font-ubuntu">
      <div className="w-full rounded-xl bg-white dark:bg-black text-black dark:text-white flex flex-col justify-end items-end">
        {list.map((item, index) => (
          <HoverBorderGradient
            key={index}
            isAnimation={false}
            containerClassName="w-full rounded-lg mb-1"
            className="w-full flex p-0 font-ubuntu justify-center items-center text-black dark:text-white bg-white dark:bg-black"
          >
            <AutoGrowTextArea
              placeholder={`Add your list item ${index + 1}`}
              textAreaValue={item}
              OnTextArea={(value: string) => handleTextAreaChange(index, value)}
            />
            {index > 0 && (
              <CloseButton
                isAnimation={false}
                onClickBtn={() => handleRemoveItem(index)}
                containerClassName="p-1"
              />
            )}
          </HoverBorderGradient>
        ))}
        <HoverBorderGradient
          isAnimation={false}
          onClick={handleAddItem}
          containerClassName="w-full rounded-lg"
          className="text-blue-500 w-full font-ubuntu text-sm dark:bg-black bg-white-800"
        >
          Add list
        </HoverBorderGradient>
      </div>
      {error && <p className="text-red-500 text-sm mt-1 text-end">{error}</p>}
    </div>
  );
}
