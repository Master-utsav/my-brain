import React, { useState } from "react";
import { motion } from "framer-motion";
import CrossIcon from "@/Icons/CrossIcon";
import { ResetPasswordSchema } from "@/validChecksSchema/zodSchemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTheme } from "@/context/ThemeProvider";
import { USER_API } from "@/lib/env";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@nextui-org/react";
import ForgotPasswordOTPModal from "./ForgotPasswordOTPModal";

type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;

const ForgotPasswordModal: React.FC = () => {
  const navigate = useNavigate();
  const [isResetOTPModalOpen, setIsResetOTPModalOpen] = useState<boolean>(
    false
  );
  const { theme } = useTheme();
  const { toast } = useToast();

  const closeSignup = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      const response = await axios.post(`${USER_API}/reset-password`, data);
      const responseData: { success: boolean; message: string } = response.data;
      if (responseData.success) {
        toast({
          title: responseData.message,
        });
        setIsResetOTPModalOpen(true);
      } else {
        throw new Error(responseData.message);
      }
    } catch (error: any) {
      toast({
        title: error.response.data.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full mx-auto min-h-screen sm:px-5 px-1 flex justify-center items-center max-sm:mt-10 sm:py-10">
      {!isResetOTPModalOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          className="relative max-w-xl sm:px-6 px-1 mx-auto py-8 flex flex-col justify-center items-center dark:bg-black-300/20 bg-white-700/20 rounded-3xl shadow-lg gap-3 overflow-hidden"
        >
          <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="sm:text-3xl text-2xl font-kalnia text-center"
        >
          Reset your{" "}
          <span className="text-[#2a7ea9] font-bold font-noto-sans">Password</span>
        </motion.h3>
          <div className="w-full flex flex-col gap-1  font-ubuntu relative">
            <div className="w-full relative">
              <HoverBorderGradient
                containerClassName="w-full rounded-xl"
                className="w-full flex font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
              >
                <input
                  type="text"
                  placeholder="username or email"
                  className="w-full bg-transparent font-ubuntu text-start outline-none focus:outline-none focus-visible:bg-transparent"
                  {...register("identity")}
                />
              </HoverBorderGradient>
              {errors.identity && (
                <p className="text-red-500 text-sm text-end">
                  {errors.identity.message}
                </p>
              )}
            </div>

            {/* Password and Confirm Password */}
            <span className="flex justify-end items-center">
              <p
                className="dark:text-blue-300 text-blue-500 hover:underline font-ubuntu"
                onClick={() => setIsResetOTPModalOpen(!isResetOTPModalOpen)}
              >
                already have an OTP ?
              </p>
            </span>
          </div>
          <div className="w-full relative flex flex-col sm:flex-row justify-center items-center gap-2">
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
                    <Spinner />
                    ...Sending
                  </span>
                ) : (
                  "send an OTP"
                )}
              </Button>
            </HoverBorderGradient>
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeSignup}
          >
            <CrossIcon
              size={24}
              fillColor={theme === "dark" ? "white" : "black"}
            />
          </motion.button>
        </motion.div>
      ) : (
        <ForgotPasswordOTPModal />
      )}
    </section>
  );
};

export default ForgotPasswordModal;
