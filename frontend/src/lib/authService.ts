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
        firstName: responseData.firstName || "Unknown",
        lastName: responseData.lastName || "User",
        fullName: (responseData.firstName?.trim() + " " + responseData.lastName?.trim()) || "Unknown User",
        email: responseData.email || "unknown@gmail.com",
        userName: responseData.userName || "unknown_user",
        profileImageUrl: responseData.profileImageUrl || "",
        emailVerificationStatus: responseData.emailVerificationStatus || false,
        phoneNumber: {
          code: responseData.phoneNumber?.code || "",
          number: responseData.phoneNumber?.number || "",
        },
        address: responseData.address?.country
          ? `${responseData.address.city}, ${responseData.address.state}, ${responseData.address.country}`
          : "",
        phoneNumberVerificationStatus: responseData.phoneNumberVerificationStatus || false,
        bio: responseData.bio || "",
        role: responseData.role || "STUDENT",
        userDob: responseData.userDob || "",
        avatarFallbackText: `${responseData.firstName?.[0]?.toUpperCase() || "U"}${responseData.lastName?.[0]?.toUpperCase() || "G"}`,
        id: responseData.uniqueId,
        enrolledIn: responseData.enrolledIn,
        bookmarks : responseData.bookmarks,
        progress : responseData.progress,
        history : responseData.history,
      };

      return userData;
    } else {
    //   ErrorToast("User Data not found");
      return null;
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // ErrorToast(error.response?.data?.message || "Something went wrong");
    return null;
  }
};
