import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";

const Links = ["Home", "About", "Skills", "Projects", "Statistics", "Contact"];

const NavLink = ({ children, onClick }) => (
  <Box
    as={ScrollLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "transparent", // No background color on hover
      color: "#3E3E3E", // Dark gray text color
    }}
    _focus={{
      boxShadow: "none", // Remove the blue outline on focus
    }}
    to={children.toLowerCase()}
    smooth={true}
    duration={500}
    style={{ cursor: "pointer" }}
    onClick={onClick}
    color="#3E3E3E" // Dark gray text color
  >
    {children}
  </Box>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#ECECEC" // Light gray background color
      px={4}
      position="sticky"
      top={0}
      zIndex={1000}
      as="header"
      w="full"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" color="#EE046C">
          Portfolio
        </Box>{" "}
        {/* Accent color for the logo */}
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link} onClick={onClose}>
                {link}
              </NavLink>
            ))}
          </HStack>
          <Button
            as="a"
            href="/EverusJeishaLainus-FullStackWebDeveloper.pdf" // Replace with your resume PDF path
            target="_blank"
            color="#ECECEC"
            bg="#EE046C"
            _hover={{
              color: "#3E3E3E",
            }}
          >
            Download Resume
          </Button>
          <Menu isOpen={isOpen}>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              onClick={isOpen ? onClose : onOpen}
              minW={0}
              display={{ md: "none" }}
            >
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                _hover={{
                  bg: "transparent", // No background color on hover
                }}
                _focus={{
                  boxShadow: "none", // Remove the blue outline on focus
                }}
              />
            </MenuButton>
            <MenuList borderColor="#3E3E3E">
              {Links.map((link) => (
                <MenuItem key={link} onClick={onClose}>
                  <NavLink onClick={onClose}>{link}</NavLink>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
