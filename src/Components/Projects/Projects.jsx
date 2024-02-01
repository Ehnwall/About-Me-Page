import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Style from "./Projects.module.css";
function Projects() {
    const URL = "https://api.github.com/users/ehnwall/repos";
    const filterKeywords = ["Memory-Game", "Parmar-Poesi", "Product-preview"];
    const [data, setData] = useState([]);

    useEffect(() => {
        // useEffect to handle sideeffects

        fetch(URL) // make a HTTP GET-call to the assigned URL:
            .then((resp) => resp.json())
            // Handles the answer from the server by converting it JSON-format
            .then((data) => {
                setData(data); // Updates the component's state with the fetched data
                console.log(data); //log properties
            });
    }, []);

    return (
        <>
            <h2 className="container-title">Projects</h2>
            <div className={Style.container}>
                {data
                    .filter((project) => {
                        // Check if any filter keyword is present in the name or description
                        return filterKeywords.some((keyword) => project.name.includes(keyword));
                    })
                    .map((project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            link={project.html_url}
                            liveDemo={project.homepage}
                            picture={project.picture}
                        />
                    ))}
            </div>
        </>
    );
}

export default Projects;
