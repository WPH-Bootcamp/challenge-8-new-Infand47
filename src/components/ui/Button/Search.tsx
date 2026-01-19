import React from "react";
import SeacrhIcon from "../../../assets/Search.svg";

interface SearchProps {
    children: string;
}

export const Search: React.FC<SearchProps> = ({ children}) => {
    return (
        <div className="hidden lg:flex lg:items-center bg-[#252B37] rounded-2xl w-60 h-11 lg:h-14 pl-3 border-2 border-slate-500">
            <img src={SeacrhIcon} alt="Search" className="top-4.5 w-5 h-5" />
            <input
                type="text"
                placeholder={children}
                className="rounded-2xl w-full h-full bg-[#252B37] left-0 pl-4 pr-4 focus:outline-none focus:ring-slate-500 text-white"
            />
        </div>
    );
};

export default Search;