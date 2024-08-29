import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

export const About = () => (
  <Box
    id="about"
    py={16}
    px={4}
    bg="#ECECEC" // Light gray background
    borderRadius="md"
    boxShadow="lg"
    mx={{ base: 4, md: 0 }}
  >
    <Heading
      size="xl"
      mb={8}
      textAlign="center"
      color="#3E3E3E" // Dark gray heading color
    >
      About Me
    </Heading>
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      textAlign={{ base: "center", md: "left" }}
    >
      <Image
        boxSize="200px"
        objectFit="cover"
        src="profilePic.png"
        alt="Profile Picture"
        mb={{ base: 4, md: 0 }}
        mr={{ md: 8 }}
        borderRadius="full" // Circular image for a polished look
        border="2px solid #FCAC0C" // Accent color border
      />
      <Box maxW="600px">
        <Text
          fontSize="lg"
          lineHeight="taller"
          color="#3E3E3E" // Dark gray text color
        >
          Innovative Full Stack Web Developer adept at leveraging React,
          Node.js, Express.js, and MongoDB to build scalable and robust web
          applications. Demonstrates strong problem-solving skills, attention to
          detail, and the remarkable ability to learn new technologies swiftly,
          including Generative AI for modern development solutions.
        </Text>
      </Box>
    </Flex>
  </Box>
);
