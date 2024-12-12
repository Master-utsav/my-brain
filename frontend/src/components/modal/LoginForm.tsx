import React, { useState } from "react";
import { motion } from "framer-motion";
import CrossIcon from "@/Icons/CrossIcon";
import { loginSchema } from "@/validChecksSchema/zodSchemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@/Icons/GoogleIcon";
import GitHubIcon from "@/Icons/GithubIcon";
import axios from "axios";
import EyeCloseIcon from "@/Icons/EyeCloseIcon";
import EyeOpenIcon from "@/Icons/EyeOpenIcon";
import { useTheme } from "@/context/ThemeProvider";
import { USER_API } from "@/lib/env";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { Button } from "@/components/ui/button";
import { setTokenCookie } from "@/lib/cookieService";
import { useAuthContext } from "@/context/AuthContext";
import {useToast} from "@/hooks/use-toast";
import { getUserData as fetchUserData } from "@/lib/authService";


type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const {setIsLoggedIn} = useAuthContext();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {toast} = useToast();
  const {setUserData} = useAuthContext();

  const closeSignup = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
  
    try {
      const response = await axios.post(`${USER_API}/login`, data);
      const responseData: { success: boolean; message: string; token: string } = response.data;
      if (responseData.success) {
        toast({
          title: responseData.message
        })
        setTokenCookie(responseData.token);
        const fetchedUserData = await fetchUserData();
        fetchedUserData && setUserData(fetchedUserData);
        setIsLoggedIn(true);
        navigate("/")
      } else {
        throw new Error(responseData.message);
      }
    } catch (error: any) {
      toast({
        title: error.response.data.message,
        variant: "destructive"
      })
    }
  };

  const handelGoogleBtn = () => {
    try {
      window.location.href = `${USER_API}/signup-google`;
    } catch (error) {
      console.error("Google Signup Error:", error);
    }
  };

  const handelGithubBtn = () => {
    try {
      window.location.href = `${USER_API}/signup-github`;
    } catch (error) {
      console.error("GitHub Signup Error:", error);
    }
  };

  return (
    <section className="w-full mx-auto min-h-screen sm:px-5 px-1 flex justify-center items-center max-sm:mt-10 sm:py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          className="relative max-w-xl sm:px-6 px-1 mx-auto py-8 flex flex-col justify-center items-center dark:bg-black-300/20 bg-white-700/20 rounded-3xl shadow-lg gap-3 overflow-hidden"
        >
          <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          className="sm:text-4xl text-2xl mb-3 text-center font-kalnia ">
            Login <span className="text-[#2a7ea9] font-bold font-noto-sans">now</span>
          </motion.h2>
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
         
              <div className="w-full relative">
                <HoverBorderGradient
                  containerClassName="w-full rounded-xl"
                  className="w-full font-ubuntu dark:bg-black bg-white-800 text-black dark:text-white"
                >
                  <div className="relative w-full flex ">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="password"
                      className="w-full bg-transparent font-ubuntu  outline-none focus:outline-none"
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
            <span className="flex justify-end items-center">
              <Link to={"/reset-password"} className="dark:text-blue-300 text-blue-500 hover:underline font-ubuntu">
                forgot password?
              </Link>
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
                <span className="w-full loader mr-2 text-black dark:text-white">...logging</span>
              ) : (
                "Login to continue..."
              )}
              </Button>
            </HoverBorderGradient>
            <div className="w-full relative max-sm:flex hidden flex-row items-center justify-center py-2">
                <div className="w-full h-[2px] border-black dark:border-white-800  border-[1px]"></div>
                <span className=" text-black dark:text-white-800 text-sm  px-2 font-libre">
                  OR
                </span>
                <div className="w-full h-[2px] border-black dark:border-white-800  border-[1px]"></div>
              </div>
            <div className="w-full relative flex justify-between items-center gap-1">
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 ">
                <HoverBorderGradient
                  containerClassName="w-full rounded-xl "
                  className="font-ubuntu w-full py-0 sm:py-1 px-8 dark:bg-black bg-white-800 text-black dark:text-white"
                >
                  <Button
                    onClick={handelGoogleBtn}
                    className="w-full flex justify-center items-center hover:bg-transparent bg-transparent"
                  >
                    <GoogleIcon
                      size={20}
                      fillColor={theme === "dark" ? "white" : "black"}
                    />
                  </Button>
                </HoverBorderGradient>

                <HoverBorderGradient
                  containerClassName="w-full rounded-xl"
                  className="font-ubuntu w-full py-0 sm:py-1 px-8 dark:bg-black bg-white-800 text-black dark:text-white"
                >
                  <Button
                    onClick={handelGithubBtn}
                    className="w-full flex justify-center items-center hover:bg-transparent bg-transparent"
                  >
                    <GitHubIcon
                      size={20}
                      fillColor={theme === "dark" ? "white" : "black"}
                    />
                  </Button>
                </HoverBorderGradient>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeSignup}
          >
            <CrossIcon size={24} fillColor={theme === "dark" ? "white" : "black"}/>
          </motion.button>
        </motion.div>
    </section>
  );
};

export default LoginForm;
