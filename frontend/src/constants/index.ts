import { FaNoteSticky } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";

export const NavItemsArray = [
  {
    id: 1,
    name: "Homepage",
    href: "/",
  },
  {
    id: 2,
    name: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    name: "Community",
    href: "/community",
  },
  {
    id: 4,
    name: "About",
    href: "/about",
  },
  {
    id: 5,
    name: "Contact-us",
    href: "/contact",
  },
];

export interface LoginUserDataProps {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  emailVerificationStatus: boolean;
  profileThumbnailUrl: string;
}

export interface DashBoardIconProps {
  className?: string;
}

export interface DashboardNavItemProps {
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
    Icon: BsTwitter,
    title: "Tweets",
    link: "/user/tweet-box",
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

export const ChooseCategoryItemsItems = [
  {
    theme: "dark",
    Icon: FaNoteSticky,
    title: "Notes",
    link: "/user/add-content/note",
  },
  {
    theme: "dark",
    Icon: BsTwitter,
    title: "Tweets",
    link: "/user/add-content/tweet",
  },
  {
    theme: "dark",
    Icon: FaImage,
    title: "Images",
    link: "/user/add-content/image",
  },
  {
    theme: "dark",
    Icon: FaVideo,
    title: "Videos",
    link: "/user/add-content/video",
  },
  {
    theme: "dark",
    Icon: FaHashtag,
    title: "Tags",
    link: "/user/add-content/tag",
  },
  {
    theme: "dark",
    Icon: HiLink,
    title: "Links",
    link: "/user/add-content/link",
  },
];

export const routeHeaders: {
  [key: string]: { title: string; description: string; isBtnShow: boolean };
} = {
  "/user/note-box": {
    title: "All Notes",
    description:
      "Organize, categorize, and access your notes with ease. Keep track of important ideas and reminders in one central place to boost your productivity.",
    isBtnShow: true,
  },
  "/user/tweet-box": {
    title: "Your Tweets",
    description:
      "Manage and analyze your tweets like never before. Track your engagement, organize your thoughts, and optimize your social presence all in one place.",
    isBtnShow: true,
  },
  "/user/image-box": {
    title: "Image Box",
    description:
      "Store, organize, and access all your images effortlessly. Create a digital library of your visual content for quick and easy retrieval anytime.",
    isBtnShow: true,
  },
  "/user/video-box": {
    title: "Video Box",
    description:
      "Manage your video library with ease. From organizing content to watching your favorites, our platform ensures your videos are always at your fingertips.",
    isBtnShow: true,
  },
  "/user/bookmark-box": {
    title: "Bookmarks",
    description:
      "Save and organize your most important web links. Quickly access your favorite websites and resources without the hassle of searching through countless tabs.",
    isBtnShow: true,
  },
  "/user/tag-box": {
    title: "Hash-Tags",
    description:
      "Categorize your content with tags to make organization and search effortless. Streamline your workflow and quickly find what you need with custom tags.",
    isBtnShow: true,
  },
  "/user/link-box": {
    title: "All Links",
    description:
      "Organize, manage, and access your web links in an intuitive way. Keep track of your important URLs and resources for a seamless browsing experience.",
    isBtnShow: true,
  },
  "/user/edit-profile": {
    title: "Edit Profile",
    description:
      "Update and personalize your profile to reflect who you are. Modify your information, upload images, and fine-tune your details to stay in control of your digital presence.",
    isBtnShow: true,
  },
  "/user/add-content/note": {
    title: "All Notes",
    description:
      "Organize, categorize, and access your notes with ease. Keep track of important ideas and reminders in one central place to boost your productivity.",
    isBtnShow: true,
  },
  "/user/add-content/tweet": {
    title: "Your Tweets",
    description:
      "Manage and analyze your tweets like never before. Track your engagement, organize your thoughts, and optimize your social presence all in one place.",
    isBtnShow: true,
  },
  "/user/add-content/image": {
    title: "Image Box",
    description:
      "Store, organize, and access all your images effortlessly. Create a digital library of your visual content for quick and easy retrieval anytime.",
    isBtnShow: true,
  },
  "/user/add-content/video": {
    title: "Video Box",
    description:
      "Manage your video library with ease. From organizing content to watching your favorites, our platform ensures your videos are always at your fingertips.",
    isBtnShow: true,
  },
  "/user/add-content/tag": {
    title: "Hash-Tags",
    description:
      "Categorize your content with tags to make organization and search effortless. Streamline your workflow and quickly find what you need with custom tags.",
    isBtnShow: true,
  },
  "/user/add-content/link": {
    title: "All Links",
    description:
      "Organize, manage, and access your web links in an intuitive way. Keep track of your important URLs and resources for a seamless browsing experience.",
    isBtnShow: true,
  },
};

export const LinkRegex =
  "^(https?://)?([a-zA-Z0-9-]+.)+[a-zA-Z]{2,}(:d+)?(/[^s]*)?$";
export const TagRegex = "#([a-zA-Z0-9_]+)";

interface BaseInterface {
  cardId: string;
  createdById: string;
  title: string;
  description?: string;
  link?: string | string[];
  tags?: string[];
  isShareable: boolean;
  AddedOn: Date;
}

export interface TweetInterface extends BaseInterface {
  description: string;
}

export interface TagsInterface extends BaseInterface {
  tags: string[];
}

export interface NoteInterface extends BaseInterface {
  list: string[];
}

export interface LinkInterface extends BaseInterface {
  link: string[];
}

export interface ImageInterface extends BaseInterface {
  image: string | File;
}

export interface VideoInterface extends BaseInterface {
  video: string | File;
}

// Dummy objects for TweetInterface
// Dummy objects for TweetInterface
export const tweetData: TweetInterface[] = [
  {
    cardId: "1",
    createdById: "user123",
    title: "My First Tweet",
    description:
      "This is an example tweet that demonstrates how to use interfaces in TypeScript for organizing data effectively.",
    link: "https://example.com",
    tags: ["example", "tweet"],
    isShareable: true,
    AddedOn: new Date("2024-11-19T12:00:00Z"),
  },
  {
    cardId: "2",
    createdById: "user456",
    title: "Another Tweet",
    description:
      "Here is another example of a tweet with a description that is longer than fifty characters to meet the requirements.",
    tags: ["hashtag"],
    isShareable: false,
    AddedOn: new Date("2024-11-18T09:30:00Z"),
  },
  {
    cardId: "3",
    createdById: "user123",
    title: "My First Tweet",
    description:
      "This is an example tweet that demonstrates how to use interfaces in TypeScript for organizing data effectively.",
    link: "https://example.com",
    tags: ["example", "tweet"],
    isShareable: true,
    AddedOn: new Date("2024-11-19T12:00:00Z"),
  },
  {
    cardId: "4",
    createdById: "user456",
    title: "Another Tweet",
    description:
      "Here is another example of a tweet with a description that is longer than fifty characters to meet the requirements.",
    tags: ["hashtag"],
    isShareable: false,
    AddedOn: new Date("2024-11-18T09:30:00Z"),
  },
  {
    cardId: "5",
    createdById: "user123",
    title: "My First Tweet",
    description:
      "This is an example tweet that demonstrates how to use interfaces in TypeScript for organizing data effectively.",
    link: "https://example.com",
    tags: ["example", "tweet"],
    isShareable: true,
    AddedOn: new Date("2024-11-19T12:00:00Z"),
  },
  {
    cardId: "6",
    createdById: "user456",
    title: "Another Tweet",
    description:
      "Here is another example of a tweet with a description that is longer than fifty characters to meet the requirements.",
    tags: ["hashtag"],
    isShareable: false,
    AddedOn: new Date("2024-11-18T09:30:00Z"),
  },
];

// Dummy objects for TagsInterface
export const tagsData: TagsInterface[] = [
  {
    cardId: "3",
    createdById: "user789",
    title: "Programming Languages",
    description:
      "A comprehensive list of programming languages commonly used in software development, including their unique features and benefits.",
    tags: ["JavaScript", "TypeScript", "Python"],
    isShareable: true,
    AddedOn: new Date("2024-11-17T14:45:00Z"),
  },
  {
    cardId: "4",
    createdById: "user321",
    title: "Web Development",
    description:
      "Key technologies and tools for web development, including HTML, CSS, and JavaScript frameworks like React and Angular.",
    tags: ["HTML", "CSS", "React"],
    isShareable: false,
    AddedOn: new Date("2024-11-16T10:00:00Z"),
  },
];

// Dummy objects for NoteInterface
export const noteData: NoteInterface[] = [
  {
    cardId: "5",
    createdById: "user654",
    title: "Grocery List",
    description:
      "This is a detailed grocery list for the weekend, including essential household items like milk, eggs, and bread.",
    list: ["Milk", "Eggs", "Bread"],
    tags: ["shopping", "list"],
    isShareable: true,
    AddedOn: new Date("2024-11-15T08:00:00Z"),
  },
  {
    cardId: "6",
    createdById: "user987",
    title: "Meeting Notes",
    description:
      "These notes summarize key points from the team meeting, such as the agenda, action items, and upcoming deadlines.",
    list: ["Agenda", "Action Items", "Deadlines"],
    isShareable: false,
    AddedOn: new Date("2024-11-14T15:30:00Z"),
  },
];

// Dummy objects for LinkInterface
export const linkData: LinkInterface[] = [
  {
    cardId: "7",
    createdById: "user135",
    title: "Favorite Websites",
    description:
      "A curated list of favorite websites that provide valuable resources, including search engines and development platforms.",
    link: ["https://google.com", "https://github.com"],
    tags: ["favorites", "web"],
    isShareable: true,
    AddedOn: new Date("2024-11-13T11:15:00Z"),
  },
  {
    cardId: "8",
    createdById: "user246",
    title: "Documentation Links",
    description:
      "Links to official documentation for various technologies like React and TypeScript, helpful for developers of all levels.",
    link: ["https://reactjs.org", "https://typescriptlang.org"],
    isShareable: false,
    AddedOn: new Date("2024-11-12T07:00:00Z"),
  },
];

// Dummy objects for ImageInterface
export const imageData: ImageInterface[] = [
  {
    cardId: "9",
    createdById: "user369",
    title: "Beautiful Landscape",
    description:
      "A high-resolution image file showcasing a stunning landscape with mountains, trees, and a vibrant sunset sky.",
    image: "/landscape.jpg",
    tags: ["nature", "scenery"],
    isShareable: true,
    AddedOn: new Date("2024-11-11T13:30:00Z"),
  },
  {
    cardId: "10",
    createdById: "user852",
    title: "Abstract Art",
    description:
      "This image depicts a piece of abstract art featuring colorful geometric patterns and unique artistic expressions.",
    image: "/abstract.jpg",
    link: "https://example.com/art",
    tags: ["art", "design"],
    isShareable: false,
    AddedOn: new Date("2024-11-10T16:00:00Z"),
  },
];

// Dummy objects for VideoInterface
export const videoData: VideoInterface[] = [
  {
    cardId: "11",
    createdById: "user963",
    title: "Introduction to TypeScript",
    description:
      "A comprehensive video tutorial introducing the basics of TypeScript, including its key features and advantages.",
    video: "https://youtu.be/jzv-VC9kcXA",
    tags: ["typescript", "tutorial"],
    isShareable: true,
    AddedOn: new Date("2024-11-09T18:30:00Z"),
  },
  {
    cardId: "12",
    createdById: "user147",
    title: "React Hooks Explained",
    description:
      "This video provides an in-depth explanation of React hooks, covering useState, useEffect, and other advanced concepts.",
    video: "react-hooks.mp4",
    link: "https://www.youtube.com/shorts/G6JqC6WrpWY",
    tags: ["react", "hooks"],
    isShareable: false,
    AddedOn: new Date("2024-11-08T20:15:00Z"),
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
