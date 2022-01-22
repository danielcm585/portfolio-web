import React, { useEffect } from "react";

import Navbar from "../components/Navbar.js"
import projectData from "../data/projectData.js"
import ProjectItem from "../components/items/ProjectItem.js";

import { FaHome } from "react-icons/fa"

import { useColorMode } from "@chakra-ui/color-mode"
import { Grid, Button, Text } from "@chakra-ui/react"
import { VStack, Flex, Wrap, Box, HStack, Spacer } from "@chakra-ui/layout"

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | Daniel C.M."
  }, [])

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode === "dark")

  return (
    <VStack p="5">
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode} />
      {/* <Flex w="70%">
      </Flex> */}
      <Flex w="70%">
        <Box mt="6">
          <HStack>
            <Wrap>
              <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
                My Portfolio
              </Text>
            </Wrap>
            <Spacer></Spacer>
            <Button mt="8" leftIcon={<FaHome />} onClick={() => window.location.href="/"}>Home</Button>
          </HStack>
          <Grid mt="5" templateColumns="repeat(3, 1fr)" gap="3">
            {
              projectData.map((project, index) => <ProjectItem key={index} project={project} isDark={isDark} />)
            }
          </Grid>
        </Box>
      </Flex>
    </VStack>
  )
}
