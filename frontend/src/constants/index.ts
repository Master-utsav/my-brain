import { UserDataProps } from "@/context/authContext";
import AddIcon from "@/Icons/AddIcon";
import BookmarkIcon2 from "@/Icons/BookmarkIcon2";
import DashboardIcon from "@/Icons/DashboardIcon";
import ExamTestIcon from "@/Icons/ExamTestIcon";
import HelpIcon from "@/Icons/HelpIcon";
import HistoryIcon from "@/Icons/HistoryIcon";
import HomeIcon from "@/Icons/HomeIcon";
import RefreshIcon from "@/Icons/RefreshIcon";
// import SaveForLaterIcon from "@/Icons/SaveForLaterIcon";
// import SettingIcon from "@/Icons/SettingIcon";
import SubscriptionIcon from "@/Icons/SubscriptionIcon";
import TodoIcon from "@/Icons/TodoIcon";


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

export const heroContent = {
    h1Heading: "Master New Skills with",
    h1Heading2: "Course-Yuga",
    description : ["Are you ready to leave the stress of all-nighters behind? Imagine mastering skills with ease, without the burnout or late-night struggles. Course-Yuga helps you get there, guiding you step-by-step to success." , "Tired of endless textbooks and confusing lectures? With Course-Yuga, we break down even the toughest concepts into bite-sized lessons, so you can learn faster, smarter, and more effectively." , "Whether you're a beginner or looking to level up, Course-Yuga tailors your learning experience to your pace and needs. Join thousands who have already transformed their skillsets and take the first step toward your future."],
    buttonText : "Get Started",
    userCount: "42K +"
}

export const faqData = [
  {
    question: 'How do I reset my password?',
    answer:
      'You can reset your password by clicking the "Forgot Password" link on the login page. You will receive an email with instructions to reset your password.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach us via the contact form below or email us at support@yourdomain.com. Our team will respond within 24-48 hours.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit cards, PayPal, and bank transfers. More payment methods are coming soon.',
  },
];

export const usersTooltip = [
    {
        id: 1,
        userProfileLink: "https://masterutsav.in",
        userName: "Utsav Jaiswal",
        image: "https://avatars.githubusercontent.com/u/133480549?v=4",
        courseName: "Cohort 3.0",
    },
    {
        id: 2,
        userProfileLink: "https://masterutsav.in",
        userName: "Abhishek Arya",
        image: "https://i.pinimg.com/736x/87/3a/c6/873ac673ebd640c26dbfe65d13f5c625.jpg",
        courseName: "Love Babbar",
    },
    {
        id: 3,
        userProfileLink: "https://masterutsav.in",
        userName: "Jatin Kushwah",
        image: "images/jatin.jpg",
        courseName: "Apna College DSA",
    },
  
]
export const educatorsInfiniteScrollData = [
    {
        id: 1,
        educatorName: "Harkirat Singh",
        imageUrl: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png",
        courseName: "Cohort 3.0",
    },
    {
        id: 2,
        educatorName: "Love Babbar",
        imageUrl: "https://s3-ap-northeast-1.amazonaws.com/teamblindstatics/link/2/bad3237833b617f4da3b2799bb008077_1632020209322_res.jpeg",
        courseName: "Supreme 2.0",
    },
    {
        id: 3,
        educatorName: "Apna College",
        imageUrl: "https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-27-at-2.11.07-PM-768x512.jpeg",
        courseName: "Alpha 3.0",
    },
    {
        id: 4,
        educatorName: "Hitesh Chaudary",
        imageUrl: "https://cdn.prod.website-files.com/61a0a26a75358d70b0bf68f9/634fcf3453b051f981d67f82_person-image.jpeg",
        courseName: "JavaScript",
    },
    {
        id: 5,
        educatorName: "Adrian Hajdin",
        imageUrl: "https://avatars.githubusercontent.com/u/24898559?v=4",
        courseName: "JS Mastery",
    },
    {
        id: 6,
        educatorName: "Harkirat Singh",
        imageUrl: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png",
        courseName: "Cohort 3.0",
    },
    {
        id: 7,
        educatorName: "Love Babbar",
        imageUrl: "https://s3-ap-northeast-1.amazonaws.com/teamblindstatics/link/2/bad3237833b617f4da3b2799bb008077_1632020209322_res.jpeg",
        courseName: "Supreme 2.0",
    },
    {
        id: 8,
        educatorName: "Apna College",
        imageUrl: "https://www.mypunepulse.com/wp-content/uploads/2024/08/WhatsApp-Thumbnail-2024-08-27-at-2.11.07-PM-768x512.jpeg",
        courseName: "Alpha 3.0",
    },
    {
        id: 9,
        educatorName: "Hitesh Chaudary",
        imageUrl: "https://cdn.prod.website-files.com/61a0a26a75358d70b0bf68f9/634fcf3453b051f981d67f82_person-thumbnail.jpeg",
        courseName: "JavaScript",
    },
    {
        id: 10,
        educatorName: "Adrian Hajdin",
        imageUrl: "https://avatars.githubusercontent.com/u/24898559?v=4",
        courseName: "JS Mastery",
    },
]


export interface IUpdateCourse {
  courseName: string;
  tutorName: string;
  courseType: string;
  courseId: string;
  sellingPrice?: number;
  originalPrice?: number;
  currency?: string;
  rating?: number;
  ratingCount?: number;
  createdAt?: string;
  description: string;
  thumbnail: string | File;
  markdownContent?: string;
  redirectLink?: string;
  uploadedBy?: string
}
export interface ICourseData {
  courseName: string;
  tutorName: string;
  courseType: string;
  courseId: string;
  sellingPrice: number;
  originalPrice: number;
  currency: string;
  rating: number;
  ratingCount: number;
  createdAt: string;
  description: string;
  thumbnail: string;
  markdownContent?: string;
  redirectLink?: string;
  uploadedBy?: string
}

