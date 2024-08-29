import {
  Box,
  Heading,
  Image,
  Stack,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";

const pinkColor = "#EE046C";
const yellowColor = "#FCAC0C";
const whiteColor = "#FFFFFF";
const grayColor = "#3E3E3E";
const lightGrayColor = "#ECECEC";

export const Statistics = () => {
  const imageWidth = useBreakpointValue({ base: "100%", md: "50%" });

  return (
    <Box
      id="statistics"
      py={16}
      px={{ base: 4, md: 8 }}
      bg={lightGrayColor}
      color={grayColor}
    >
      <Heading size="xl" textAlign="center" mb={32} color={grayColor}>
        Statistics
      </Heading>
      <Box width="100%" textAlign="center" mb={8}>
        <Image
          src="greenGitPic.png"
          alt="GitHub Contributions Graph"
          width="100%"
          objectFit="contain"
          boxShadow="md"
          borderRadius="md"
        />
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=EverusLainus&langs_count=10&theme=default&hide_border=true&layout=compact"
          alt="Most Used Languages"
          width={imageWidth}
          maxWidth="500px"
          objectFit="contain"
          boxShadow="md"
          borderRadius="md"
        />
        <Image
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=EverusLainus&theme=default"
          alt="GitHub Profile Summary Cards"
          width={imageWidth}
          maxWidth="500px"
          objectFit="contain"
          boxShadow="md"
          borderRadius="md"
        />
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        mt={4}
        justify="center"
        flexWrap="wrap"
      >
        <Badge
          bg={pinkColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={pinkColor}
          _hover={{
            bg: yellowColor,
            color: whiteColor,
            borderColor: yellowColor,
          }}
        >
          C - 20%
        </Badge>
        <Badge
          bg={pinkColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={pinkColor}
          _hover={{
            bg: yellowColor,
            color: whiteColor,
            borderColor: yellowColor,
          }}
        >
          C++ - 15%
        </Badge>
        <Badge
          bg={pinkColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={pinkColor}
          _hover={{
            bg: yellowColor,
            color: whiteColor,
            borderColor: yellowColor,
          }}
        >
          JavaScript - 25%
        </Badge>
        <Badge
          bg={pinkColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={pinkColor}
          _hover={{
            bg: yellowColor,
            color: whiteColor,
            borderColor: yellowColor,
          }}
        >
          Rust - 10%
        </Badge>
        <Badge
          bg={pinkColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={pinkColor}
          _hover={{
            bg: yellowColor,
            color: whiteColor,
            borderColor: yellowColor,
          }}
        >
          Java - 30%
        </Badge>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        mt={4}
        justify="center"
        flexWrap="wrap"
      >
        <Badge
          bg={yellowColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={yellowColor}
          _hover={{ bg: pinkColor, color: whiteColor, borderColor: pinkColor }}
        >
          Clones - 1000
        </Badge>
        <Badge
          bg={yellowColor}
          color={whiteColor}
          px={4}
          py={2}
          borderRadius="md"
          borderWidth="1px"
          borderColor={yellowColor}
          _hover={{ bg: pinkColor, color: whiteColor, borderColor: pinkColor }}
        >
          Views - 500
        </Badge>
      </Stack>
    </Box>
  );
};
