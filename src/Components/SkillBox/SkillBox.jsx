import React from "react";
import Style from "./SkillBox.module.css";
function SkillBox({ titleColor, skillItems, skillTitle }) {
    return (
        <div>
            <h2 style={{ backgroundColor: titleColor }}>{skillTitle}</h2>
            <ul>
                {skillItems.map((skill) => (
                    <li className={Style.skills}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillBox;
