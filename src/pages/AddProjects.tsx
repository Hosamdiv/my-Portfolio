import { useState } from "react";
import { Button } from "../components/ui/button";
import CartProjects from "../components/components/cartProjects";
import { useColorMode } from "../components/ui/color-mode";

interface IMyProjects {
  projectTitle: string;
  category: string;
  imgPath: string;
}

const myProjects: IMyProjects[] = [
  { projectTitle: "All Project", category: "all", imgPath: "/public/1.jpg" },
  { projectTitle: "HTML", category: "html-css", imgPath: "/public/3.jpg" },
  {
    projectTitle: "Javascript",
    category: "javascript",
    imgPath: "/public/4.jpg",
  },

  {
    projectTitle: "React",
    category: "react",
    imgPath: "/public/5.jpg",
  },
  { projectTitle: "Redux", category: "redux", imgPath: "/public/6.jpg" },
];

const AddProjectsPage = () => {
  const [activeButton, setActiveButton] = useState("All Projects");
  const [arr, setArr] = useState<IMyProjects[]>(myProjects);
  const { colorMode } = useColorMode();

  const buttons = [
    { label: "All Projects", category: "all" },
    { label: "HTML & CSS", category: "html-css" },
    { label: "Javascript", category: "javascript" },
    { label: "React & Tailwind", category: "react" },
    { label: "React & Redux", category: "redux" },
  ];

  const handleFilter = (category: string) => {
    setActiveButton(
      buttons.find((button) => button.category === category)?.label || ""
    );
    setArr(
      category === "all"
        ? myProjects
        : myProjects.filter((project) => project.category === category)
    );
  };

  return (
    <main
      className={`main-media w-[80%] m-auto mb-20 border-t-2 pt-20
       flex gap-[2.64rem] items-start 
       `}
    >
      <section className="section-left flex flex-col gap-[10px]">
        {buttons.map(({ label, category }) => (
          <Button
            bg={colorMode === "light" ? "#99cccc" : "	#333333"}
            key={label}
            variant="outline"
            className={`bg-[#24252e] capitalize transition duration-300 opacity-100 hover:opacity-100 text-center w-[11rem] py-6 hover:scale-[0.97] ${
              activeButton === label
                ? "border-2 border-[#5dbcfc] opacity-100 font-semibold"
                : ""
            }
                text-${colorMode === "light" ? "black" : "white"}
            `}
            onClick={() => handleFilter(category)}
          >
            {label}
          </Button>
        ))}
      </section>

      <section
        className="flex justify-center flex-row flex-wrap gap-5
       flex-grow
      "
      >
        {arr.map((item) => (
          <CartProjects
            key={item.imgPath}
            imgPage={item.imgPath}
            title={item.projectTitle}
            category={item.category}
          />
        ))}
      </section>
    </main>
  );
};

export default AddProjectsPage;
