import { Card, Flex, Image } from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useColorMode } from "../ui/color-mode";
import { IMyProjects } from "../../pages/AddProjects";

const CartProjects = ({
  title,
  imgPath,
  description,
  link,
  linkGithub,
}: IMyProjects) => {
  const { colorMode } = useColorMode();

  return (
    <Card.Root
      bg={colorMode === "light" ? "#e8fcfd" : ""}
      maxW="xs"
      overflow="hidden"
      className={` font-bold rounded-xl border-2 bg-[#0f0f11] 
    border-slate-900
      hover:border-2 hover:border-slate-900`}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <Image src={imgPath} alt="Green double couch with wooden legs" />
      <Card.Body gap="2">
        <Card.Title textAlign={"center"}>{title}</Card.Title>
        <Card.Description textAlign={"center"}>{description}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2" className="flex justify-between">
        <Flex className="m-auto space-x-5 text-2xl">
          <a href={link} target="_blank">
            <FaLink />
          </a>
          <a href={linkGithub} target="_blank">
            <FaGithub />
          </a>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
};

export default CartProjects;
