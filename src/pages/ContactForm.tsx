import { Input, Textarea } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { useColorMode } from "../components/ui/color-mode";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../done/Animation - (2).json";
import contactAnimation from "../done/Animation - (3).json";
const styleInout_Area = {
  styles: `border w-[16rem] bg-[rgba(63,63,70,0.15)]
               border-[rgb(63,63,70)] py-2 px-4 ml-4 rounded
                transition duration-300 text-[1.1rem] outline-none
                 hover:border-[#2dd4bf]
                 focus:border-[#2dd4bf] text-[18px] `,
};

const ContactForm = () => {
  const { colorMode } = useColorMode();
  const [state, handleSubmit] = useForm("mpwwavqz");

  // if (state.submitting) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <section
      className={`contact-us w-[80%]  m-auto my-10 pt-14 border-t-2

    `}
    >
      <h1
        className={`flex items-center text-4xl text-[#f4f4f5] mb-[2rem] font-semibold
      
          ${colorMode === "light" ? "text-black" : "text-[#f4f4f5]"}
      `}
      >
        <span className="mr-6 text-5xl">
          <FaEnvelope />
        </span>
        Contact us
      </h1>
      <p
        className={`text-[#2e2e35] leading-[1.65rem]
       ${colorMode === "light" ? "text-black" : "text-[#a1a1af]"}
        `}
      >
        Contact us for more information and Get notified when I publish
        something new.
      </p>



      <div className="flex ">
        <form onSubmit={handleSubmit}
         className=" form-media w-full m-auto">
          <div className="flexbox flex items-center">
            <label
              htmlFor="email"
              className={`text-[#2e2e35] 
              
      ${colorMode === "light" ? "text-black" : "text-[#a1a1af]"}
              `}
            >
              Email Address:
            </label>
            <Input
              id="email"
              className={styleInout_Area.styles}
              required
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex items-center my-[20px] w-full m-auto ">
            <label
              htmlFor="message"
              className={`text-[#2e2e35] 
              ${colorMode === "light" ? "text-black" : "text-[#a1a1af]"}
                    `}
            >
              Your message:
            </label>
            <Textarea
              id="message"
              required
              className={`${styleInout_Area.styles} text-2xl`}
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <Button
            _hover={{
              transform: "scale(0.97)",
              transition: "transform 0.2s ease-in-out",
            }}
            borderColor={
              colorMode === "light" ? "text-black" : "text-[#f4f4f5]"
            }
            color={colorMode === "light" ? "black" : "white"}
            type="submit"
            disabled={state.submitting}
            className="submit border border-[#3f3f46] m-auto
            px-10 py-5 text-center font-semibold bg-[#25d366]
              "
            loading={state.submitting}
          >
            Submit
          </Button>
          {state.succeeded && (
            <p className="flex items-center mt-5">
              <Lottie
                loop={false}
                style={{
                  height: 40,
                  marginRight: 10,
                }}
                animationData={doneAnimation}
              />
              Your message has sent successfully
            </p>
          )}
        </form>


        <div className="animation">
          <Lottie
          className="h-100  pb-4"
            
            animationData={contactAnimation}
          />
        </div>
      </div>


    </section>
  );
};

export default ContactForm;
