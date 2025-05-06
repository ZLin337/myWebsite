import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import ProjectsLayout from "./pages/projects/ProjectsLayout";
import ProjectsOverview from "./pages/projects/ProjectsOverview";
import PetRecogniser from "./pages/projects/PetRecogniser";
import EnglishLearningSystem from "./pages/projects/EnglishLearningSystem";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsLayout />}>
            <Route index element={<ProjectsOverview />} />
            <Route path="pet-recogniser" element={<PetRecogniser />} />
            <Route path="english-learning-system" element={<EnglishLearningSystem />} />
          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>

  );
}
