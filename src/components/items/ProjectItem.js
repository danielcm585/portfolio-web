import React from "react";

import colorData from "../../data/colorData.js"

import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";

export default function ProjectItem({ isDark, project }) {
  const cardColor = colorData.card[isDark]

  return (
    <Box bg={cardColor} borderRadius="lg" p="1">
      <Image borderRadius="lg" src={project.img} />
      <Text ml="2" mt="2" fontSize="2xl" fontWeight="semibold">{project.title}</Text>
      <Button ml="2" mb="2" mt="2" onClick={() => window.open(project.site)}>Show Details</Button>
    </Box>
  )
}
