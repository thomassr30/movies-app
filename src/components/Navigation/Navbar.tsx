import "./Navbar.css";
import logoImg from "../../assets/movies.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

interface navItems {
  name: string;
  path: string;
}

export const Navbar = () => {
  const navItem: navItems[] = [{ name: "Inicio", path: "/" }];

  return (
    <nav className="absolute w-screen index bg-gradient-to-b from-black to-transparent h-16">
      <div className="flex justify-between mx-4">
        <div className="flex items-center w-1/2">
          <img src={logoImg} alt="" className="w-12 cursor-pointer" />
          <ul className="invisible lg:visible list-none p-5 flex">
            {navItem.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="invisible lg:visible flex items-center w-1/2 justify-end">
          <FaSearch className=" text-xl text-white cursor-pointer mr-5" />
        </div> */}
      </div>
    </nav>
  );
};
