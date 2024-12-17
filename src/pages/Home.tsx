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

const HomePage = () => {
  return (
    <div className="md:pt-52 items-center ml-5 ">
      <div className="flex items-center flex-col w-[90%] m-auto md:flex-row">
        <div className="my-44 space-y-5 md:w-[70%]">
          <div className="space-y-2">
            <h1 className="flex text-5xl font-bold">
              Hosam Reda
              <span className="ml-2">
                <SiHandshakeProtocol />
              </span>
            </h1>
            <p>________FrontEnd Developer</p>
          </div>
          <div>
            <p className="max-w-[90%] opacity-50">
              My beginning was in the field of front-end, since the beginning of
              the <br/> youth stage and I love programming a lot and have a great
              passion for it and learn it very quickly, and since 2021...
            </p>
          </div>
          <div className="flex items-center  space-x-4  ">
            <Button className="rounded-xl ">
              <FaTelegramPlane /> Say Hello
            </Button>
            <Button className="rounded-xl bg-[rgb(37,211,102)] text-white">
              <FaWhatsapp /> WhatsApp
            </Button>

            <div className="flex text-2xl space-x-4 ml-10 ">
              <div className="pr-2">
                <Link to="https://www.facebook.com/profile.php?id=100026338921350&locale=ar_AR">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="pr-2">
                <Link to="https://www.linkedin.com/in/hosam-reda-5758282a2">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="pr-2">
                <Link to="https://github.com/Hosamdiv">
                  <RiGithubLine />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
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
    </div>
  );
};

export default HomePage;
