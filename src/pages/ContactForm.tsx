import { Input, Textarea } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "../components/ui/button";

const styleInout_Area = {
  styles: `border w-[16rem] bg-[rgba(63,63,70,0.15)]
               border-[rgb(63,63,70)] py-2 px-4 ml-4 rounded
                transition duration-300 text-[1.1rem] outline-none
                 hover:border-[#2dd4bf]
                 focus:border-[#2dd4bf] text-[18px] `,
};

const ContactForm = () => {
  return (
    <section className="contact-us w-[80%]  m-auto my-24 pt-14 border-t-2">
      <h1 className="flex items-center text-4xl text-[#f4f4f5] mb-[2rem] font-semibold">
        <span className="mr-6 text-5xl">
          <FaEnvelope />
        </span>
        Contact us
      </h1>
      <p className="text-[#a1a1aa] leading-[1.65rem] mb-[2rem]">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex ">
        <form className="form-media w-full m-auto">
          <div className="flexbox flex items-center">
            <label htmlFor="email" className="text-[#a1a1aa] ">
              Email Address:
            </label>
            <Input
              id="email"
              className={styleInout_Area.styles}
              required
              type="email"
              name=""
            />
          </div>

          <div className="flex items-center my-[24px] w-full m-auto ">
            <label htmlFor="message" className="text-[#a1a1aa] ">
              Your message:
            </label>
            <Textarea
              id="message"
              required
              className={`${styleInout_Area.styles} text-8xl`}
              name=""
            ></Textarea>
          </div>
          <Button
            type="submit"
            className="submit border border-[#3f3f46] m-auto
             px-10 py-5 text-center font-semibold bg-[#24252e]
              hover:scale-[0.97]"
          >
            Submit
          </Button>
        </form>
        <div className="animation">sadasdasd</div>
      </div>
    </section>
  );
};

export default ContactForm;
