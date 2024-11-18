import React from "react";
import Sidebar from "./Sidebar";
import NoteSection from "@/sections/NoteSection";
import DocumentSection from "@/sections/DocumentSection";
import BookmarkSection from "@/sections/BookmarkSection";
import EditProfileSection from "@/sections/EditProfileSection";
import ImageSection from "@/sections/ImageSection";
import LinkSection from "@/sections/LinkSection";
import TagSection from "@/sections/TagSection";
import VideoSection from "@/sections/VideoSection";
import { Routes, Route } from "react-router-dom";
import UnauthenticatedPage from "../UnauthenticatedPage";
import PageNotFound from "../PageNotFound";

const UserRoutes = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState<boolean>(false);
  function handleSideBar(val: boolean) {
    setIsSideBarOpen(val);
  }

  return (
    <>
      <Sidebar
        className={`fixed left-0 top-0 h-full transition-all duration-300 ${
          isSideBarOpen ? "sm:w-60 w-full" : "w-20"
        }`}
        OnSideBarOpen={handleSideBar}
        isSideBarOpen={isSideBarOpen}
      />

      <section
        className={`transition-all duration-300 ${
          isSideBarOpen ? "sm:ml-60" : "ml-20"
        } flex-grow h-full overflow-y-auto scrollbar-custom`}
      >
        <Routes location={location}>
          <Route path="/note-box" element={<NoteSection />} />
          <Route path="/doc-box" element={<DocumentSection />} />
          <Route path="/image-box" element={<ImageSection />} />
          <Route path="/video-box" element={<VideoSection />} />
          <Route path="/bookmark-box" element={<BookmarkSection />} />
          <Route path="/tag-box" element={<TagSection />} />
          <Route path="/link-box" element={<LinkSection />} />
          <Route path="/edit-profile" element={<EditProfileSection />} />
          <Route path={"/*"} element={<PageNotFound/>}/>
        </Routes>
      </section>
    </>
  );
};

export default UserRoutes;
