import { Button } from "../components/ui/button";
import { useState } from "react";
import { IoMdCloseCircleOutline, IoMdSunny } from "react-icons/io";
import { IoMenu, IoMoon } from "react-icons/io5";
import { useColorMode } from "../components/ui/color-mode";

interface INav {
  name: string;
  link: string;
}
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <header
      className={`flex m-auto justify-around items-center mt-5 
        sticky top-5 z-20 
    
        `}
    >
      <Button
        variant="outline"
        onClick={() => setShowModal(!showModal)}
        className=" bg-[#353536] md:hidden border-2  "
      >
        <IoMenu />
      </Button>

      <div className="" />
      <nav
        className="filterNav p-5 rounded-full font-semibold hidden
       md:block sticky top-0 bg-white z-10"
      >
        <ul
          className={`flex items-center justify-center space-x-5 
          text-${colorMode === "light" ? "black" : "white"}

          `}
        >
          {navbar.map((item: INav) => (
            <li
              key={item.name}
              className="text-[16px] hover:text-[#5dbcfc]
               hover:text-[15px] transition-all duration-300 ease-in-out"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        onClick={toggleColorMode}
        variant="outline"
        className="w-12 border rounded-full text-white bg-[#13131b]
        hover:bg-[#262629] hover:border-1"
      >
        {colorMode === "light" ? <IoMoon /> : <IoMdSunny />}
      </Button>

      {/* modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-[#282830e8] z-20">
          <div>
            <ul
              className="w-[85%] mx-auto mt-[2rem]
        rounded-2xl bg-[#18181b] px-[2rem] py-[1rem]"
            >
              <li className="text-right mb-7">
                <Button
                  className="w-5 rounded-full bg-[#18181B]
                hover:bg-red-600
            hover:border-red-600 border-2"
                  variant="outline"
                  onClick={() => setShowModal(!showModal)}
                >
                  <IoMdCloseCircleOutline />
                </Button>
              </li>
              {navbar.map((item, idx) => (
                <li
                  key={item.name}
                  className={`border-b-none pb-4 pt-2 ${
                    idx === navbar.length - 1 ? "" : "border-b-2"
                  } hover:text-cyan-500 hover:text-xl transition-all duration-300 ease-in-out
          ${colorMode === "light" ? "text-white" : ""}
                  `}
                >
                  <a href={item.link} onClick={() => setShowModal(!showModal)}>
                    {item.name}
                  </a>
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
  { name: "Home", link: "#home-section" },
  { name: "Contact", link: "#contact-section" },
  { name: "Projects", link: "#projects-section" },
  { name: "Services", link: "#services-section" },
];
