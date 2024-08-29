import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaEye } from "react-icons/fa";

const pinkColor = "#EE046C"; // Pink color for icons and buttons
const yellowHover = "#FCAC0C"; // Yellow hover effect color

export const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  githubLink,
}) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
    p={4}
    mb={6}
    bg="white"
    color="#3E3E3E"
    _hover={{ boxShadow: "lg" }}
    transition="box-shadow 0.2s"
  >
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image
        src={image}
        alt={`${title} screenshot`}
        borderRadius="md"
        boxSize="300px"
        objectFit="cover"
        mb={{ base: 4, md: 0 }}
      />
      <Box flex="1" ml={{ base: 0, md: 6 }} mt={{ base: 4, md: 0 }}>
        <Heading size="lg" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        <Flex wrap="wrap" mt={2}>
          {techStack.map((tech, index) => (
            <Box key={index} mr={2} mb={2}>
              <Icon as={tech.icon} w={6} h={6} color={pinkColor} />
            </Box>
          ))}
        </Flex>
        <Flex mt={4} justifyContent={{ base: "center", md: "flex-start" }}>
          <Button
            as="a"
            href={liveLink}
            target="_blank"
            leftIcon={<FaEye />}
            colorScheme="gray"
            variant="solid"
            color={pinkColor}
            borderColor={pinkColor}
            _hover={{ bg: yellowHover, color: "white" }}
            mr={2}
          >
            Live
          </Button>
          <Button
            as="a"
            href={githubLink}
            target="_blank"
            leftIcon={<FaGithub />}
            colorScheme="gray"
            variant="outline"
            color={pinkColor}
            borderColor={pinkColor}
            _hover={{ bg: yellowHover, color: "white" }}
          >
            GitHub
          </Button>
        </Flex>
      </Box>
    </Flex>
  </Box>
);
