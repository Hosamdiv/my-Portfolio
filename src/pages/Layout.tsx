import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import FooterPage from "./Footer";
import ContactForm from "./ContactForm";
import AddProjectsPage from "./AddProjects";
import { Button } from "../components/ui/button";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [showScroll, setShowScroll] = useState(false);
  let scrollTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      setShowScroll(window.scrollY > 300);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="up"></div>
      <NavBar />
      <Outlet />
      <AddProjectsPage />
      <ContactForm />
      <FooterPage />
      {showScroll && (
        <a href="#up">
          <Button className="scrollTop w-[2.5rem] bg-[rgba(25,118,210,0.85)] rounded-full fixed bottom-3 right-3 hover:bg-[rgba(25,118,210)]">
            <IoIosArrowUp />
          </Button>
        </a>
      )}
    </>
  );
};

export default RootLayout;
