import React from "react";
import Projects from "../Components/Projects/Projects";
import Style from "./ProjectPage.module.css";
function ProjectPage() {
    return (
        <div className={Style.wrapper}>
            <Projects />
        </div>
    );
}

export default ProjectPage;
