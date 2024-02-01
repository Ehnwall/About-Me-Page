// Importing necessary components and libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import Nav from "./Components/Nav/Nav";
import SkillPage from "./Pages/SkillPage";
import Footer from "./Components/Footer/Footer";

// Main component for the entire application
function App() {
    return (
        // Setting up React Router for navigation
        <Router>
            <Nav />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/skills" element={<SkillPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
