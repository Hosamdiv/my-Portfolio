import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { CiDesktopMouse2 } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiGithubLine } from "react-icons/ri";
import { SiHandshakeProtocol } from "react-icons/si";
import { useColorMode } from "../components/ui/color-mode";
import { motion } from "motion/react";
const HomePage = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`md:pt-5 mb-10  items-center ml-5  text-${
          colorMode === "light" ? "black" : ""
        }`}
      >
        <div className="flex items-center flex-col w-[90%] m-auto md:flex-row">
          <div className="my-44 space-y-5 md:w-[70%]">
            <div className="space-y-2">
              <h1 className={`flex text-5xl font-bold `}>
                Hosam Reda
                <span className="ml-2">
                  <SiHandshakeProtocol />
                </span>
              </h1>
              <p>________FrontEnd Developer</p>
            </div>
            <div>
              <p className={`max-w-[90%] opacity-80 `}>
                My beginning was in the field of front-end, since the beginning
                of the <br /> youth stage and I love programming a lot and have
                a great passion for it and learn it very quickly, and since
                2021...
              </p>
            </div>
            <div className="flex items-center  space-x-4  ">
              <Button
                borderColor={colorMode === "light" ? "#272729" : "white"}
                borderWidth="1px"
                variant="subtle"
                className="hover:bg-[#25d366] p-4 rounded-xl"
              >
                <FaTelegramPlane /> Say Hello
              </Button>

              <Button className={`p-4 rounded-xl bg-[#25d366] text-white`}>
                <FaWhatsapp /> WhatsApp
              </Button>

              {/* icon name */}
              <div className="flex text-2xl space-x-4 ml-10 ">
                <Link to="https://www.facebook.com/profile.php?id=100026338921350&locale=ar_AR">
                  <FaFacebookF />
                </Link>
                <Link to="https://www.linkedin.com/in/hosam-reda-5758282a2">
                  <FaLinkedinIn />
                </Link>
                <Link to="https://github.com/Hosamdiv">
                  <RiGithubLine />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <motion.img
              initial={{ opacity: 0, transform: "scale(0)" }}
              animate={{ opacity: 1, transform: "scale(0.9)" }}
              transition={{
                damping: 4,
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="classImage"
              src="/my image/name.jpeg"
              width={400}
              alt="my name"
            />
          </div>
        </div>
        <div>
          <button className="flex m-auto items-center w-fit text-1xl space-x-1 py-12">
            <CiDesktopMouse2 className="text-4xl" />
            Scroll down
            <IoIosArrowRoundDown className="text-3xl animate-bounce text-[rgb(37,211,102)]" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
