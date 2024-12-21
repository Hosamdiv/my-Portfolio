import { NavLink } from "react-router-dom";

const LinkStyle = {
  styles: `text-[15px] transition-all duration-300 hover:text-[#5dbcfc]
         hover:text-[1rem] hover:font-medium`,
};

const FooterPage = () => {
  return (
    <div className="border-t border-[#a1a1aa]">
<footer className="w-[80%] m-auto flex justify-between py-[1.9rem]">
        <ul className="flex gap-[1rem] m-auto">
          <li className="text-[#a1a1aa]">
            <NavLink className={LinkStyle.styles} to="">
              About
            </NavLink>
          </li>
          <li className="text-[#a1a1aa]">
            <NavLink className={LinkStyle.styles} to="">
              Projects
            </NavLink>
          </li>
          <li className="text-[#a1a1aa] ">
            <NavLink className={LinkStyle.styles} to="">
              Speaking
            </NavLink>
          </li>
          <li className="text-[#a1a1aa] ">
            <NavLink className={LinkStyle.styles} to="">
              Uses
            </NavLink>
          </li>
        </ul>

        <p className="m-auto">© 2023 Spencer Sharp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FooterPage;
