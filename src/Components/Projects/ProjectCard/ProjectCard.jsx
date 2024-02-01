import React from "react";
import Style from "../ProjectCard/ProjectCard.module.css";
function ProjectCard({ name, link, liveDemo, picture, description }) {
    return (
        <div className={Style.wrapper}>
            <h2>{name.replace(/[-_]/g, " ")}</h2>
            <figure>
                <img
                    src="https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </figure>
            <p>{description}</p>
            <div className={Style.btnContainer}>
                <a className={Style.linkButton} href={link} target="_blank">
                    Link to code
                </a>
                <a className={Style.linkButton} href={liveDemo} target="_blank">
                    Live Demo
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
