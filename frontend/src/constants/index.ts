import { FaNoteSticky } from "react-icons/fa6";
// import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import AllContentLogo from "@/components/ui/AllContentLogo";

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
    Icon: AllContentLogo,
    title: "All Content",
    link: "/user/all-content",
  },
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
  // {
  //   theme: "dark",
  //   Icon: FaVideo,
  //   title: "Videos",
  //   link: "/user/video-box",
  // },
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
  // {
  //   theme: "dark",
  //   Icon: FaVideo,
  //   title: "Videos",
  //   link: "/user/add-content/video",
  // },
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
  // "/user/video-box": {
  //   title: "Video Box",
  //   description:
  //     "Manage your video library with ease. From organizing content to watching your favorites, our platform ensures your videos are always at your fingertips.",
  //   isBtnShow: true,
  // },
  "/user/all-content": {
    title: "All Content",
    description:
      "Explore and manage all your content in one place. Organize, discover, and enjoy seamless access to your favorite videos anytime.",
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
    title: "New Note",
    description:
      "Create a new note to organize your thoughts and reminders. Categorize and save your ideas for easy reference anytime.",
    isBtnShow: true,
  },
  "/user/add-content/tweet": {
    title: "New Tweet",
    description:
      "Draft and save your latest tweets. Manage your social media presence by composing and organizing tweets effortlessly.",
    isBtnShow: true,
  },
  "/user/add-content/image": {
    title: "New Image",
    description:
      "Upload and save a new image to your library. Organize your visual content for easy access and retrieval.",
    isBtnShow: true,
  },
  // "/user/add-content/video": {
  //   title: "New Video",
  //   description:
  //     "Upload and organize a new video. Keep your video content easily accessible for viewing anytime.",
  //   isBtnShow: true,
  // },
  "/user/add-content/tag": {
    title: "New Tag",
    description:
      "Create and manage new tags to categorize your content. Streamline organization and improve searchability.",
    isBtnShow: true,
  },
  "/user/add-content/link": {
    title: "New Link",
    description:
      "Save a new web link to your collection. Organize and manage important URLs for seamless access.",
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
  type: "image" | "tweet" | "tag" | "link" | "note";
  isBookmarked?: boolean;
  addedOn: string;
}

export interface TweetInterface extends BaseInterface {
  description: string;
  type: "tweet";
  link?: string;
}

export interface TagsInterface extends BaseInterface {
  type: "tag";
  tags: string[];
  link?: string;
}

export interface NoteInterface extends BaseInterface {
  type: "note";
  list: string[];
  link?: string;
}

export interface LinkInterface extends BaseInterface {
  type: "link";
  link: string[];
}

export interface ImageInterface extends BaseInterface {
  type: "image";
  image: string | File;
  link?: string;
}

export type AllContentInterface =
  | TweetInterface
  | TagsInterface
  | NoteInterface
  | LinkInterface
  | ImageInterface;

// export interface VideoInterface extends BaseInterface {
//   video: string | File;
// }

export const tweetData: TweetInterface[] = [
  {
    cardId: "1",
    type: "tweet",
    createdById: "user123",
    title: "Exploring JavaScript",
    description:
      "Discover the power of JavaScript, the most popular programming language for building web applications.",
    link: "https://example.com/js",
    tags: ["JavaScript", "programming", "web"],
    isShareable: true,
    addedOn: "2024-11-21T08:45:30.000+00:00",
  },
  {
    cardId: "2",
    type: "tweet",
    createdById: "user456",
    title: "Learning TypeScript",
    description:
      "Enhance your JavaScript skills with TypeScript, a typed superset for scalable and reliable code.",
    tags: ["TypeScript", "JavaScript", "coding"],
    isShareable: false,
    addedOn: "2024-11-16T09:15:45.000+00:00",
  },
  {
    cardId: "3",
    type: "tweet",
    createdById: "user789",
    title: "CSS for Beginners",
    description:
      "Master the art of styling websites with CSS, from layouts to animations and beyond.",
    link: "https://example.com/css",
    tags: ["CSS", "design", "frontend"],
    isShareable: true,
    addedOn: "2024-11-16T10:05:12.000+00:00",
  },
  {
    cardId: "4",
    createdById: "user321",
    type: "tweet",
    title: "React State Management",
    description:
      "An in-depth guide to managing state in React applications using hooks and context.",
    tags: ["React", "state", "frontend"],
    isShareable: false,
    addedOn: "2024-11-17T12:30:45.000+00:00",
  },
  {
    cardId: "5",
    type: "tweet",
    createdById: "user654",
    title: "Backend APIs with Node.js",
    description:
      "Learn how to build robust backend APIs using Node.js, Express, and MongoDB.",
    link: "https://example.com/node",
    tags: ["Node.js", "backend", "API"],
    isShareable: true,
    addedOn: "2024-11-17T14:45:00.000+00:00",
  },
  {
    cardId: "6",
    type: "tweet",
    createdById: "user987",
    title: "Debugging Techniques",
    description:
      "Discover effective debugging techniques for modern JavaScript and TypeScript projects.",
    tags: ["debugging", "JavaScript", "tools"],
    isShareable: false,
    addedOn: "2024-11-15T08:00:00.000+00:00",
  },
];

