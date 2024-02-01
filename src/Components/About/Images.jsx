import React from "react";
import Style from "./About.module.css";
import img from "../../assets/skejt_me.jpg";
function Images() {
    return (
        <div className={Style.images}>
            <figure className={Style.porttrait2}>
                <img className={Style.pic2} src={img} alt="Me animated" />
            </figure>
        </div>
    );
}

export default Images;
