import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useEffect, useRef } from "react";

export default function AutoGrowTextArea({
  OnTextArea,
  textAreaValue,
  placeholder,
}: {
  OnTextArea: (data: string) => void;
  textAreaValue: string;
  placeholder: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const defaultRows = 1;
  const maxRows = undefined; // Allow unlimited rows

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto"; // Reset the height
    console.log(textarea.value)
    OnTextArea(textarea.value); // Trigger the callback to update the value
  };

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto"; // Reset height to recalculate
      const style = window.getComputedStyle(textarea);
      const borderHeight =
        parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
      const paddingHeight =
        parseInt(style.paddingTop) + parseInt(style.paddingBottom);

      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = maxRows
        ? lineHeight * maxRows + borderHeight + paddingHeight
        : Infinity;

      const newHeight = Math.min(
        textarea.scrollHeight + borderHeight,
        maxHeight
      );
      textarea.style.height = `${newHeight}px`; // Set new height
    }
  }, [textAreaValue]); // Re-run height calculation whenever textAreaValue changes

  return (
    <div className="space-y-2 w-full rounded-lg">
      <Textarea
        id="textarea-19"
        placeholder={placeholder}
        ref={textareaRef}
        value={textAreaValue}
        onChange={handleInput}
        rows={defaultRows}
        className="min-h-[none] dark:bg-black bg-white-800 text-black dark:text-white text-sm  rounded-lg resize-none hide-scrollbar focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
