import { useState } from "react";
import { Button } from "../components/ui/button";
import CartProjects from "../components/components/cartProjects";

const AddProjectsPage = () => {
  const [activeButton, setActiveButton] = useState("");

  const buttons = [
    "All Projects",
    "HTML & CSS",
    "Javascript",
    "React & Tailwind",
    "React & Chakra",
  ];

  return (
    <main className="main-media w-[80%] m-auto mb-20 border-t-2 pt-20 flex gap-[2.64rem] items-start ">


      <section className="section-left flex flex-col gap-[10px]">
        {buttons.map((buttonLabel) => (
          <Button
            key={buttonLabel}
            variant="outline"
            className={` bg-[#24252e] capitalize transition duration-300
            opacity-70 hover:opacity-100 text-center
               w-[11rem] py-6 ${
                 activeButton === buttonLabel
                   ? "border-2 border-[#5dbcfc] opacity-100 font-semibold "
                   : ""
               }`}
            onClick={() => setActiveButton(buttonLabel)}
          >
            {buttonLabel}
          </Button>
        ))}
      </section>



      <section className="flex justify-center flex-row flex-wrap gap-5">
        <CartProjects />
        <CartProjects />
        <CartProjects />
        <CartProjects />
        <CartProjects />
      </section>
    </main>
  );
};

export default AddProjectsPage;
