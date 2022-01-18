import React from "react"
import Carousel from "react-elastic-carousel"

import { Flex, Box, Text, Wrap } from "@chakra-ui/layout"

export default function Project({ isBigScreen }) {
  return (
    <Flex w="77%">
      <Box ml={isBigScreen ? "16" : "0"} mt="20" align="flex-start">
        <Wrap>
          <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
            My Projects
          </Text>
        </Wrap>
        <Flex>
          <Carousel>
            
          </Carousel>
        </Flex>
      </Box>
    </Flex>
  )
}
