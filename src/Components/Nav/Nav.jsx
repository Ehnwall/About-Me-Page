import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ToggleTheme, isDarkmode } from "../../Store/themeSlice";
import { useEffect } from "react";
import Hamburger from "./Hamburger/Hamburger";

function Nav() {
    // State to manage the visibility of the hamburger menu
    const [isOpen, setIsOpen] = useState(false);

    // Redux dispatch function for theme toggling
    const dispatch = useDispatch();

    // Selects the current theme mode (dark or light) from the Redux store
    const darkMode = useSelector(isDarkmode);

    // Function to toggle the visibility of the hamburger menu
    const hamburger = () => {
        setIsOpen(!isOpen);
    };
    // Function to toggle between dark and light themes
    const toggleThemeHandler = () => {
        dispatch(ToggleTheme());
    };

    // Update the HTML element attribute based on the darkMode state
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    // Render the navigation bar component
    return (
        <nav>
            <ul className={Style.NavList}>
                <li className={Style.NavBtn}>
                    <Link to="/">Home</Link>
                </li>
                <li className={Style.NavBtn}>
                    <Link to="/about">About</Link>
                </li>
                <li className={Style.NavBtn}>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className={Style.NavBtn}>
                    <Link to="/skills">Skills</Link>
                </li>
            </ul>
            <button className={Style.darkMode} onClick={toggleThemeHandler}>
                {darkMode ? (
                    <iconify-icon icon="line-md:moon-to-sunny-outline-loop-transition"></iconify-icon>
                ) : (
                    <iconify-icon icon="line-md:sunny-outline-to-moon-loop-transition"></iconify-icon>
                )}
            </button>
            <button className={Style.hamburger} onClick={hamburger}>
                {isOpen ? (
                    <iconify-icon icon="line-md:menu-to-close-transition"></iconify-icon>
                ) : (
                    <iconify-icon icon="line-md:close-to-menu-transition"></iconify-icon>
                )}
            </button>
            {isOpen && <Hamburger setOpen={setIsOpen} />}
        </nav>
    );
}

export default Nav;
