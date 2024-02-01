import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Style from "./Projects.module.css";
function Projects() {
    const URL = "https://api.github.com/users/ehnwall/repos";
    const filterKeywords = ["Memory-Game", "Parmar-Poesi", "Product-preview"];
    const [data, setData] = useState([]);

    useEffect(() => {
        // useEffect används för att hantera sidoeffekter

        fetch(URL) // Gör ett HTTP GET-anrop till den angivna URL:en
            .then((resp) => resp.json())
            // Hanterar svaret från servern genom att omvandla det till JSON-format
            .then((data) => {
                setData(data); // Uppdaterar komponentens state med den hämtade datan
                console.log(data); //loggar egenskaper
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
