import { NavLink } from "react-router-dom";
import { useColorMode } from "../components/ui/color-mode";

const LinkStyle = {
  styles: `text-[15px] transition-all duration-300 hover:text-[#5dbcfc]
         hover:text-[1rem] hover:font-medium`,
};

const FooterPage = () => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`border-t border-[#a1a1aa]

    `}
    >
      <footer
        className={`w-[80%] m-auto flex justify-between py-[1.9rem]
        text-${colorMode === "light" ? "black" : "white"}
        `}
      >
        <ul className="flex gap-[1rem] m-auto font-medium">
          <li className={`text-${colorMode === "light" ? "" : "white"}`}>
            <NavLink className={LinkStyle.styles} to="">
              About
            </NavLink>
          </li>
          <li className={`text-${colorMode === "light" ? "" : "white"}`}>
            <NavLink className={LinkStyle.styles} to="">
              Projects
            </NavLink>
          </li>
          <li className={`text-${colorMode === "light" ? "" : "white"}`}>
            <NavLink className={LinkStyle.styles} to="">
              Speaking
            </NavLink>
          </li>
          <li className={`text-${colorMode === "light" ? "" : "white"}`}>
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
