import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import GalleryIndex from "./pages/GalleryIndex";
import GalleryAlbum from "./pages/GalleryAlbum";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<GalleryIndex />} />
          <Route path="gallery/:slug" element={<GalleryAlbum />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}