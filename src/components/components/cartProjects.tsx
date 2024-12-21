import { Card, Flex, Image } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { FaGithub, FaLink } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";

const CartProjects = () => {
  return (
    <Card.Root
      maxW="xs"
      overflow="hidden"
      className="hover:rotate-6 rounded-xl border-2 bg-[#0f0f11] 
     border-slate-900 transition-all duration-500 ease-in-out 
      hover:border-2 hover:border-slate-900"
    >
      <Image
        src="/public/1.jpg" 
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Landing Page1</Card.Title>
        <Card.Description>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2" className="flex justify-between">
        <Flex className="space-x-5 text-2xl">
          <FaLink />
          <FaGithub />
        </Flex>
        <Button variant="ghost" className="">
          More <RiShareForwardFill />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CartProjects;
