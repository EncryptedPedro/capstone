import React from "react";
import logo from "../icons_assets/Logo.svg";

const Header = () => {
    return (
        <header>
            <h1><img src={logo} alt="Logo" /> </h1>
        </header>
    );
}

export default Header;