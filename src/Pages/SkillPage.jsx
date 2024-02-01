import React from "react";
import { listOfSKills } from "../Data/listOfSKills";
import SkillBox from "../Components/SkillBox/SkillBox";
import Style from "./SkillPage.module.css";
function SkillPage() {
    return (
        <div className={Style.container}>
            <h2 className="container-title">Skills</h2>
            <div className={Style.skillwrapper}>
                {listOfSKills.map((skill) => (
                    <SkillBox skillTitle={skill.type} skillItems={skill.skills} titleColor={skill.titleColor} />
                ))}
            </div>
        </div>
    );
}

export default SkillPage;
