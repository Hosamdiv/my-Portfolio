import { useState } from "react";
import { Button } from "../components/ui/button";
import CartProjects from "../components/components/cartProjects";
import { useColorMode } from "../components/ui/color-mode";
import { AnimatePresence, motion } from "motion/react";
export interface IMyProjects {
  title: string;
  category?: string;
  description: string;
  imgPath: string;
  link: string;
  linkGithub: string;
}

const myProjects: IMyProjects[] = [
  {
    title: " Project",
    category: "",
    description: "",
    imgPath: "/1.jpg",
    link: "",
    linkGithub: "",
  },

  {
    title: "Movies",
    category: "react",
    description: "Find your favorite movie with ease.",

    imgPath: "/movies.png",
    link: "https://my-movies-three-delta.vercel.app/",
    linkGithub: "https://github.com/Hosamdiv/my-movies",
  },
  {
    title: "Redux",
    category: "redux",
    description: "",
    imgPath: "/6.jpg",
    link: "",
    linkGithub: "",
  },
];

const AddProjectsPage = () => {
  const [activeButton, setActiveButton] = useState("All Projects");
  const [arr, setArr] = useState<IMyProjects[]>(myProjects);
  const { colorMode } = useColorMode();

  const buttons = [
    { label: "All Projects", category: "all" },
    { label: "React", category: "react" },
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
      id="projects-section"
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
            className={`button-left bg-[#24252e] capitalize transition duration-300 opacity-100 hover:opacity-100 text-center w-[10rem] py-5 hover:scale-[0.97] ${
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
      <AnimatePresence>
        <motion.section
          layout
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{
            damping: 1,
            type: "easeInOut",
            stiffness: 120,
          }}
          className="your-class-name flex justify-center flex-row flex-wrap gap-5
       flex-grow
      "
        >
          {arr.map((item) => (
            <CartProjects
              key={item.imgPath}
              description={item.description}
              imgPath={item.imgPath}
              title={item.title}
              link={item.link}
              linkGithub={item.linkGithub}
            />
          ))}
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default AddProjectsPage;
