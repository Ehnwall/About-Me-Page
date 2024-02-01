import React from "react";
import Style from "./Footer.module.css";
import img from "../../assets/edited_me.jpg";
function Footer() {
    return (
        <footer className={Style.footer}>
            <figure>
                <img className={Style.footpic} src={img} alt="animated pic of me" />
            </figure>
            <div>
                <h2 className={Style.greeting}>Lets talk!</h2>
                <a className={Style.mailLink} href="mailto:dennis.ehnwall@gmail.com">
                    dennis.ehnwall@gmail.com
                </a>
            </div>
            <ul className={Style.socialList}>
                <li className={Style.socialLink}>
                    <a href="https://github.com/Ehnwall" target="_blank">
                        <iconify-icon icon="mdi:github"></iconify-icon>
                    </a>
                </li>
                <li className={Style.socialLink}>
                    <a href="https://www.instagram.com/dennisehnwall/" target="_blank">
                        <iconify-icon icon="mingcute:ins-line"></iconify-icon>
                    </a>
                </li>
                <li className={Style.socialLink}>
                    <a href="https://www.linkedin.com/in/dennis-ehnwall-09524b29b/" target="_blank">
                        <iconify-icon icon="mdi:linkedin"></iconify-icon>
                    </a>
                </li>
            </ul>
            <div className={Style.copy}>
                <p>© Dennis Ehnwall</p>
                <a href="https://www.instagram.com/itsbenihana/" target="_blank">
                    Pictures by: Ben-Ihana
                </a>
            </div>
        </footer>
    );
}

export default Footer;
