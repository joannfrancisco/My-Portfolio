import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LayoutWithNavbar from "./components/LayoutWithNavbar";
import NotFound from "./components/NotFound";
import Intro from "./pages/Intro";
import ChooseProfile from "./pages/ChooseProfile";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* no navbar */}
        <Route path="/" element={<Intro />} />
        <Route path="/chooseprofile" element={<ChooseProfile />} />
        <Route path="*" element={<NotFound />} />

        {/* with navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/home" element={<ProfilePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
