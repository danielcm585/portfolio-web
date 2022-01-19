import React, { useState } from "react"
import Carousel from "react-elastic-carousel"
import ProjectItem from "./items/ProjectItem.js"
import projectData from "../data/projectData.js"

import { Image } from "@chakra-ui/image"
import { Flex, Box, Text, Wrap } from "@chakra-ui/layout"

export default function Project({ isBigScreen }) {
  const [items, setItems] = useState(projectData.filter((project) => {
    return project.id <= 8
  }));
  console.log(items.length);
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  return (
    <Flex w="77%">
      <Box ml={isBigScreen ? "16" : "0"} mt="20" align="flex-start">
        <Wrap>
          <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
            My Projects
          </Text>
        </Wrap>
        <Flex mt="5">
          <Carousel breakPoints={breakPoints}>
            {
              items.map((project) => {
                console.log(project.id);
                return (
                  <ProjectItem key={project.id}>
                    <Image h="250" w="400" src={project.img}/>
                  </ProjectItem>
                )
              })
            }
          </Carousel>
        </Flex>
      </Box>
    </Flex>
  )
}
