import React from "react";
// import PlayIcon from "../../../assets/Play.svg";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="flex items-center gap-2 bg-red-600 px-6 py-2 rounded-full text-white">
      {children}
      {/* <img src={PlayIcon} alt="Play" className="w-4 h-4" /> */}
    </button>
  
  );
};

export default Button;
