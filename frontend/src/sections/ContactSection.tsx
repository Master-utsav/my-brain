import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import SendButton from "@/components/ui/SendButton";
import { useAuthContext } from "@/context/AuthContext";
import { Input, Textarea } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const feedbackSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
  feedback: z.string().nonempty({ message: "Feedback is required." }),
});

interface FeedbackForm {
  email: string;
  feedback: string;
}

const ContactSection: React.FC = () => {
  const { userData } = useAuthContext();
  const [assistState, setAssistState] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      email: userData.email || "",
      feedback: "",
    },
  });

  useEffect(() => {
    setValue("email", userData.email);
  }, [userData.email, setValue]);

  async function onSubmit(data: FeedbackForm) {
    console.log(data.email);
    console.log(data.feedback);
    
  }

  return (
    <section className="w-full dark:bg-grid-[#2a7ea9]/[0.2] bg-grid-[#2a7ea9]/[0.1] dark:bg-black bg-white">
      <div className=" relative max-w-xl mx-auto min-h-screen  sm:px-5 px-1 flex flex-col gap-2 justify-center items-center max-sm:mt-10 sm:py-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="sm:text-4xl text-2xl mb-3 text-start font-kalnia "
        >
          Need help ?{" "}
          <span className="text-[#2a7ea9] font-bold font-noto-sans">
            Contact{" "}
          </span>
          now
        </motion.h2>
        <div className="flex flex-col items-start justify-start w-full h-auto overflow-hidden">
          <p
            className="text-[#2a7ea9] hover:underline md:text-base text-sm cursor-pointer font-noto-sans"
            onClick={() => setAssistState(!assistState)}
          >
            How Can We Assist You?
          </p>

          <AnimatePresence>
            {assistState && (
              <motion.ul
                className="flex flex-col gap-2 mt-2 relative"
                initial={{ height: 0, opacity: 0, width: 0 }}
                animate={{ height: "auto", opacity: 1, width: "auto" }}
                exit={{ height: 0, opacity: 0, width: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {[
                  {
                    title: "Share Inquiries:",
                    text: "Need help with sharing cards with others?",
                  },
                  {
                    title: "Chat Bot:",
                    text: "Learn more about how to use mt-brain chat bot.",
                  },
                  {
                    title: "Update Details:",
                    text: "How to update the cards.",
                  },
                  {
                    title: "Technical Support:",
                    text:
                      "Facing issues accessing content? We’re here to help.",
                  },
                  {
                    title: "General Questions:",
                    text: "Anything else? Let us know!",
                  },
                ].map((item, index) => (
                  <motion.li key={index} className="flex w-[96%] relative">
                    <span className="font-semibold text-neutral-800 dark:text-white w-1/3">
                      {item.title}
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300 w-2/3">
                      {item.text}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <p className="bg-clip-text text-transparent bg-gradient-to-b dark:from-white-700 from-black-300 dark:to-white to-black md:text-lg text-base w-full mt-5">
          Feel free to share your feedback and suggestions!
        </p>
        <HoverBorderGradient
          containerClassName="rounded-lg p-0 w-full"
          className="w-full flex p-0 font-ubuntu justify-center flex-col items-center text-black dark:text-white bg-white dark:bg-black"
        >
          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            className="relative w-full sm:px-6 px-1 mx-auto py-8 flex flex-col justify-center items-center bg-transparent rounded-lg shadow-lg gap-3 overflow-hidden"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Your Email"
              type="email"
              title="email"
              variant="underlined"
              className="w-full"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <div className="w-full flex gap-1 justify-between items-end">
              <Textarea
                variant="underlined"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                labelPlacement="outside"
                placeholder="Your feedback or query"
                {...register("feedback")}
                isInvalid={!!errors.feedback}
                errorMessage={errors.feedback?.message}
              />
              <SendButton
                onClickBtn={handleSubmit(onSubmit)}
                isDisabled={isSubmitting}
              />
            </div>
          </motion.form>
        </HoverBorderGradient>
      </div>
    </section>
  );
};

export default ContactSection;
