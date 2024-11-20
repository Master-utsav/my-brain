import { useState } from "react";
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
  const [list, setList] = useState<string[]>(listItem);
  const [errors, setErrors] = useState<{ list?: { message: string } }>({});

  const addItem = () => {
    setList([...list, ""]);
  };

  const removeItem = (index: number) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    onListItem(updatedList);
    if (updatedList.length > 0) setErrors({});
  };

  const handleTextAreaChange = (index: number, value: string) => {
    const updatedList = list.map((item, i) => (i === index ? value : item));
    setList(updatedList);
    onListItem(updatedList);
  };

  return (
    <div className="w-full relative font-ubuntu max-h-[40%] overflow-y-scroll">
      <div className="w-full rounded-xl bg-white dark:bg-black text-black dark:text-white ">
        {list.map((item, index) => (
          <HoverBorderGradient
          key={index}
            isAnimation={false}
            containerClassName="w-full rounded-xl mb-1"
            className="w-full flex p-0 font-ubuntu justify-center items-center text-black dark:text-white"
          >
            <AutoGrowTextArea
              placeholder={`add your list item ${index + 1}`}
              textAreaValue={item}
              OnTextArea={(value: string) => handleTextAreaChange(index, value)}
            />
            {index > 0 && (
              <CloseButton onClickBtn={() => removeItem(index)} containerClassName="p-1" />
            )}
          </HoverBorderGradient>
        ))}

        <button type="button" onClick={addItem} className="mt-2 text-blue-500">
          + Add Item
        </button>
      </div>
      {errors.list && (
        <p className="text-red-500 text-sm text-end">{errors.list.message}</p>
      )}
    </div>
  );
}
