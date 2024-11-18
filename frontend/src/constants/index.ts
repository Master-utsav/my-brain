import { FaNoteSticky } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";

export const NavItemsArray = [
    {
        id: 1,
        name: "Homepage",
        href: "/"
    },
    {
        id: 2,
        name: "Courses",
        href: "/courses"
    },
    {
        id: 3,
        name: "Community",
        href: "/community"
    },
    {
        id: 4,
        name: "About",
        href: "/about"
    },
    {
        id: 5,
        name: "Contact-us",
        href: "/contact"
    },
]

export interface LoginUserDataProps{
        userName: string;
        email: string;
        firstName: string;
        lastName: string;
        emailVerificationStatus: boolean;
        profileThumbnailUrl: string;
}

interface DashBoardIconProps {
    className?: string;
  }
  
  interface DashboardNavItemProps {
    theme: string;
    Icon: React.ComponentType<DashBoardIconProps>;
    title: string;
    link: string;
  }

export const DashBoardNavItems: DashboardNavItemProps[] = [
    {
      theme: "dark", 
      Icon: FaNoteSticky,  
      title: "Notes",
      link: "/user/note-box",
    },
    {
      theme: "dark",
      Icon: FaImage,  
      title: "Images",
      link: "/user/image-box",
    },
    {
      theme: "dark",
      Icon: FaVideo,  
      title: "Videos",
      link: "/user/video-box",
    },
    {
      theme: "dark",
      Icon: IoDocumentText,  
      title: "Documents",
      link: "/user/doc-box",
    },
    {
      theme: "dark",
      Icon: FaHashtag,  
      title: "Tags",
      link: "/user/tag-box",
    },
    {
      theme: "dark",
      Icon: HiLink,  
      title: "Links",
      link: "/user/link-box",
    },
    {
      theme: "dark",
      Icon: FaBookmark,  
      title: "Bookmarks",
      link: "/user/bookmark-box",
    },
  ];
  

  export const defaultUserData = {
    firstName: "Unknown",
    lastName: "User",
    fullName: "Unknown User",
    email: "unknown@gmail.com",
    userName: "unknown_user",
    profileImageUrl: "",
    emailVerificationStatus: false,
    phoneNumber: {
      code: "",
      number: "",
    },
    address: "",
    phoneNumberVerificationStatus: false,
    userDob: "",
    bio: "",
    role: "STUDENT",
    avatarFallbackText: "U" + "K", 
    id: "",
  };

  