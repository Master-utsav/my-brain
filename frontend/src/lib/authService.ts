import axios from "axios";
import { getVerifiedToken } from "@/lib/cookieService";
import { USER_API } from "@/lib/env";
import { UserDataProps } from "@/context/AuthContext";

export const getUserData = async (): Promise<UserDataProps | null> => {
  const jwt = getVerifiedToken();
  if (!jwt) {
    return null;
  }

  try {
    const response = await axios.get(`${USER_API}/get-user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (response?.data?.success && response.data.data) {
      const responseData = response.data.data;

      const userData: UserDataProps = {
        userName: responseData.userName || "unknown_user",
        email: responseData.email || "unknown@gmail.com",
        profileImageUrl: responseData.profileImageUrl || "",
        emailVerificationStatus: responseData.emailVerificationStatus || false,
        phoneNumber: {
          code: responseData.phoneNumber?.code || "",
          number: responseData.phoneNumber?.number || "",
        },
        address: responseData.address
          ? `${responseData.address.city || "Unknown City"}, ${responseData.address.state || "Unknown State"}, ${responseData.address.country || "Unknown Country"}`
          : "Address Not Provided",
        groupedKey : responseData.groupedKey || "",
        phoneNumberVerificationStatus: responseData.phoneNumberVerificationStatus || false,
        bio: responseData.bio || "Welcome to my app, utilize your resources carefully.",
        userDob: responseData.userDob || "",
        avatarFallbackText: `${responseData.userName?.[0]?.toUpperCase() || "U"}${responseData.userName?.[1]?.toUpperCase() || "S"}`,
        id: responseData.uniqueId || "",
        uploadedContent: responseData.uploadedContent || [],
        bookmarks: responseData.bookmarks || [],  // Fixed: Use responseData.bookmarks instead of bookmarks.content
        firstName: responseData.firstName || "",  // Added firstName and lastName fallback
        lastName: responseData.lastName || "",
        fullName: `${responseData.firstName || ""} ${responseData.lastName || ""}`.trim(), // Concatenated fullName
      };

      return userData;
    } else {
      // Handle case where data is not found
      // ErrorToast("User Data not found");
      return null;
    }
  } catch (error: any) {
    // Log or display error message for debugging
    // ErrorToast(error.response?.data?.message || "Something went wrong");
    return null;
  }
};