export interface IUserCourseData {
  courseName: string;
  tutorName: string;
  courseType: string;
  courseId: string;
  sellingPrice: number;
  originalPrice: number;
  currency: string;
  rating: number;
  ratingCount: number;
  createdAt: string;
  description: string;
  thumbnail: string;
  markdownContent?: string;
  redirectLink?: string;
  uploadedBy?: string;
  progress?: number;
}


export const courseDataTemplate: ICourseData = {
  courseName: "Your course name",
  tutorName: "Tutor's full name",
  courseId: "Unique course ID (e.g., 'course_001')",
  sellingPrice: 49.99, // Selling price of the course
  originalPrice: 99.99, // Original price before discount
  currency: "$",
  courseType: "YOUTUBE",
  rating: 4.5, // Course rating out of 5
  ratingCount: 200, // Number of users who rated the course
  createdAt: "Creation date in ISO format (e.g., '2024-10-13T10:00:00Z')",
  description: "Brief description of the course content",
  thumbnail: "https://imgs.search.brave.com/hLpf3iUlstMIDEPkDOjsBcCD1ySs6ym5y7QOvda0R8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvZnVsbC1z/dGFjay1qYXZhc2Ny/aXB0LWRldmVsb3Bl/ci1pbGx1c3RyYXRp/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1qYXZhLXdl/Yi1kZXZlbG9wbWVu/dC1wYWNrLWRlc2ln/bi1pbGx1c3RyYXRp/b25zLTM3NTcyNTQu/cG5nP2Y9d2VicA",
  markdownContent: "Optional markdown content for detailed course info",
  redirectLink: "Optional link to an external course page",
  uploadedBy: "User ID of the person who uploaded the course",
};

