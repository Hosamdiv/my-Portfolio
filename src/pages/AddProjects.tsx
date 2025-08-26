import CartProjects from "../components/components/cartProjects";

export interface IMyProjects {
  title: string;
  description: string;
  imgPath: string;
  link: string;
  linkGithub: string;
}

const myProjects: IMyProjects[] = [
  {
    title: "E-commerce",
    description: "An educational e-commerce project.",
    imgPath: "/e-commerce.png",
    link: "https://educational-platform-rose.vercel.app/",
    linkGithub: "https://github.com/Hosamdiv/Educational-platform",
  },
  {
    title: "Movies",
    description: "Find your favorite movie with ease.",
    imgPath: "/movies.png",
    link: "https://my-movies-three-delta.vercel.app/",
    linkGithub: "https://github.com/Hosamdiv/my-movies",
  },

];

const AddProjectsPage = () => {
  return (
    <main
      id="projects-section"
      className="w-[85%] m-auto mb-20 border-t-2 pt-10"
    >
      {/* عنوان */}
      <h1 className="text-center pb-10 text-3xl font-bold">
        My Projects
      </h1>

      {/* Projects Grid */}
      <div className="
      grid 
      gap-8
      sm:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      justify-items-center
    ">
        {myProjects.map((item, index) => (
          <CartProjects
            key={index}
            description={item.description}
            imgPath={item.imgPath}
            link={item.link}
            linkGithub={item.linkGithub}
            title={item.title}
          />
        ))}
      </div>
    </main>
  );
};

export default AddProjectsPage;
