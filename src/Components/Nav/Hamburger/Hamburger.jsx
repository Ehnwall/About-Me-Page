import React from "react";
import { Link } from "react-router-dom";
import Style from "./Hamburger.module.css";

function Hamburger({ setOpen }) {
    return (
        <div className={Style.container}>
            <ul className={Style.wrapper}>
                <li className={Style.button} onClick={() => setOpen(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li className={Style.button} onClick={() => setOpen(false)}>
                    <Link to="/about">About</Link>
                </li>
                <li className={Style.button} onClick={() => setOpen(false)}>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className={Style.button} onClick={() => setOpen(false)}>
                    <Link to="/skills">Skills</Link>
                </li>
            </ul>
        </div>
    );
}

export default Hamburger;
