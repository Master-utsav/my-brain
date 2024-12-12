import CrossIcon from "@/Icons/CrossIcon";
import { motion } from "framer-motion";
import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "../ui/button";
import { USER_API } from "@/lib/env";
import { useToast } from "@/hooks/use-toast";
import { ResetPasswordOTPFormSchema } from "@/validChecksSchema/zodSchemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import EyeCloseIcon from "@/Icons/EyeCloseIcon";
import EyeOpenIcon from "@/Icons/EyeOpenIcon";
import { Spinner } from "@nextui-org/react";

type ResetPasswordOTPFormData = z.infer<typeof ResetPasswordOTPFormSchema>;

const ForgotPasswordOTPModal: React.FC = () => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [inputValue, setInputValue] = useState<string[]>(Array(6).fill(""));
  const [passwordVisible , setPasswordVisible] = useState<boolean>(false);
  const [isResendEnabled, setIsResendEnabled] = useState(true);
  const { theme } = useTheme();
  const {toast} = useToast();
  const navigate = useNavigate();

  const closeSignup = () => {
    navigate("/");
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm<ResetPasswordOTPFormData>({
    resolver: zodResolver(ResetPasswordOTPFormSchema),
  });

  const isValidOtp = (otpValue: string) =>
    otpValue.length === 6 && /^[0-9]+$/.test(otpValue);

  const onSubmit = async (data : ResetPasswordOTPFormData) => {
    const otpValue = inputValue.join("");

    if (isValidOtp(otpValue)) {
      try {
        const response = await axios.post(`${USER_API}/reset-password-otp`, {
          identity: data.identity,
          newPassword: data.password,
          otp: otpValue,
        });

        const { success, message } = response.data;
        if (success) {
          navigate("/login");
          toast({
            title: message,
          })
        } else {
          throw new Error(message);
        }
      } catch(error: any) {
        toast({
          title: error.response.data.message,
          variant: "destructive"
        })
      }
    } 
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (!/^[0-9]$/.test(value) && value) return;

    const newValue = [...inputValue];
    newValue[index] = value;
    setInputValue(newValue);

    if (value && index < inputValue.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  const handleCopyPaste = (
    e: ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const copiedOtp = e.clipboardData.getData("text");

    if (!/^[0-9]+$/.test(copiedOtp)) return;

    const newValue = [...inputValue];
    copiedOtp.split("").forEach((char, i) => {
      if (index + i < newValue.length) {
        newValue[index + i] = char;
      }
    });
    setInputValue(newValue);

    const nextIndex = Math.min(index + copiedOtp.length, newValue.length - 1);
    inputsRef.current[nextIndex]?.focus();
  };

  const handleResend = () => {
    setIsResendEnabled(false);
    setTimeout(() => {
      setIsResendEnabled(true);
    }, 30000);
  };

  return (
    <section className="w-full mx-auto min-h-screen sm:px-5 px-1 flex justify-center items-center max-sm:mt-10 sm:py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative max-w-xl sm:px-6 px-1 mx-auto py-8 flex flex-col justify-center items-center dark:bg-black-300/20 bg-white-700/20 rounded-3xl shadow-lg gap-3 overflow-hidden"
      > 
      <div className="flex flex-col justify-center items-center gap-2">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="sm:text-3xl text-2xl font-kalnia text-center"
        >
          Change your{" "}
          <span className="text-[#2a7ea9] font-bold font-noto-sans">Password</span>
        </motion.h3>
        <p className="text-center text-black-300 dark:text-white-700">
          6 Digit OTP sent to your <span className="font-bold">Email Account</span>
        </p>
      </div>
         
         <div className="flex flex-col justify-center items-center gap-2 w-full ">
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

              <div className="w-full relative">
                <HoverBorderGradient
                  containerClassName="w-full rounded-xl"
                  className="w-full font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
                >
                  <div className="relative w-full flex ">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="new password"
                      className="bg-transparent font-ubuntu  outline-none focus:outline-none"
                      {...register("password")}
                    />
                    <div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <EyeOpenIcon
                          size={18}
                          fillColor={theme === "dark" ? "white" : "black"}
                        />
                      ) : (
                        <EyeCloseIcon
                          size={18}
                          fillColor={theme === "dark" ? "white" : "black"}
                        />
                      )}
                    </div>
                  </div>
                </HoverBorderGradient>
                {errors.password && (
                  <p className="text-red-500 text-sm text-end">
                    {errors.password.message}
                  </p>
                )}
              </div>
         </div>
        
              
        <div className="flex justify-center space-x-2">
          {inputValue.map((_, index) => (
            <HoverBorderGradient
              key={index}
              containerClassName="rounded-lg"
              className="sm:w-12 sm:h-14 w-7 h-10 p-0 dark:bg-black bg-white dark:text-white text-black flex justify-center items-center"
            >
              <input
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength={1}
                value={inputValue[index]}
                className="w-full h-full bg-transparent text-center text-xl outline-none dark:text-white text-black"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                onPaste={(e) => handleCopyPaste(e, index)}
              />
            </HoverBorderGradient>
          ))}
        </div>

        <button
          onClick={handleResend}
          disabled={!isResendEnabled}
          className={`text-sm underline ${
            !isResendEnabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Didn’t get a code? Resend
        </button>

        <HoverBorderGradient
          containerClassName="w-full rounded-xl"
          className="w-full rounded-xl  font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
        >
              <Button
                type="submit"
                className="flex w-full text-base justify-center dark:bg-black bg-white-800 text-black dark:text-white items-center hover:bg-transparent bg-transparent"
                disabled={isSubmitting}
                onClick={handleSubmit(onSubmit)}
              >
                {isSubmitting ? (
                <span className="w-full loader mr-2 text-black dark:text-white"><Spinner/>...Sending</span>
              ) : (
                "send an OTP"
              )}
              </Button>
    
        </HoverBorderGradient>

        <motion.button
          whileHover={{ scale: 1.2 }}
          className="absolute top-4 right-4"
          onClick={closeSignup}
        >
          <CrossIcon
            size={24}
            fillColor={theme === "dark" ? "white" : "black"}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ForgotPasswordOTPModal;
