import React, { useEffect } from "react";

import Navbar from "../components/Navbar.js"
import projectData from "../data/projectData.js"

import { useColorMode } from "@chakra-ui/color-mode"
// import { useMediaQuery } from "@chakra-ui/media-query"
import { Grid } from "@chakra-ui/react"
import { VStack, Box, Flex } from "@chakra-ui/layout"
import ProjectItem from "../components/items/ProjectItem.js";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | Daniel C.M."
  }, [])

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode === "dark")

  // const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <VStack p="5">
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode} />
      <Flex w="70%">
        <Grid mt="10" templateColumns="repeat(3, 1fr)" gap="3">
          {
            projectData.map((project, index) => <ProjectItem key={index} project={project} isDark={isDark} />)
          }
        </Grid>
      </Flex>
    </VStack>
  )
}
