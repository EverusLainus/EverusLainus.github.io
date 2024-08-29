import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";

export const Skills = () => {
  const skills = [
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "VSCode",
    "GitHub",
    "MongoDB",
    "Express",
    "Vercel",
  ];

  return (
    <Box id="skills" py={16} textAlign="center" bg="#ECECEC" px={4}>
      <Heading size="xl" mb={32} color="#3E3E3E">
        Skills
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {skills.map((skill) => (
          <GridItem
            key={skill}
            bg="#3E3E3E"
            color="white"
            borderRadius="md"
            p={4}
            textAlign="center"
            fontSize="lg"
            fontWeight="bold"
            boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: "#EE046C" }} // Hover effect with the pink accent color
          >
            {skill}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