export const courses = [
  {
    id: 0,
    courseName: "MERN Web Development",
    tutorName: "Harkirat Singh",
    description:
      "Master the MERN stack (MongoDB, Express, React, Node) to build full-stack web applications from scratch. Learn how to integrate frontend and backend with modern web technologies.",
    thumbnail: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.40079486154772104.png",
    progress: 23,
    rating: 4.5,
    sellingPrice: 49.9,
    originalPrice: 100,
    currency: "$",
    ratingCount: 2456,
    createdAt: "2022-12-11T15:32:14.974+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"
  },
  {
    id: 1,
    courseName: "Web3 Development",
    tutorName: "Harkirat Singh",
    description:
      "Dive into the world of decentralized applications and blockchain with Web3 development. Learn smart contracts, decentralized finance (DeFi), and how to create DApps on Ethereum.",
    thumbnail: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
    progress: 47,
    rating: 4.0,
    sellingPrice: 89.9,
    originalPrice: 100,
    currency: "$",
    ratingCount: 878,
    createdAt: "2023-06-18T10:45:09.123+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  },
  {
    id: 2,
    courseName: "Rust",
    tutorName: "Harkirat Singh",
    description:
      "Explore Rust, a modern systems programming language that focuses on speed, memory safety, and parallelism. This course teaches you how to write efficient, concurrent, and safe code using Rust.",
    thumbnail: "https://img.youtube.com/vi/qP7LzZqGh30/maxresdefault.jpg",
    progress: 86,
    rating: 5.0,
    sellingPrice: 99.9,
    originalPrice: 120,
    currency: "$",
    ratingCount: 679,
    createdAt: "2023-02-02T08:22:37.456+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  },
  {
    id: 3,
    courseName: "DSA in C++",
    tutorName: "Love Babbar",
    description:
      "Learn Data Structures and Algorithms in C++ with one of the most comprehensive and popular courses. This course is designed to help you master key topics for technical interviews.",
    thumbnail: "https://img.youtube.com/vi/9kQ1JUDleWg/maxresdefault.jpg",
    progress: 71,
    rating: 4.5,
    sellingPrice: 9.9,
    originalPrice: 120,
    currency: "$",
    ratingCount: 1289,
    createdAt: "2022-11-28T14:18:50.987+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  },
  {
    id: 4,
    courseName: "Web Development",
    tutorName: "Code with Harry",
    description:
      "Master the MERN stack (MongoDB, Express, React, Node) to build full-stack web applications from scratch. Learn how to integrate frontend and backend with modern web technologies.",
    thumbnail: "https://img.youtube.com/vi/tVzUXW6siu0/maxresdefault.jpg",
    progress: 12,
    rating: 4.0,
    sellingPrice: 29.9,
    originalPrice: 120,
    currency: "$",
    ratingCount: 1564,
    createdAt: "2023-08-14T11:30:42.654+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  },
  {
    id: 5,
    courseName: "Python & Machine Learning",
    tutorName: "Code with Harry",
    description:
      "Learn Python programming from scratch and dive deep into Machine Learning concepts. This course covers Python fundamentals and advanced ML algorithms, preparing you for real-world applications.",
    thumbnail: "https://img.youtube.com/vi/7wnove7K-ZQ/maxresdefault.jpg",
    progress: 36,
    rating: 4.5,
    sellingPrice: 59.9,
    originalPrice: 100,
    currency: "$",
    ratingCount: 567,
    createdAt: "2023-04-25T09:15:28.321+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  },
  {
    id: 6,
    courseName: "Next.js",
    tutorName: "Hitesh Chaudary",
    description:
      "Master Next.js, the React framework for production. Learn how to build server-side rendered web applications, improve performance with static generation, and create modern web apps effortlessly.",
    thumbnail: "https://img.youtube.com/vi/zLJoVRleOuc/maxresdefault.jpg",
    progress: 65,
    rating: 5.0,
    sellingPrice: 79.9,
    originalPrice: 120,
    currency: "$",
    ratingCount: 432,
    createdAt: "2022-10-17T16:50:12.874+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  },
  {
    id: 7,
    courseName: "Youtube DSA C++",
    tutorName: "Shardha Khapra",
    description:
      "This YouTube course focuses on Data Structures and Algorithms (DSA) in C++. Learn core concepts like arrays, stacks, queues, linked lists, and algorithms to ace coding interviews.",
    thumbnail: "https://img.youtube.com/vi/1yrh60og6qc/maxresdefault.jpg",
    progress: 78,
    rating: 3.5,
    sellingPrice: 19.9,
    originalPrice: 120,
    currency: "$",
    ratingCount: 598,
    createdAt: "2023-07-05T13:05:47.145+00:00",
    markdownContent : "",
    redirectLink: "https://masterutsav.in"

  }
];

export interface IVideoData{
  videoId: string;
  videoName: string;
  tutorName: string;
  videoType: "PERSONAL" | "YOUTUBE";
  courseId: string
  uploadedBy: string;
  thumbnail: string;
  videoUrl: string;
  description?: string;
  watchedBy?: string[]; 
  watchCount?: number; 
  videoTimeStamps?: {
    time: number; 
    text: string; 
  }[]; 
  isVerified: boolean;
  markdownContent?: string;
}

export interface IUpdateVideoData{
  videoId: string;
  videoName: string;
  tutorName: string;
  videoType: "PERSONAL" | "YOUTUBE";
  courseId: string
  uploadedBy: string;
  thumbnail: File | string;
  videoUrl: File | string;
  description?: string;
  watchedBy?: string[]; 
  watchCount?: number; 
  videoTimeStamps?: {
    time: number; 
    text: string; 
  }[]; 
  isVerified: boolean;
  markdownContent?: string;
}


export const videoDataTemplate: IVideoData = {
  videoId: "12345",
  videoName: "Learn TypeScript Basics",
  tutorName: "John Doe",
  videoType: "YOUTUBE",
  courseId: "course_001",
  uploadedBy: "admin",
  thumbnail: "https://via.placeholder.com/300x200.png?text=TypeScript+Course",
  videoUrl: "https://www.youtube.com/embed/dummy-video",
  description: "A beginner-friendly tutorial to get started with TypeScript.",
  watchedBy: ["user1", "user2", "user3"],
  watchCount: 45,
  videoTimeStamps: [
    { time: 10, text: "Introduction" },
    { time: 60, text: "Setting up the environment" },
    { time: 120, text: "Basic Types" },
    { time: 300, text: "Interfaces & Classes" },
    { time: 480, text: "Conclusion" }
  ],
  isVerified: true,
  markdownContent: `
  ## TypeScript Basics
  - **Introduction:** Learn what TypeScript is and why it's used.
  - **Setup:** Install and configure the environment.
  - **Core Concepts:** Explore types, interfaces, and classes.
  
  [Click here to explore more](https://www.typescriptlang.org)
  `,
};



export interface LoginUserDataProps{
        userName: string;
        email: string;
        firstName: string;
        lastName: string;
        emailVerificationStatus: boolean;
        profileThumbnailUrl: string;
}

interface DashBoardIconProps {
    fillColor?: string;
    size?: number;
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
      Icon: HomeIcon,  
      title: "Homepage",
      link: "/",
    },
    {
      theme: "dark",
      Icon: DashboardIcon,  
      title: "Dashboard",
      link: "/user/dashboard",
    },
    
    {
      theme: "dark",
      Icon: ExamTestIcon,  
      title: "Tests",
      link: "/user/test",
    },
    {
      theme: "dark",
      Icon: BookmarkIcon2,  
      title: "Bookmarks",
      link: "/user/bookmarks",
    },
    // {
    //   theme: "dark",
    //   Icon: SaveForLaterIcon,  
    //   title: "Watchlist",
    //   link: "/user/watchlist",
    // },
    {
      theme: "dark",
      Icon: TodoIcon,  
      title: "Todo-List",
      link: "/user/todo-list",
    },
    {
      theme: "dark",
      Icon: HistoryIcon,  
      title: "History",
      link: "/user/history",
    },
  ];
  
  export const DashBoardNavItems2: DashboardNavItemProps[] = [
    {   
        theme: "dark",
        Icon: RefreshIcon,  
        title: "Refresh",
        link: "/user/refresh",
    },
    {
      theme: "dark",
      Icon: SubscriptionIcon,  
      title: "Subscription",
      link: "/user/subscription",
    },
    // {   
    //     theme: "dark",
    //     Icon: SettingIcon,  
    //     title: "Setting",
    //     link: "/user/setting",
    // },
    {   
        theme: "dark",
        Icon: HelpIcon,  
        title: "Help",
        link: "/help",
    },
  ]

  export const DashBoardNavItems3 : DashboardNavItemProps[] = [
    {   
      theme: "dark",
      Icon: AddIcon,  
      title: "Add Courses",
      link: "/user/add-courses",
  },
    {   
      theme: "dark",
      Icon: AddIcon,  
      title: "Add Videos",
      link: "/user/add-videos",
  },
    {   
      theme: "dark",
      Icon: AddIcon,  
      title: "Add Tests",
      link: "/user/add-tests",
  },
]

  export const defaultUserData: UserDataProps = {
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

  export const countryName: string[] = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
    "Comoros", "Congo (Congo-Brazzaville)", "Congo (Democratic Republic)", "Costa Rica", "Croatia", "Cuba", "Cyprus", 
    "Czech Republic (Czechia)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", 
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", 
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", 
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", 
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", 
    "Korea (South)", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", 
    "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", 
    "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", 
    "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", 
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  export const AllCountryCurrency = [
    'AED د.إ', 'AFN ؋', 'ALL L', 'AMD ֏', 'ANG ƒ', 'AOA Kz', 'ARS $', 'AUD $', 'AWG ƒ', 
    'AZN ₼', 'BAM KM', 'BBD $', 'BDT ৳', 'BGN Лв', 'BHD .د.ب', 'BIF ₣', 'BMD $', 
    'BND $', 'BOB Bs.', 'BRL R$', 'BSD $', 'BTN Nu.', 'BWP P', 'BYN Br', 'BZD $', 
    'CAD $', 'CDF ₣', 'CHF CHF', 'CLP $', 'CNY ¥', 'COP $', 'CRC ₡', 'CUP $', 
    'CVE $', 'CZK Kč', 'DJF ₣', 'DKK kr', 'DOP RD$', 'DZD دج', 'EGP £', 'ERN Nfk', 
    'ETB Br', 'EUR €', 'FJD $', 'FKP £', 'FOK kr', 'GBP £', 'GEL ₾', 'GGP £', 
    'GHS ₵', 'GIP £', 'GMD D', 'GNF ₣', 'GTQ Q', 'GYD $', 'HKD $', 'HNL L', 
    'HRK kn', 'HTG G', 'HUF Ft', 'IDR Rp', 'ILS ₪', 'IMP £', 'INR ₹', 'IQD ع.د', 
    'IRR ﷼', 'ISK kr', 'JEP £', 'JMD $', 'JOD د.ا', 'JPY ¥', 'KES KSh', 'KGS с', 
    'KHR ៛', 'KID $', 'KMF ₣', 'KRW ₩', 'KWD د.ك', 'KYD $', 'KZT ₸', 'LAK ₭', 
    'LBP ل.ل', 'LKR ₨', 'LRD $', 'LSL L', 'LYD ل.د', 'MAD د.م.', 'MDL L', 'MGA Ar', 
    'MKD ден', 'MMK K', 'MNT ₮', 'MOP MOP$', 'MRU UM', 'MUR ₨', 'MVR ރ.', 'MWK MK', 
    'MXN $', 'MYR RM', 'MZN MT', 'NAD $', 'NGN ₦', 'NIO C$', 'NOK kr', 'NPR ₨', 
    'NZD $', 'OMR ﷼', 'PAB B/.', 'PEN S/', 'PGK K', 'PHP ₱', 'PKR ₨', 'PLN zł', 
    'PYG ₲', 'QAR ﷼', 'RON lei', 'RSD дин', 'RUB ₽', 'RWF ₣', 'SAR ﷼', 'SBD $', 
    'SCR ₨', 'SDG ج.س.', 'SEK kr', 'SGD $', 'SHP £', 'SLL Le', 'SOS Sh', 'SRD $', 
    'SSP £', 'STN Db', 'SYP £', 'SZL L', 'THB ฿', 'TJS ЅМ', 'TMT m', 'TND د.ت', 
    'TOP T$', 'TRY ₺', 'TTD $', 'TVD $', 'TWD NT$', 'TZS Sh', 'UAH ₴', 'UGX Sh', 
    'USD $', 'UYU $U', 'UZS сўм', 'VES Bs.', 'VND ₫', 'VUV Vt', 'WST T', 'XAF ₣', 
    'XCD $', 'XOF ₣', 'XPF ₣', 'YER ﷼', 'ZAR R', 'ZMW ZK', 'ZWL Z$'
  ];
  
  
  export const CountryCodeData: {countryname: string , countrycode: string , flagurl: string}[] = [
    {
      "countryname": "Afghanistan",
      "countrycode": "+93",
      "flagurl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
    },
    {
      "countryname": "Albania",
      "countrycode": "+355",
      "flagurl": "https://flagcdn.com/al.svg"
    },
    {
      "countryname": "Algeria",
      "countrycode": "+213",
      "flagurl": "https://flagcdn.com/dz.svg"
    },
    {
      "countryname": "Andorra",
      "countrycode": "+376",
      "flagurl": "https://flagcdn.com/ad.svg"
    },
    {
      "countryname": "Angola",
      "countrycode": "+244",
      "flagurl": "https://flagcdn.com/ao.svg"
    },
    {
      "countryname": "Antigua and Barbuda",
      "countrycode": "+1268",
      "flagurl": "https://flagcdn.com/ag.svg"
    },
    {
      "countryname": "Argentina",
      "countrycode": "+54",
      "flagurl": "https://flagcdn.com/ar.svg"
    },
    {
      "countryname": "Armenia",
      "countrycode": "+374",
      "flagurl": "https://flagcdn.com/am.svg"
    },
    {
      "countryname": "Australia",
      "countrycode": "+61",
      "flagurl": "https://flagcdn.com/au.svg"
    },
    {
      "countryname": "Austria",
      "countrycode": "+43",
      "flagurl": "https://flagcdn.com/at.svg"
    },
    {
      "countryname": "Azerbaijan",
      "countrycode": "+994",
      "flagurl": "https://flagcdn.com/az.svg"
    },
    {
      "countryname": "Bahamas",
      "countrycode": "+1242",
      "flagurl": "https://flagcdn.com/bs.svg"
    },
    {
      "countryname": "Bahrain",
      "countrycode": "+973",
      "flagurl": "https://flagcdn.com/bh.svg"
    },
    {
      "countryname": "Bangladesh",
      "countrycode": "+880",
      "flagurl": "https://flagcdn.com/bd.svg"
    },
    {
      "countryname": "Barbados",
      "countrycode": "+1246",
      "flagurl": "https://flagcdn.com/bb.svg"
    },
    {
      "countryname": "Belarus",
      "countrycode": "+375",
      "flagurl": "https://flagcdn.com/by.svg"
    },
    {
      "countryname": "Belgium",
      "countrycode": "+32",
      "flagurl": "https://flagcdn.com/be.svg"
    },
    {
      "countryname": "Belize",
      "countrycode": "+501",
      "flagurl": "https://flagcdn.com/bz.svg"
    },
    {
      "countryname": "Benin",
      "countrycode": "+229",
      "flagurl": "https://flagcdn.com/bj.svg"
    },
    {
      "countryname": "Bhutan",
      "countrycode": "+975",
      "flagurl": "https://flagcdn.com/bt.svg"
    },
    {
      "countryname": "Bolivia",
      "countrycode": "+591",
      "flagurl": "https://flagcdn.com/bo.svg"
    },
    {
      "countryname": "Bosnia and Herzegovina",
      "countrycode": "+387",
      "flagurl": "https://flagcdn.com/ba.svg"
    },
    {
      "countryname": "Botswana",
      "countrycode": "+267",
      "flagurl": "https://flagcdn.com/bw.svg"
    },
    {
      "countryname": "Brazil",
      "countrycode": "+55",
      "flagurl": "https://flagcdn.com/br.svg"
    },
    {
      "countryname": "Brunei",
      "countrycode": "+673",
      "flagurl": "https://flagcdn.com/bn.svg"
    },
    {
      "countryname": "Bulgaria",
      "countrycode": "+359",
      "flagurl": "https://flagcdn.com/bg.svg"
    },
    {
      "countryname": "Burkina Faso",
      "countrycode": "+226",
      "flagurl": "https://flagcdn.com/bf.svg"
    },
    {
      "countryname": "Burundi",
      "countrycode": "+257",
      "flagurl": "https://flagcdn.com/bi.svg"
    },
    {
      "countryname": "Cape Verde",
      "countrycode": "+238",
      "flagurl": "https://flagcdn.com/cv.svg"
    },
    {
      "countryname": "Cambodia",
      "countrycode": "+855",
      "flagurl": "https://flagcdn.com/kh.svg"
    },
    {
      "countryname": "Cameroon",
      "countrycode": "+237",
      "flagurl": "https://flagcdn.com/cm.svg"
    },
    {
      "countryname": "Canada",
      "countrycode": "+1",
      "flagurl": "https://flagcdn.com/ca.svg"
    },
    {
      "countryname": "Central African Republic",
      "countrycode": "+236",
      "flagurl": "https://flagcdn.com/cf.svg"
    },
    {
      "countryname": "Chad",
      "countrycode": "+235",
      "flagurl": "https://flagcdn.com/td.svg"
    },
    {
      "countryname": "Chile",
      "countrycode": "+56",
      "flagurl": "https://flagcdn.com/cl.svg"
    },
    {
      "countryname": "Taiwan",
      "countrycode": "+886",
      "flagurl": "https://flagcdn.com/tw.svg"
    },
    {
      "countryname": "Colombia",
      "countrycode": "+57",
      "flagurl": "https://flagcdn.com/co.svg"
    },
    {
      "countryname": "Comoros",
      "countrycode": "+269",
      "flagurl": "https://flagcdn.com/km.svg"
    },
    {
      "countryname": "Republic of the Congo",
      "countrycode": "+242",
      "flagurl": "https://flagcdn.com/cg.svg"
    },
    {
      "countryname": "DR Congo",
      "countrycode": "+243",
      "flagurl": "https://flagcdn.com/cd.svg"
    },
    {
      "countryname": "Costa Rica",
      "countrycode": "+506",
      "flagurl": "https://flagcdn.com/cr.svg"
    },
    {
      "countryname": "Croatia",
      "countrycode": "+385",
      "flagurl": "https://flagcdn.com/hr.svg"
    },
    {
      "countryname": "Cuba",
      "countrycode": "+53",
      "flagurl": "https://flagcdn.com/cu.svg"
    },
    {
      "countryname": "Cyprus",
      "countrycode": "+357",
      "flagurl": "https://flagcdn.com/cy.svg"
    },
    {
      "countryname": "Czechia",
      "countrycode": "+420",
      "flagurl": "https://flagcdn.com/cz.svg"
    },
    {
      "countryname": "Denmark",
      "countrycode": "+45",
      "flagurl": "https://flagcdn.com/dk.svg"
    },
    {
      "countryname": "Djibouti",
      "countrycode": "+253",
      "flagurl": "https://flagcdn.com/dj.svg"
    },
    {
      "countryname": "Dominican Republic",
      "countrycode": "+1809",
      "flagurl": "https://flagcdn.com/do.svg"
    },
    {
      "countryname": "Dominican Republic",
      "countrycode": "+1809",
      "flagurl": "https://flagcdn.com/do.svg"
    },
    {
      "countryname": "Timor-Leste",
      "countrycode": "+670",
      "flagurl": "https://flagcdn.com/tl.svg"
    },
    {
      "countryname": "Ecuador",
      "countrycode": "+593",
      "flagurl": "https://flagcdn.com/ec.svg"
    },
    {
      "countryname": "Egypt",
      "countrycode": "+20",
      "flagurl": "https://flagcdn.com/eg.svg"
    },
    {
      "countryname": "El Salvador",
      "countrycode": "+503",
      "flagurl": "https://flagcdn.com/sv.svg"
    },
    {
      "countryname": "Equatorial Guinea",
      "countrycode": "+240",
      "flagurl": "https://flagcdn.com/gq.svg"
    },
    {
      "countryname": "Eritrea",
      "countrycode": "+291",
      "flagurl": "https://flagcdn.com/er.svg"
    },
    {
      "countryname": "Estonia",
      "countrycode": "+372",
      "flagurl": "https://flagcdn.com/ee.svg"
    },
    {
      "countryname": "Eswatini",
      "countrycode": "+268",
      "flagurl": "https://flagcdn.com/sz.svg"
    },
    {
      "countryname": "Ethiopia",
      "countrycode": "+251",
      "flagurl": "https://flagcdn.com/et.svg"
    },
    {
      "countryname": "Fiji",
      "countrycode": "+679",
      "flagurl": "https://flagcdn.com/fj.svg"
    },
    {
      "countryname": "Finland",
      "countrycode": "+358",
      "flagurl": "https://flagcdn.com/fi.svg"
    },
    {
      "countryname": "France",
      "countrycode": "+33",
      "flagurl": "https://flagcdn.com/fr.svg"
    },
    {
      "countryname": "Gabon",
      "countrycode": "+241",
      "flagurl": "https://flagcdn.com/ga.svg"
    },
    {
      "countryname": "Gambia",
      "countrycode": "+220",
      "flagurl": "https://flagcdn.com/gm.svg"
    },
    {
      "countryname": "South Georgia",
      "countrycode": "+500",
      "flagurl": "https://flagcdn.com/gs.svg"
    },
    {
      "countryname": "Germany",
      "countrycode": "+49",
      "flagurl": "https://flagcdn.com/de.svg"
    },
    {
      "countryname": "Ghana",
      "countrycode": "+233",
      "flagurl": "https://flagcdn.com/gh.svg"
    },
    {
      "countryname": "Greece",
      "countrycode": "+30",
      "flagurl": "https://flagcdn.com/gr.svg"
    },
    {
      "countryname": "Grenada",
      "countrycode": "+1473",
      "flagurl": "https://flagcdn.com/gd.svg"
    },
    {
      "countryname": "Guatemala",
      "countrycode": "+502",
      "flagurl": "https://flagcdn.com/gt.svg"
    },
    {
      "countryname": "Guinea-Bissau",
      "countrycode": "+245",
      "flagurl": "https://flagcdn.com/gw.svg"
    },
    {
      "countryname": "Guinea-Bissau",
      "countrycode": "+245",
      "flagurl": "https://flagcdn.com/gw.svg"
    },
    {
      "countryname": "Guyana",
      "countrycode": "+592",
      "flagurl": "https://flagcdn.com/gy.svg"
    },
    {
      "countryname": "Haiti",
      "countrycode": "+509",
      "flagurl": "https://flagcdn.com/ht.svg"
    },
    {
      "countryname": "Honduras",
      "countrycode": "+504",
      "flagurl": "https://flagcdn.com/hn.svg"
    },
    {
      "countryname": "Hungary",
      "countrycode": "+36",
      "flagurl": "https://flagcdn.com/hu.svg"
    },
    {
      "countryname": "Iceland",
      "countrycode": "+354",
      "flagurl": "https://flagcdn.com/is.svg"
    },
    {
      "countryname": "India",
      "countrycode": "+91",
      "flagurl": "https://flagcdn.com/in.svg"
    },
    {
      "countryname": "Indonesia",
      "countrycode": "+62",
      "flagurl": "https://flagcdn.com/id.svg"
    },
    {
      "countryname": "Iran",
      "countrycode": "+98",
      "flagurl": "https://flagcdn.com/ir.svg"
    },
    {
      "countryname": "Iraq",
      "countrycode": "+964",
      "flagurl": "https://flagcdn.com/iq.svg"
    },
    {
      "countryname": "United Kingdom",
      "countrycode": "+44",
      "flagurl": "https://flagcdn.com/gb.svg"
    },
    {
      "countryname": "Israel",
      "countrycode": "+972",
      "flagurl": "https://flagcdn.com/il.svg"
    },
    {
      "countryname": "Italy",
      "countrycode": "+39",
      "flagurl": "https://flagcdn.com/it.svg"
    },
    {
      "countryname": "Jamaica",
      "countrycode": "+1876",
      "flagurl": "https://flagcdn.com/jm.svg"
    },
    {
      "countryname": "Japan",
      "countrycode": "+81",
      "flagurl": "https://flagcdn.com/jp.svg"
    },
    {
      "countryname": "Jordan",
      "countrycode": "+962",
      "flagurl": "https://flagcdn.com/jo.svg"
    },
    {
      "countryname": "Kazakhstan",
      "countrycode": "+76",
      "flagurl": "https://flagcdn.com/kz.svg"
    },
    {
      "countryname": "Kenya",
      "countrycode": "+254",
      "flagurl": "https://flagcdn.com/ke.svg"
    },
    {
      "countryname": "Kiribati",
      "countrycode": "+686",
      "flagurl": "https://flagcdn.com/ki.svg"
    },
    {
      "countryname": "North Korea",
      "countrycode": "+850",
      "flagurl": "https://flagcdn.com/kp.svg"
    },
    {
      "countryname": "South Korea",
      "countrycode": "+82",
      "flagurl": "https://flagcdn.com/kr.svg"
    },
    {
      "countryname": "Kuwait",
      "countrycode": "+965",
      "flagurl": "https://flagcdn.com/kw.svg"
    },
    {
      "countryname": "Kyrgyzstan",
      "countrycode": "+996",
      "flagurl": "https://flagcdn.com/kg.svg"
    },
    {
      "countryname": "Laos",
      "countrycode": "+856",
      "flagurl": "https://flagcdn.com/la.svg"
    },
    {
      "countryname": "Latvia",
      "countrycode": "+371",
      "flagurl": "https://flagcdn.com/lv.svg"
    },
    {
      "countryname": "Lebanon",
      "countrycode": "+961",
      "flagurl": "https://flagcdn.com/lb.svg"
    },
    {
      "countryname": "Lesotho",
      "countrycode": "+266",
      "flagurl": "https://flagcdn.com/ls.svg"
    },
    {
      "countryname": "Liberia",
      "countrycode": "+231",
      "flagurl": "https://flagcdn.com/lr.svg"
    },
    {
      "countryname": "Libya",
      "countrycode": "+218",
      "flagurl": "https://flagcdn.com/ly.svg"
    },
    {
      "countryname": "Liechtenstein",
      "countrycode": "+423",
      "flagurl": "https://flagcdn.com/li.svg"
    },
    {
      "countryname": "Lithuania",
      "countrycode": "+370",
      "flagurl": "https://flagcdn.com/lt.svg"
    },
    {
      "countryname": "Luxembourg",
      "countrycode": "+352",
      "flagurl": "https://flagcdn.com/lu.svg"
    },
    {
      "countryname": "Madagascar",
      "countrycode": "+261",
      "flagurl": "https://flagcdn.com/mg.svg"
    },
    {
      "countryname": "Malawi",
      "countrycode": "+265",
      "flagurl": "https://flagcdn.com/mw.svg"
    },
    {
      "countryname": "Malaysia",
      "countrycode": "+60",
      "flagurl": "https://flagcdn.com/my.svg"
    },
    {
      "countryname": "Maldives",
      "countrycode": "+960",
      "flagurl": "https://flagcdn.com/mv.svg"
    },
    {
      "countryname": "Mali",
      "countrycode": "+223",
      "flagurl": "https://flagcdn.com/ml.svg"
    },
    {
      "countryname": "Malta",
      "countrycode": "+356",
      "flagurl": "https://flagcdn.com/mt.svg"
    },
    {
      "countryname": "Marshall Islands",
      "countrycode": "+692",
      "flagurl": "https://flagcdn.com/mh.svg"
    },
    {
      "countryname": "Mauritania",
      "countrycode": "+222",
      "flagurl": "https://flagcdn.com/mr.svg"
    },
    {
      "countryname": "Mauritius",
      "countrycode": "+230",
      "flagurl": "https://flagcdn.com/mu.svg"
    },
    {
      "countryname": "Mexico",
      "countrycode": "+52",
      "flagurl": "https://flagcdn.com/mx.svg"
    },
    {
      "countryname": "Micronesia",
      "countrycode": "+691",
      "flagurl": "https://flagcdn.com/fm.svg"
    },
    {
      "countryname": "Moldova",
      "countrycode": "+373",
      "flagurl": "https://flagcdn.com/md.svg"
    },
    {
      "countryname": "Monaco",
      "countrycode": "+377",
      "flagurl": "https://flagcdn.com/mc.svg"
    },
    {
      "countryname": "Mongolia",
      "countrycode": "+976",
      "flagurl": "https://flagcdn.com/mn.svg"
    },
    {
      "countryname": "Montenegro",
      "countrycode": "+382",
      "flagurl": "https://flagcdn.com/me.svg"
    },
    {
      "countryname": "Morocco",
      "countrycode": "+212",
      "flagurl": "https://flagcdn.com/ma.svg"
    },
    {
      "countryname": "Mozambique",
      "countrycode": "+258",
      "flagurl": "https://flagcdn.com/mz.svg"
    },
    {
      "countryname": "Myanmar",
      "countrycode": "+95",
      "flagurl": "https://flagcdn.com/mm.svg"
    },
    {
      "countryname": "Namibia",
      "countrycode": "+264",
      "flagurl": "https://flagcdn.com/na.svg"
    },
    {
      "countryname": "Nauru",
      "countrycode": "+674",
      "flagurl": "https://flagcdn.com/nr.svg"
    },
    {
      "countryname": "Nepal",
      "countrycode": "+977",
      "flagurl": "https://flagcdn.com/np.svg"
    },
    {
      "countryname": "Netherlands",
      "countrycode": "+31",
      "flagurl": "https://flagcdn.com/nl.svg"
    },
    {
      "countryname": "New Zealand",
      "countrycode": "+64",
      "flagurl": "https://flagcdn.com/nz.svg"
    },
    {
      "countryname": "Nicaragua",
      "countrycode": "+505",
      "flagurl": "https://flagcdn.com/ni.svg"
    },
    {
      "countryname": "Niger",
      "countrycode": "+227",
      "flagurl": "https://flagcdn.com/ne.svg"
    },
    {
      "countryname": "Nigeria",
      "countrycode": "+234",
      "flagurl": "https://flagcdn.com/ng.svg"
    },
    {
      "countryname": "North Macedonia",
      "countrycode": "+389",
      "flagurl": "https://flagcdn.com/mk.svg"
    },
    {
      "countryname": "Norway",
      "countrycode": "+47",
      "flagurl": "https://flagcdn.com/no.svg"
    },
    {
      "countryname": "Romania",
      "countrycode": "+40",
      "flagurl": "https://flagcdn.com/ro.svg"
    },
    {
      "countryname": "Pakistan",
      "countrycode": "+92",
      "flagurl": "https://flagcdn.com/pk.svg"
    },
    {
      "countryname": "Palau",
      "countrycode": "+680",
      "flagurl": "https://flagcdn.com/pw.svg"
    },
    {
      "countryname": "Panama",
      "countrycode": "+507",
      "flagurl": "https://flagcdn.com/pa.svg"
    },
    {
      "countryname": "Papua New Guinea",
      "countrycode": "+675",
      "flagurl": "https://flagcdn.com/pg.svg"
    },
    {
      "countryname": "Paraguay",
      "countrycode": "+595",
      "flagurl": "https://flagcdn.com/py.svg"
    },
    {
      "countryname": "Peru",
      "countrycode": "+51",
      "flagurl": "https://flagcdn.com/pe.svg"
    },
    {
      "countryname": "Philippines",
      "countrycode": "+63",
      "flagurl": "https://flagcdn.com/ph.svg"
    },
    {
      "countryname": "Poland",
      "countrycode": "+48",
      "flagurl": "https://flagcdn.com/pl.svg"
    },
    {
      "countryname": "Portugal",
      "countrycode": "+351",
      "flagurl": "https://flagcdn.com/pt.svg"
    },
    {
      "countryname": "Qatar",
      "countrycode": "+974",
      "flagurl": "https://flagcdn.com/qa.svg"
    },
    {
      "countryname": "Romania",
      "countrycode": "+40",
      "flagurl": "https://flagcdn.com/ro.svg"
    },
    {
      "countryname": "Russia",
      "countrycode": "+73",
      "flagurl": "https://flagcdn.com/ru.svg"
    },
    {
      "countryname": "Rwanda",
      "countrycode": "+250",
      "flagurl": "https://flagcdn.com/rw.svg"
    },
    {
      "countryname": "Saint Kitts and Nevis",
      "countrycode": "+1869",
      "flagurl": "https://flagcdn.com/kn.svg"
    },
    {
      "countryname": "Saint Lucia",
      "countrycode": "+1758",
      "flagurl": "https://flagcdn.com/lc.svg"
    },
    {
      "countryname": "Saint Vincent and the Grenadines",
      "countrycode": "+1784",
      "flagurl": "https://flagcdn.com/vc.svg"
    },
    {
      "countryname": "American Samoa",
      "countrycode": "+1684",
      "flagurl": "https://flagcdn.com/as.svg"
    },
    {
      "countryname": "San Marino",
      "countrycode": "+378",
      "flagurl": "https://flagcdn.com/sm.svg"
    },
    {
      "countryname": "São Tomé and Príncipe",
      "countrycode": "+239",
      "flagurl": "https://flagcdn.com/st.svg"
    },
    {
      "countryname": "Saudi Arabia",
      "countrycode": "+966",
      "flagurl": "https://flagcdn.com/sa.svg"
    },
    {
      "countryname": "Senegal",
      "countrycode": "+221",
      "flagurl": "https://flagcdn.com/sn.svg"
    },
    {
      "countryname": "Serbia",
      "countrycode": "+381",
      "flagurl": "https://flagcdn.com/rs.svg"
    },
    {
      "countryname": "Seychelles",
      "countrycode": "+248",
      "flagurl": "https://flagcdn.com/sc.svg"
    },
    {
      "countryname": "Sierra Leone",
      "countrycode": "+232",
      "flagurl": "https://flagcdn.com/sl.svg"
    },
    {
      "countryname": "Singapore",
      "countrycode": "+65",
      "flagurl": "https://flagcdn.com/sg.svg"
    },
    {
      "countryname": "Slovakia",
      "countrycode": "+421",
      "flagurl": "https://flagcdn.com/sk.svg"
    },
    {
      "countryname": "Slovenia",
      "countrycode": "+386",
      "flagurl": "https://flagcdn.com/si.svg"
    },
    {
      "countryname": "Solomon Islands",
      "countrycode": "+677",
      "flagurl": "https://flagcdn.com/sb.svg"
    },
    {
      "countryname": "Somalia",
      "countrycode": "+252",
      "flagurl": "https://flagcdn.com/so.svg"
    },
    {
      "countryname": "South Africa",
      "countrycode": "+27",
      "flagurl": "https://flagcdn.com/za.svg"
    },
    {
      "countryname": "South Sudan",
      "countrycode": "+211",
      "flagurl": "https://flagcdn.com/ss.svg"
    },
    {
      "countryname": "Spain",
      "countrycode": "+34",
      "flagurl": "https://flagcdn.com/es.svg"
    },
    {
      "countryname": "Sri Lanka",
      "countrycode": "+94",
      "flagurl": "https://flagcdn.com/lk.svg"
    },
    {
      "countryname": "Sudan",
      "countrycode": "+249",
      "flagurl": "https://flagcdn.com/sd.svg"
    },
    {
      "countryname": "Suriname",
      "countrycode": "+597",
      "flagurl": "https://flagcdn.com/sr.svg"
    },
    {
      "countryname": "Sweden",
      "countrycode": "+46",
      "flagurl": "https://flagcdn.com/se.svg"
    },
    {
      "countryname": "Switzerland",
      "countrycode": "+41",
      "flagurl": "https://flagcdn.com/ch.svg"
    },
    {
      "countryname": "Syria",
      "countrycode": "+963",
      "flagurl": "https://flagcdn.com/sy.svg"
    },
    {
      "countryname": "Taiwan",
      "countrycode": "+886",
      "flagurl": "https://flagcdn.com/tw.svg"
    },
    {
      "countryname": "Tajikistan",
      "countrycode": "+992",
      "flagurl": "https://flagcdn.com/tj.svg"
    },
    {
      "countryname": "Tanzania",
      "countrycode": "+255",
      "flagurl": "https://flagcdn.com/tz.svg"
    },
    {
      "countryname": "Thailand",
      "countrycode": "+66",
      "flagurl": "https://flagcdn.com/th.svg"
    },
    {
      "countryname": "Togo",
      "countrycode": "+228",
      "flagurl": "https://flagcdn.com/tg.svg"
    },
    {
      "countryname": "Tonga",
      "countrycode": "+676",
      "flagurl": "https://flagcdn.com/to.svg"
    },
    {
      "countryname": "Trinidad and Tobago",
      "countrycode": "+1868",
      "flagurl": "https://flagcdn.com/tt.svg"
    },
    {
      "countryname": "Tunisia",
      "countrycode": "+216",
      "flagurl": "https://flagcdn.com/tn.svg"
    },
    {
      "countryname": "Turkey",
      "countrycode": "+90",
      "flagurl": "https://flagcdn.com/tr.svg"
    },
    {
      "countryname": "Turkmenistan",
      "countrycode": "+993",
      "flagurl": "https://flagcdn.com/tm.svg"
    },
    {
      "countryname": "Tuvalu",
      "countrycode": "+688",
      "flagurl": "https://flagcdn.com/tv.svg"
    },
    {
      "countryname": "Uganda",
      "countrycode": "+256",
      "flagurl": "https://flagcdn.com/ug.svg"
    },
    {
      "countryname": "Ukraine",
      "countrycode": "+380",
      "flagurl": "https://flagcdn.com/ua.svg"
    },
    {
      "countryname": "United Arab Emirates",
      "countrycode": "+971",
      "flagurl": "https://flagcdn.com/ae.svg"
    },
    {
      "countryname": "United Kingdom",
      "countrycode": "+44",
      "flagurl": "https://flagcdn.com/gb.svg"
    },
    {
      "countryname": "United States",
      "countrycode": "+1201",
      "flagurl": "https://flagcdn.com/us.svg"
    },
    {
      "countryname": "Uruguay",
      "countrycode": "+598",
      "flagurl": "https://flagcdn.com/uy.svg"
    },
    {
      "countryname": "Uzbekistan",
      "countrycode": "+998",
      "flagurl": "https://flagcdn.com/uz.svg"
    },
    {
      "countryname": "Vanuatu",
      "countrycode": "+678",
      "flagurl": "https://flagcdn.com/vu.svg"
    },
    {
      "countryname": "Vatican City",
      "countrycode": "+3906698",
      "flagurl": "https://flagcdn.com/va.svg"
    },
    {
      "countryname": "Venezuela",
      "countrycode": "+58",
      "flagurl": "https://flagcdn.com/ve.svg"
    },
    {
      "countryname": "Vietnam",
      "countrycode": "+84",
      "flagurl": "https://flagcdn.com/vn.svg"
    },
    {
      "countryname": "Yemen",
      "countrycode": "+967",
      "flagurl": "https://flagcdn.com/ye.svg"
    },
    {
      "countryname": "Zambia",
      "countrycode": "+260",
      "flagurl": "https://flagcdn.com/zm.svg"
    },
    {
      "countryname": "Zimbabwe",
      "countrycode": "+263",
      "flagurl": "https://flagcdn.com/zw.svg"
    }
  ];