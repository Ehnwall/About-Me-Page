import React from "react";
import Style from "./AboutPage.module.css";
import Information from "../Components/About/Information";
import Images from "../Components/About/Images";
function AboutPage() {
    return (
        <section className={Style.Wrapper}>
            <Information />
            <Images />
        </section>
    );
}

export default AboutPage;
