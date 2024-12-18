import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

interface INav {
  name: string;
  link: string;
}
const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex m-auto justify-around items-center mt-5 sticky top-5 z-20">
      <Button
        variant="outline"
        onClick={() => setShowModal(true)}
        className=" bg-[#18181B] md:hidden block hover:border-5
            hover:border-lime-600 hover:bg-lime-700"
      >
        <IoMenu />
      </Button>
      <div className="" />
      <nav className="filterNav p-5 rounded-full hidden md:block sticky top-0 bg-white z-10">
        <ul className="flex items-center justify-center space-x-5">
          {navbar.map((item: INav) => (
            <li
              key={item.name}
              className="hover:text-cyan-500 transition-all duration-300 ease-in-out"
            >
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        variant="outline"
        className="w-12 border rounded-full bg-[#18181B] hover:bg-[#262629] hover:border-1 hover:border-yellow-500"
      >
        <MdOutlineDarkMode />
      </Button>

      {/* modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-[#282830e8] z-20">
          <div>
            <ul
              className="w-[85%] mx-auto mt-[2rem]
        rounded-2xl bg-[#18181b] px-[2rem] py-[1rem]"
            >
              <li className="text-right mb-5">
                <Button
                  className="w-5 rounded-full bg-[#18181B] hover:bg-red-600 hover:border-5
            hover:border-red-600"
                  variant="outline"
                  onClick={() => setShowModal(false)}
                >
                  <IoMdCloseCircleOutline />
                </Button>
              </li>
              {navbar.map((item, idx) => (
                <li
                  key={item.name}
                  className={`border-b-none pb-4 pt-2 ${
                    idx === navbar.length - 1 ? "" : "border-b-2"
                  } hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out`}
                >
                  <NavLink to={item.link}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

const navbar = [
  { name: "About", link: "/" },
  { name: "Skills", link: "/" },
  { name: "Services", link: "/" },
  { name: "Portfolio", link: "/" },
];
