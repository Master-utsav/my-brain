import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseButton from "../ui/CloseButton";
import { useNavigate } from "react-router-dom";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import AutoGrowTextArea from "../ui/AutoGrowTextArea";
import ShareableSelectButton from "../ui/ShareableSelectButton";
import HashTagInputForm from "../ui/HashTagInputForm";
import { ImageInterfaceSchema } from "@/validChecksSchema/zodSchemas";
import FileInputField from "../ui/FileInputField";

type LinkInterface = z.infer<typeof ImageInterfaceSchema>;

const ImageFormModal: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
    watch,
  } = useForm<LinkInterface>({
    resolver: zodResolver(ImageInterfaceSchema),
    defaultValues: {
      tags: [],
      type: "image",
      isShareable: false,
      description: "",
    },
  });

  const [showLTagInput, setShowTagInput] = useState<boolean>(false);
  const [showLinkInput, setShowLinkInput] = useState<boolean>(false);
  const [upload, setUpload] = useState<"LINK" | "FILE">("LINK");

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/user/image-box");
  };

  const onSubmit = (data: LinkInterface) => {
    console.log("submitting");
    const formData = new FormData();
    formData.append("type", data.type);
    formData.append("title", data.title);
    formData.append("description", data.description ?? "");
    formData.append("image", data.image);
    formData.append("link", data.link ?? "");
    formData.append("tags", JSON.stringify(data.tags));
    formData.append("isShareable", data.isShareable ? "true" : "false");

    console.log(Array.from(formData.entries()));
  };

  const toggleTagInput = () => {
    setShowTagInput(!showLTagInput);
    if (showLTagInput) {
      setValue("tags", []);
    }
  };

  const toggleLinkInput = () => {
    setShowLinkInput(!showLinkInput);
    if (showLinkInput) {
      setValue("link", "");
    }
  };

  function handleFileSubmit(file: File | null) {
    setValue("image", "");
    if (!file) return;
    setValue("image", file);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex w-full justify-center min-h-screen overflow-y-auto items-center bg-white dark:bg-black-200 bg-opacity-50 backdrop-blur-lg z-50 transition-opacity duration-300 py-10`}
      >
        <motion.div
          initial={{ scale: 0.9, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 100 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white space-y-2 overflow-hidden dark:bg-black rounded-lg w-full sm:max-w-xl mx-auto p-6 shadow-lg dark:shadow-md dark:shadow-white-500/40 "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="top-1 right-1 absolute">
            <CloseButton onClickBtn={onClose} />
          </div>

          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:text-3xl text-2xl text-center text-transparent bg-clip-text font-medium font-kalnia bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-100 dark:via-gray-300 dark:to-gray-500"
          >
            Save you images
          </motion.h2>
          <p className="mt-2 text-center font-ubuntu dark:text-white-600 text-black-200">
            fill the given fields to save images
          </p>

          <div className="space-y-4  relative">
            {/* Title Input */}
            <div className="w-full relative">
              <HoverBorderGradient
                isAnimation={false}
                containerClassName="w-full rounded-lg"
                className="w-full flex p-0 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
              >
                <AutoGrowTextArea
                  placeholder="write your title"
                  OnTextArea={(data: string) => setValue("title", data)}
                  textAreaValue={watch("title", "") ?? ""}
                />
              </HoverBorderGradient>
              {errors.title && (
                <p className="text-red-500 text-sm text-end">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description Input */}
            <HoverBorderGradient
              isAnimation={false}
              containerClassName="w-full rounded-lg"
              className="w-full flex p-0 font-ubuntu  text-black dark:text-white"
            >
              <AutoGrowTextArea
                placeholder="write your description (optional)"
                OnTextArea={(data: string) => setValue("description", data)}
                textAreaValue={watch("description", "") ?? ""}
              />
              {errors.description && (
                <p className="absolute text-sm bottom-0 right-0 text-end text-red-800 dark:text-red-500">
                  {errors.description.message}
                </p>
              )}
            </HoverBorderGradient>

            <div className="w-full flex justify-center items-center gap-3 flex-row">
              {/* Add Link Button */}
              <HoverBorderGradient
                isAnimation={false}
                onClick={() => setUpload("LINK")}
                containerClassName="w-full rounded-lg"
                className={`text-blue-500 font-ubuntu w-full text-sm dark:bg-black bg-white-800`}
              >
                Paste image link below
              </HoverBorderGradient>
              <span className="font-noto-sans text-lg font-medium dark:text-white-800 text-black-300">
                or
              </span>
              <HoverBorderGradient
                isAnimation={false}
                onClick={() => setUpload("FILE")}
                containerClassName="w-full rounded-lg"
                className={`text-blue-500 font-ubuntu w-full text-sm dark:bg-black bg-white-800`}
              >
                Upload an image file
              </HoverBorderGradient>
            </div>

            {upload === "FILE" ? (
              <FileInputField OnFileSubmit={handleFileSubmit} />
            ) : (
              <div className="w-full relative ">
                <HoverBorderGradient
                  isAnimation={false}
                  containerClassName="w-full rounded-lg"
                  className="w-full flex font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
                >
                  <input
                    type="text"
                    placeholder="paste your image link"
                    className="w-full bg-transparent text-sm font-ubuntu outline-none focus:outline-none"
                    {...register("image")}
                  />
                </HoverBorderGradient>
                {errors.image && (
                  <p className="text-red-500 text-sm text-end">
                    {errors.image.message}
                  </p>
                )}
              </div>
            )}

            <div className="w-full flex justify-end items-end gap-1 flex-col">
              {/* Conditional Link Input */}
              {showLinkInput && (
                <div className="w-full relative ">
                  <HoverBorderGradient
                    isAnimation={false}
                    containerClassName="w-full rounded-lg"
                    className="w-full flex font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
                  >
                    <input
                      type="text"
                      placeholder="Link (Optional)"
                      className="w-full bg-transparent text-sm font-ubuntu outline-none focus:outline-none"
                      {...register("link")}
                    />
                  </HoverBorderGradient>
                  {errors.link && (
                    <p className="text-red-500 text-sm text-end">
                      {errors.link.message}
                    </p>
                  )}
                </div>
              )}
              {/* Add Link Button */}
              <HoverBorderGradient
                isAnimation={false}
                onClick={toggleLinkInput}
                containerClassName="w-full rounded-lg"
                className={`${
                  showLinkInput ? "text-red-400" : "text-blue-500"
                } font-ubuntu w-full text-sm dark:bg-black bg-white-800`}
              >
                {showLinkInput ? "Remove Link" : "Add Link"}
              </HoverBorderGradient>

              {/* Conditional Tag Input */}
              {showLTagInput && (
                <HashTagInputForm
                  tags={
                    getValues("tags")?.map((tag, idx) => ({
                      id: idx.toString(),
                      text: tag,
                    })) || []
                  }
                  OnTags={(updatedTags) => {
                    setValue(
                      "tags",
                      updatedTags.map((tag) => tag.text)
                    );
                  }}
                />
              )}

              {/* Add Tag Button */}
              <HoverBorderGradient
                isAnimation={false}
                onClick={toggleTagInput}
                containerClassName="w-full rounded-lg"
                className={`${
                  showLTagInput ? "text-red-400" : "text-blue-500"
                } font-ubuntu  w-full text-sm dark:bg-black bg-white-800`}
              >
                {showLTagInput ? "Remove tags" : "Add tags"}
              </HoverBorderGradient>
            </div>

            <div className="flex w-full gap-1 relative justify-between items-center">
              <span className="text-sm dark:text-white text-black font-noto-sans ">
                Do you want to make your note shareable?
              </span>
              <ShareableSelectButton
                OnShareable={() =>
                  setValue("isShareable", !getValues("isShareable"))
                }
              />
            </div>

            {/* Submit Button */}
            <div className="w-full">
              <HoverBorderGradient
                containerClassName="w-full rounded-xl"
                className="w-full py-2 sm:py-1 px-8 font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
              >
                <Button
                  type="submit"
                  className="flex w-full text-base justify-center dark:bg-black bg-white-800 text-black dark:text-white items-center hover:bg-transparent bg-transparent"
                  disabled={isSubmitting}
                  onClick={handleSubmit(onSubmit)}
                >
                  {isSubmitting ? (
                    <span className="w-full loader mr-2 text-black dark:text-white">
                      ...submitting
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </HoverBorderGradient>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageFormModal;
