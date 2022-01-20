import React from "react"

import ProjectItem from "./items/ProjectItem.js";
import projectData from "../data/projectData.js"

import { Image } from "@chakra-ui/react"
import { Flex, Box, Text, Wrap } from "@chakra-ui/layout"

import Carousel from "react-slick"

export default function Project({ isBigScreen }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  return (
    <Flex w="77%">
      <Box ml={isBigScreen ? "16" : "0"} mt="20" align="flex-start">
        <Wrap>
          <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
            My Projects
          </Text>
        </Wrap>
        {/* <Flex mt="5">
          <Carousel {...settings}>
            {
              projectData.map((project, index) => <ProjectItem key={index} project={project} />)
            }
          </Carousel>
        </Flex> */}
      </Box>
    </Flex>
  )
}
