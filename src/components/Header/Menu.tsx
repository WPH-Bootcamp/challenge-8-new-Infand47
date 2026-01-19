import React from "react";
import MenuIcon from "../../assets/Menu.svg";
import Logo from "../../assets/LogoLg.svg";

interface MenuProps {
    children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
    return <>
    <img src={MenuIcon} alt="Menu" className="lg:hidden" />
    <div className="hidden lg:flex lg:items-center text-white">
        <img src={Logo} alt="Logo" className="lg:block" />
        <a href="#">Home</a>
        <a href="#">Favorite</a>
    </div>{children}</>
} 

export default Menu