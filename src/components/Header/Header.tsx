import Logo from "../../assets/LogoLg.svg";
import SearchIcon from "../../assets/Search.svg";
import Search from "../ui/Button/Search";
import Menu from "../../assets/Menu.svg";

const Header = () => {
  return (
    <header className=" justify-center fixed top-0 w-full bg-black/5 backdrop-blur-md z-50">
      <nav className="bg-black/5 backdrop-blur-md flex justify-between items-center gap-auto p-4 h-16 lg:h-21">
      <div className="flex items-center gap-10">
        <img src={Logo} alt="Logo" className="w-24 h-8 lg:w-32 lg:h-10" />
        <div className="hidden lg:flex item-center gap-20 font-regular text-white">
            <a href="">Home</a>
            <a href="">Favorite</a>
        </div>
        </div>
        <div className="flex items-center gap-6">
        <img
          src={SearchIcon}
          alt="Search"
          className="lg:hidden"
        />
        <img src={Menu} alt="Menu" className="lg:hidden" />
        </div>
        <Search>Search Movie</Search>
      </nav>
    </header>
  );
};

export default Header;
