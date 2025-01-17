import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Sidebar from "./Sidebar";
import SectionHeader from "./SectionHeader";
import PageNotFound from "../PageNotFound";

// Modal Components
import ChooseCategoryModal from "../modal/ChooseCategoryModal";
import TweetFormModal from "../modal/TweetFormModal";
// import VideoFormModal from "../modal/VideoFormModal";
import ImageFormModal from "../modal/ImageFormModal";
import LinkFormModal from "../modal/LinkFormModal";
import NoteFormModal from "../modal/NoteFormModal";
import TagFormModal from "../modal/TagFormModal";

// Section Components
import NoteSection from "@/sections/NoteSection";
import BookmarkSection from "@/sections/BookmarkSection";
import EditProfileSection from "@/sections/EditProfileSection";
import ImageSection from "@/sections/ImageSection";
import LinkSection from "@/sections/LinkSection";
import TagSection from "@/sections/TagSection";
// import VideoSection from "@/sections/VideoSection";
import TweetSection from "@/sections/TweetSection";
import { routeHeaders } from "@/constants";
import AllContentSection from "@/sections/AllContentSection";
import { useContentContext } from "@/context/ContentContext";
import SelectCardsSection from "@/sections/SelectCardsSection";
import useGroupContent from "@/hooks/groupContent";
import { getVerifiedToken } from "@/lib/cookieService";
import { toast } from "@/hooks/use-toast";
import ChatBotButton from "../ui/ChatBotButton";
import ChatBotModal from "../modal/ChatBotModal";

const UserRoutes = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);
  const [cardIds, setCardIds] = useState<string[]>([]);
  const { groupContent} = useGroupContent();
  const { loadContentData } = useContentContext();
  const location = useLocation();

  const currentPath = location.pathname;
  const { title, description, isBtnShow, isConfirmBtn} = routeHeaders[
    currentPath
  ] || {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
    isBtnShow: false,
    isConfirmBtn: false,
  };

  async function handleConfirmSelectionBtn() {
    const token = getVerifiedToken();
    if (!token) {
      toast({
        title: "user is unauthenticated or unauthorized",
      });
      return;
    }
    await groupContent(cardIds, token);
  }

  useEffect(() => {
    loadContentData();
  }, []);


  const toggleSidebar = (val: boolean) => setIsSideBarOpen(val);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  function handleCardIds(val: string[]) {
    setCardIds(val);
  }
  
  return (
    <>
      {/* Sidebar of dashboard*/}
      <Sidebar
        className={`fixed left-0 top-0 h-full transition-all duration-300  ${
          isSideBarOpen ? "sm:w-60 w-full z-[999]" : "w-20"
        }`}
        OnSideBarOpen={toggleSidebar}
        isSideBarOpen={isSideBarOpen}
      />

      {/* Main Content box*/}
      <div
        className={`transition-all duration-300 relative flex-grow overflow-y-auto hide-scrollbar ${
          isSideBarOpen ? "sm:ml-60" : "ml-20"
        }`}
      >
        {/* Page Header which is fixeed at top*/}
        <AnimatePresence>
          <SectionHeader
            title={title}
            key={currentPath}
            description={description}
            isSideBarOpen={isSideBarOpen}
            isBtnShow={isBtnShow}
            isConfirmBtn={isConfirmBtn}
            onClickBtn={toggleModal}
            onClickConfirmBtn={handleConfirmSelectionBtn}
          />
        </AnimatePresence>

        {/* all Routes start from /user */}
        <section className="h-full mt-32 lg:mt-16 scrollbar-meteor ">
          <Routes location={location}>
            {/* Section of user*/}
            <Route path="/all-content" element={<AllContentSection />} />
            <Route path="/note-box" element={<NoteSection />} />
            <Route path="/tweet-box" element={<TweetSection />} />
            <Route path="/image-box" element={<ImageSection />} />
            {/* <Route path="/video-box" element={<VideoSection />} /> */}
            <Route path="/bookmark-box" element={<BookmarkSection />} />
            <Route path="/tag-box" element={<TagSection />} />
            <Route path="/link-box" element={<LinkSection />} />
            <Route path="/edit-profile" element={<EditProfileSection />} />
            <Route
              path="/select-cards"
              element={<SelectCardsSection onCardsSelect={handleCardIds} />}
            />

            {/* Modal Routes when user select a category */}
            <Route path="/add-content/tweet" element={<TweetFormModal />} />
            <Route path="/add-content/image" element={<ImageFormModal />} />
            <Route path="/add-content/link" element={<LinkFormModal />} />
            <Route path="/add-content/note" element={<NoteFormModal />} />
            <Route path="/add-content/tag" element={<TagFormModal />} />

            {/* Catch-All Route page not found*/}
            <Route path="/add-content/*" element={<PageNotFound />} />
          </Routes>

          {/* Modal for choosing the catg. */}
          {isModalOpen && (
            <ChooseCategoryModal isOpen={isModalOpen} onClose={toggleModal} />
          )}
          <div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
            <ChatBotButton onClickBtn={() => setIsChatModalOpen(!isChatModalOpen)}/>
          </div>
          {
            isChatModalOpen && (
              <ChatBotModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(!isChatModalOpen)}/>
            )
          }
        </section>
      </div>
    </>
  );
};

export default UserRoutes;
