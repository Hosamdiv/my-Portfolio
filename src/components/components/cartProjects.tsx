import { Card, Flex, Image } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { FaGithub, FaLink } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { useColorMode } from "../ui/color-mode";
interface ICart {
  title: string;
  imgPage: string;
  category: string;
}

const CartProjects = ({ title, imgPage, category }: ICart) => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root
      bg={colorMode === "light" ? "#e8fcfd" : ""}
      maxW="xs"
      overflow="hidden"
      className={` font-bold rounded-xl border-2 bg-[#0f0f11] 
     border-slate-900
      hover:border-2 hover:border-slate-900`}
       transition="all 0.5s ease-in-out"
      _hover={{
        transform: "rotate(6deg)",
      }}
    >
      <Image src={imgPage} alt="Green double couch with wooden legs" />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{category}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2" className="flex justify-between">
        <Flex className="space-x-5 text-2xl">
          <FaLink />
          <FaGithub />
        </Flex>
        <Button variant="ghost" className="text-[#5dbcfc]">
          More <RiShareForwardFill />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default CartProjects;
