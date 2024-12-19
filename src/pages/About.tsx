import { Button } from "../components/ui/button";
import { TbFileCv } from "react-icons/tb";

const AboutPage = () => {
  return (
    <div className="w-[90%] border-t-2 pt-20 mb-20 m-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="opacity-50">My introduction</p>
      </div>

      <div className="flex flex-col border md:flex-row justify-between mx-10 rounded-xl px-10 py-5">
        <div className="flex justify-center m-auto">
          <img
            src="/my image/name.jpeg"
            width={300}
            className="rounded-3xl mb-10"
            alt="MyName"
          />
        </div>

        <div className="mt-5">
          <p className="text-sm opacity-60">
            My beginning was in the field of front-end, since the beginning of
            the youth stage and I love programming a lot and have a great
            passion for it and learn it very quickly, and since 2021...
          </p>
          <Button
            className="px-5 py-7 rounded-2xl mt-5 text-xl
               flex items-center space-x-2"
          >
            <span>Download CV</span>
            <div className="w-8 h-8 flex items-center justify-center">
              <TbFileCv className="w-full h-full" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
