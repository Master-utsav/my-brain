
import { useState } from "react";
import { CloudUpload, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";

export default function SingleFileUploader({
  OnFileSubmit,
}: {
  OnFileSubmit: (file: File | null) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  const dropZoneConfig = {
    maxFiles: 1, 
    maxSize: 1024 * 1024 * 4, 
    multiple: false,
  };

  const handleFileChange = (value: File[] | null) => {
    const selectedFile = value && value.length > 0 ? value[0] : null; 
    setFile(selectedFile); 
    OnFileSubmit(selectedFile); 
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <FileUploader
        value={file ? [file] : null} 
        onValueChange={handleFileChange} 
        dropzoneOptions={dropZoneConfig}
        className="relative bg-background rounded-lg p-2"
      >
        <FileInput
          id="fileInput"
          className="outline-dashed outline-1 outline-slate-500"
        >
          <div className="flex items-center justify-center flex-col p-2 w-full">
            <CloudUpload className="text-gray-500 w-10 h-10" />
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, or GIF (Max size: 4MB)
            </p>
          </div>
        </FileInput>
        <FileUploaderContent>
          {file && (
            <FileUploaderItem index={0}>
              <Paperclip className="h-4 w-4 stroke-current" />
              <span>{file.name}</span>
            </FileUploaderItem>
          )}
        </FileUploaderContent>
      </FileUploader>
    </div>
  );
}
