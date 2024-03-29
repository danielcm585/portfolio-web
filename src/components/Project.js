import React from "react"

import ProjectItem from "./items/ProjectItem.js";
import projectData from "../data/projectData.js"

import { Flex, Box, Text, Wrap } from "@chakra-ui/layout"
import { Button, Grid } from "@chakra-ui/react"

// import Carousel from "react-slick"

export default function Project({ isDark, isBigScreen }) {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  // }

  const simplePortfolio = projectData.filter((project) => project.show)

  return (
    <Flex w={isBigScreen ? "70%" : "100%"}>
      <Box mt="20" align="flex-start">
        <Wrap>
          <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
            My Projects
          </Text>
        </Wrap>
        <Flex mt="5">
          {/* <Carousel {...settings}> */}
          <Grid templateColumns="repeat(3, 1fr)" gap="3">
            {
              simplePortfolio.map((project, index) => <ProjectItem key={index} project={project} isDark={isDark} />)
            }
          </Grid>
          {/* </Carousel> */}
        </Flex>
        <Button mt="3" onClick={() => window.location.href="/portfolio"}>Show All</Button>
      </Box>
    </Flex>
  )
}
