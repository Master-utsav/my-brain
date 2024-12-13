import { useState, useEffect } from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";
import CloseButton from "./CloseButton";

export default function ListWithLinkInput({
  listItem,
  onListItem,
}: {
  listItem: string[];
  onListItem: (data: string[]) => void;
}) {
  const [list, setList] = useState<string[]>(listItem || [""]);
  const [error, setError] = useState<string | null>(null);
  
  console.log(listItem)
  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateList = (updatedList: string[]) => {
    if (updatedList.length === 0) {
      setError("At least one valid URL is required.");
      return false;
    }
    const invalidURLs = updatedList.filter((item) => !isValidURL(item));
    if (invalidURLs.length > 0) {
      setError("One or more URLs are invalid.");
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

  const handleInputChange = (index: number, value: string) => {
    const updatedList = list.map((item, i) => (i === index ? value : item));
    setList(updatedList);
    validateList(updatedList);
    onListItem(updatedList);
  };

  useEffect(() => {
    if (listItem && listItem.length > 0) {
      setList(listItem);
    }
  }, [listItem]);

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
            <input
              type="url"
              placeholder={`Add your link ${index + 1}`}
              value={item}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="flex-1 p-2 text-sm text-black dark:text-white bg-transparent outline-none"
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
          Add Link
        </HoverBorderGradient>
      </div>
      {error && <p className="text-red-500 text-sm mt-1 text-end">{error}</p>}
    </div>
  );
}
