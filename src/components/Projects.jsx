import { Box, Heading } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
} from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Lean and Lift - A Health and Wellness Website",
      description:
        "We Provide user Exercise Routine and Goal, Recommend articles according to the user's goals and Food Diary and Ai health assistant",
      image: "LeanLiftPic.png",
      techStack: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "CSS", icon: FaCss3 },
        { name: "HTML", icon: FaHtml5 },
        { name: "GitHub", icon: FaGithub },
      ],
      liveLink: "https://leanandlift.netlify.app",
      githubLink: "https://github.com/rambedade/Republic-Ruby_034",
    },
    {
      title: "Idea - A Algorithm Visualizer",
      description:
        "Educational Website to help students visualize the basic algorithms and data structures",
      image: "IdeaPic.png",
      techStack: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "CSS", icon: FaCss3 },
        { name: "HTML", icon: FaHtml5 },
        { name: "GitHub", icon: FaGithub },
      ],
      liveLink: "https://algorithammvisualizerrr.netlify.app/",
      githubLink: "https://github.com/plpatil1/CW-Twitter-Trailblazers_099",
    },
    {
      title: "Marvel Website Clone",
      description: "A clone of Homepage of Marvel website",
      image: "/MarvelClonePic.png",
      techStack: [
        { name: "CSS", icon: FaCss3 },
        { name: "HTML", icon: FaHtml5 },
        { name: "GitHub", icon: FaGithub },
      ],
      liveLink: "https://marvel-clone.netlify.app/",
      githubLink: "https://github.com/sneelesh182/Indus-Iteration-006",
    },
  ];

  return (
    <Box
      id="projects"
      py={16}
      bg="#ECECEC"
      color="#3E3E3E"
      px={{ base: 4, md: 8 }}
    >
      <Heading size="xl" mb={32} textAlign="center">
        Projects
      </Heading>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Box>
  );
};
