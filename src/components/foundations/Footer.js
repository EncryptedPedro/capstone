import React from "react";
import logo from "../../icons_assets/Logo.svg";

const Footer = () => {
    return (
        <footer>
            <p><img src={logo} alt="Logo" /></p>
            <span> © 2024 Little Lemon</span>
        </footer>
    );
}

export default Footer;