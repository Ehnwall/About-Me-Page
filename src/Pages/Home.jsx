import React from "react";
import About from "./AboutPage";
import Projects from "./ProjectPage";
import SkillPage from "./SkillPage";
import Style from "./Home.module.css";
function Home() {
    return (
        <div className={Style.HomeWrapper}>
            <About />
            <Projects />
            <SkillPage />
        </div>
    );
}

export default Home;
