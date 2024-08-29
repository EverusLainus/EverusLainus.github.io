// src/components/Home.jsx

import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

export const Home = () => (
  <Box
    id="home"
    py={16}
    px={16}
    textAlign="center"
    bgGradient="linear(to-r, #ECECEC, #D8D8D8)" // Lighter gradient for better contrast
    color="#3E3E3E" // Darker text color for better visibility
  >
    <Flex justifyContent={"space-around"}>
      <Box w="100%">
        <Heading
          size="xl"
          fontWeight="bold"
          color="#3E3E3E" // Dark gray for the main heading
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)" // Slight shadow for emphasis
        >
          Hi, I am Everus
        </Heading>
        <Text
          mt={4}
          fontSize="xl"
          color="#EE046C" // Accent pink for the subheading
          fontWeight="medium"
          textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)" // Slight shadow for visibility
        >
          Full Stack Web Developer
        </Text>
      </Box>
      <Box>
        <Image w="100%" src="/coder.svg" alt="image of a girl" />
      </Box>
    </Flex>
  </Box>
);
