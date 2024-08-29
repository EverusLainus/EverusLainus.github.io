// src/components/Contact.jsx
import { Box, Heading, Text, Stack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const pinkColor = "#EE046C";
const yellowColor = "#FCAC0C";
const grayColor = "#3E3E3E";
const lightGrayColor = "#ECECEC";

export const Contact = () => (
  <Box id="contact" bg={lightGrayColor} textAlign="center">
    <Heading size="xl" mb={16} color={grayColor}>
      Contact Me
    </Heading>
    <Stack spacing={5} align="center">
      <Stack direction="row" spacing={3} align="center">
        <Icon as={FaGithub} boxSize={5} color={pinkColor} />
        <Link
          href="https://github.com/EverusLainus"
          isExternal
          fontSize="lg"
          fontWeight="bold"
          color={grayColor}
          _hover={{ color: yellowColor }}
        >
          EverusLainus
        </Link>
      </Stack>
      <Stack direction="row" spacing={3} align="center">
        <Icon as={FaLinkedin} boxSize={5} color={pinkColor} />
        <Link
          href="https://www.linkedin.com/in/everuslainus/"
          isExternal
          fontSize="lg"
          fontWeight="bold"
          color={grayColor}
          _hover={{ color: yellowColor }}
        >
          everuslainus
        </Link>
      </Stack>
      <Stack direction="row" spacing={3} align="center">
        <Icon as={FaEnvelope} boxSize={5} color={pinkColor} />
        <Text fontSize="lg" fontWeight="bold" color={grayColor}>
          everuslainus@gmail.com
        </Text>
      </Stack>
      <Stack direction="row" spacing={3} align="center">
        <Icon as={FaPhone} boxSize={5} color={pinkColor} />
        <Text fontSize="lg" fontWeight="bold" color={grayColor}>
          +91-7812835639
        </Text>
      </Stack>
    </Stack>
    <Box mt={8} py={4} bg={pinkColor} w="full" textAlign="center">
      <Text fontSize="md" fontWeight="bold" color={lightGrayColor}>
        Thank You for visiting my Portfolio.
      </Text>
    </Box>
  </Box>
);
