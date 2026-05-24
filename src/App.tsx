import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LessonPage from "./pages/LessonPage";
import Playground from "./pages/Playground";
import { fetchContentUpdates } from "./services/contentUpdater";

export default function App() {
  useEffect(() => {
    fetchContentUpdates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn/:lang" element={<LessonPage />} />
          <Route path="/learn/:lang/:chapterId/:lessonId" element={<LessonPage />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </main>
    </div>
  );
}
