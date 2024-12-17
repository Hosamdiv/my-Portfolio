import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 h-24 z-10">
      <div className="md:flex justify-around items-center py-4 md:px-10 px-7 ">
        <div className="text-2xl font-bold cursor-pointer font-[Poppins]">
          <img src="/my image/name.jpeg" width={60} className="rounded-[50%]" alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer
        md:hidden
        "
        >
          {open ? <CiMenuFries /> : <IoMdClose />}
        </div>
        <ul
          className={`md:flex md:items-center 
         md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]
          left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
         duration-500 ease-in
        ${open ? "top-20 opacity-100 bg-white text-black" : "top-[-490px] md:opacity-100 opacity-0"}
          
         `}
        >
          {nav.map((item) => (
            <li key={item.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink to={item.link}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

const nav = [
  { name: "Home", link: "/" },
  { name: "About", link: "/" },
  { name: "Skills", link: "/" },
  { name: "Services", link: "/" },
  { name: "Portfolio", link: "/" },
];
