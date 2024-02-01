import React from "react";
import Style from "./About.module.css";
function Images() {
    return (
        <div className={Style.images}>
            <figure className={Style.porttrait2}>
                <img className={Style.pic2} src="src/assets/skejt_me.jpg" alt="Me animated" />
            </figure>
        </div>
    );
}

export default Images;
