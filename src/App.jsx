// src/App.jsx
import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Statistics } from "./components/Statistics";
import { Contact } from "./components/Contact";
import { Box, Flex } from "@chakra-ui/react";

export const App = () => (
  <Flex
    direction="column"
    minHeight="100vh"
    align="center"
    bg="#ECECEC" // Background color
  >
    <Box
      maxW="1280px"
      w="full"
      bg="white"
      boxShadow="md"
      p={0}
      border="1px solid #3E3E3E" // Dark gray border color
    >
      <Navbar />
      <Box>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Statistics />
        <Contact />
      </Box>
    </Box>
  </Flex>
);