export const tagsData: TagsInterface[] = [
  {
    cardId: "7",
    type: "tag",
    createdById: "user789",
    title: "Programming Languages",
    description:
      "A comprehensive list of programming languages commonly used in software development, including their unique features and benefits.",
    tags: ["JavaScript", "TypeScript", "Python", "CPP", "Rust", "Go"],
    isShareable: true,
    addedOn: "2024-11-20T10:30:00.000+00:00",
  },
  {
    cardId: "8",
    type: "tag",
    createdById: "user321",
    title: "Web Development",
    description:
      "Key technologies and tools for web development, including HTML, CSS, and JavaScript frameworks like React and Angular.",
    tags: ["HTML", "CSS", "React"],
    isShareable: false,
    addedOn: "2024-11-16T11:15:45.000+00:00",
  },
];

export const noteData: NoteInterface[] = [
  {
    cardId: "9",
    type: "note",
    createdById: "user654",
    title: "Grocery List",
    description:
      "This is a detailed grocery list for the weekend, including essential household items like milk, eggs, and bread.",
    list: ["Milk", "Eggs", "Bread"],
    tags: ["shopping", "list"],
    isShareable: true,
    addedOn: "2024-11-20T14:00:00.000+00:00",
  },
  {
    cardId: "10",
    type: "note",
    createdById: "user987",
    title: "Meeting Notes",
    description:
      "These notes summarize key points from the team meeting, such as the agenda, action items, and upcoming deadlines.",
    list: ["Agenda", "Action Items", "Deadlines"],
    isShareable: false,
    addedOn: "2024-11-17T09:45:30.000+00:00",
  },
];

export const linkData: LinkInterface[] = [
  {
    cardId: "11",
    type: "link",
    createdById: "user135",
    title: "Favorite Websites",
    description:
      "A curated list of favorite websites that provide valuable resources, including search engines and development platforms.",
    link: ["https://google.com", "https://github.com"],
    tags: ["favorites", "web"],
    isShareable: true,
    addedOn: "2024-11-19T08:20:10.000+00:00",
  },
  {
    cardId: "12",
    type: "link",
    createdById: "user246",
    title: "Documentation Links",
    description:
      "Links to official documentation for various technologies like React and TypeScript, helpful for developers of all levels.",
    link: ["https://reactjs.org", "https://typescriptlang.org"],
    isShareable: false,
    addedOn: "2024-11-17T13:10:05.000+00:00",
  },
];

export const imageData: ImageInterface[] = [
  {
    cardId: "13",
    type: "image",
    createdById: "user369",
    title: "Beautiful Landscape",
    description:
      "A high-resolution image file showcasing a stunning landscape with mountains, trees, and a vibrant sunset sky.",
    image: "/landscape.jpg",
    tags: ["nature", "scenery"],
    isShareable: true,
    addedOn: "2024-11-18T07:50:00.000+00:00",
  },
  {
    cardId: "14",
    type: "image",
    createdById: "user852",
    title: "Abstract Art",
    description:
      "This image depicts a piece of abstract art featuring colorful geometric patterns and unique artistic expressions.",
    image: "/abstract.jpg",
    link: "https://example.com/art",
    tags: ["art", "design"],
    isShareable: false,
    addedOn: "2024-11-18T10:15:20.000+00:00",
  },
];

// Dummy objects for VideoInterface
// export const videoData: VideoInterface[] = [
//   {
//     cardId: "11",
//     createdById: "user963",
//     title: "Introduction to TypeScript",s
//     description:
//       "A comprehensive video tutorial introducing the basics of TypeScript, including its key features and advantages.",
//     video: "https://youtu.be/jzv-VC9kcXA",
//     tags: ["typescript", "tutorial"],
//     isShareable: true,
//     addedOn: "2024-11-17T11:42:54.118+00:00",
//   },
//   {
//     cardId: "12",
//     createdById: "user147",
//     title: "React Hooks Explained",
//     description:
//       "This video provides an in-depth explanation of React hooks, covering useState, useEffect, and other advanced concepts.",
//     video: "react-hooks.mp4",
//     link: "https://www.youtube.com/shorts/G6JqC6WrpWY",
//     tags: ["react", "hooks"],
//     isShareable: false,
//     addedOn: "2024-11-17T11:42:54.118+00:00",
//   },
// ];

export const defaultUserData = {
  id: "12345",
  firstName: "John",
  lastName: "Doe",
  fullName: "John Doe",
  email: "john.doe@example.com",
  userName: "john_doe",
  profileImageUrl: "https://example.com/profile.jpg",
  emailVerificationStatus: true,
  phoneNumber: {
    code: "+1",
    number: "1234567890"
  },
  phoneNumberVerificationStatus: true,
  address: "123 Main St, City, Country",
  bio: "Hello, I'm John!",
  userDob: "1990-01-01",
  avatarFallbackText: "JD",
  uploadedContent: ["content1", "content2"],
  bookmarks: ["content1"]
}

