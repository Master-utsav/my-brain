import express from "express";
import { authenticateToken } from "../middleware/auth.middleware";
// import { upload } from "../middleware/multer.middleware";
import { handleGoogleSignUpCallbackFunction, handleGoogleSignUpFunction } from "../controllers/auth/googleAuth.controllers";
import { handleGithubSignUpCallbackFunction, handleGithubSignUpFunction } from "../controllers/auth/githubAuth.controllers";
import { handleSignUpFunction, handleLoginFunction } from "../controllers/auth/localAuth.controllers";
import { handlePhoneNumberOTPCheckFunction, handlePhoneNumberOTPSendFunction } from "../controllers/user/userContactUpdate.controllers";
import { handleDeleteAccountFunction } from "../controllers/user/userDataDelete.controllers";
import { handleUpdateUserFunction } from "../controllers/user/userDataUpdate.controllers";
import { handleResendVerficationOTPFunction, handleEmailVerificationOTP } from "../controllers/user/userEmailVerification.controllers";
import { handleGetUserDataFunction, handleGetUserHistoryVideos, handleGetUsersBookmarkedCourses, handleGetUsersBookmarkedVideo } from "../controllers/user/userGetData.controllers";
import { handleUpdateUserImageFunction } from "../controllers/user/userProfileUpdate.controllers";
import { handleResetPasswordFunction, handleResetPasswordVerificationOTP } from "../controllers/user/userResetPassword.controllers";
import { handleRemoveHistoryVideo, handleRemoveUserEntireHistory, handleUserCourseBookmarkfunction , handleUserCourseProgress, handleUserHistoryVideoOrder, handleUserUnenrolledCourseFunction, handleUserVideoBookmarkfunction} from "../controllers/user/userCourseHandlers.controllers";
import { handleChangeRoleRequestFunction } from "../controllers/user/userChangeRole.controllers";
import { loginRateLimiter, userUpdateRateLimiter } from "../validchecks/rateLimiters";
import multer from "multer";

const userRoute = express.Router();

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

// User Data Get
userRoute.get("/get-user", authenticateToken , handleGetUserDataFunction);

// User Bookmarked Videos
userRoute.post("/get-bookmarked-videos", authenticateToken , handleGetUsersBookmarkedVideo);
userRoute.post("/get-bookmarked-courses", authenticateToken , handleGetUsersBookmarkedCourses);
userRoute.post("/get-user-history", authenticateToken , handleGetUserHistoryVideos);
userRoute.post("/add-video-to-history", authenticateToken , handleUserHistoryVideoOrder);
userRoute.post("/delete-user-history-video", authenticateToken , handleRemoveHistoryVideo);
userRoute.delete("/delete-user-entire-history", authenticateToken , handleRemoveUserEntireHistory);
userRoute.post("/unenrolled-in-course" , authenticateToken , handleUserUnenrolledCourseFunction);

// User Signup/Login Routes
userRoute.post("/signup", handleSignUpFunction);
userRoute.get("/signup-google", handleGoogleSignUpFunction);
userRoute.get("/signup-google/callback", handleGoogleSignUpCallbackFunction);
userRoute.get("/signup-github", handleGithubSignUpFunction);
userRoute.get("/signup-github/callback", handleGithubSignUpCallbackFunction);
userRoute.post("/login",  handleLoginFunction); //loginRateLimiter

// Email Verification Routes
userRoute.post("/verify-email", handleResendVerficationOTPFunction);
userRoute.post("/verify-email-otp", handleEmailVerificationOTP);

// Mobile Number Verification Routes
userRoute.post("/verify-mobile-number-otp-check", authenticateToken ,  handlePhoneNumberOTPCheckFunction);
userRoute.post("/verify-mobile-number-send-otp", authenticateToken , handlePhoneNumberOTPSendFunction);

// Password Reset Routes
userRoute.post("/reset-password", handleResetPasswordFunction);
userRoute.post("/reset-password-otp", handleResetPasswordVerificationOTP);

// User Update Image or Upload Image
userRoute.post("/update-user-image", authenticateToken , upload.single("image"), handleUpdateUserImageFunction);

// User Update and Deletion Routes
userRoute.put("/update-user", authenticateToken, userUpdateRateLimiter,  handleUpdateUserFunction);
userRoute.put("/update-role", authenticateToken, handleChangeRoleRequestFunction);
userRoute.post("/delete-account", authenticateToken, handleDeleteAccountFunction);

//User added bookmarks to the course
userRoute.post("/user-course-bookmarks" , authenticateToken , handleUserCourseBookmarkfunction);
userRoute.post("/user-video-bookmarks" , authenticateToken , handleUserVideoBookmarkfunction);

//User added completed Video 
userRoute.post("/user-video-progress" , authenticateToken , handleUserCourseProgress )


export default userRoute;
