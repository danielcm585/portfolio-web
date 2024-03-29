import React from "react"

import MyPhoto from "../img/my-photo.jpg"

import { Image } from "@chakra-ui/image"
import { Flex, Text, Box, Wrap } from "@chakra-ui/layout"

export default function Introduction({ isDark, isBigScreen }) {
  return (
    <Flex w={isBigScreen ? "70%" : "100%"} pt={isBigScreen ? "32" : "0"} pb={isBigScreen ? "32" : "0"} 
      direction={isBigScreen ? "row" : "column"}>
      <Image alignSelf="center" mt={isBigScreen ? "0" : "12"} mb="0" borderRadius="full" 
        backgroundColor="transparent" boxShadow="lg" boxSize={isBigScreen ? "300px" : "280px"} alt="My-Photo" src={MyPhoto} />
      <Box ml={isBigScreen ? "16" : "0"} mt={isBigScreen ? "0" : "16"} align="flex-start">
        <Text fontSize={isBigScreen ? "4xl" : "3xl"} fontWeight="semibold">Hi I'm</Text>
        <Wrap>
          <Text fontSize={isBigScreen ? "6xl" : "5xl"} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" 
            bgClip="text">
            Daniel Christian Mandolang
          </Text>
        </Wrap>
        <Text fontSize={isBigScreen ? "2xl" : "xl"} color={isDark ? "gray.200" : "gray.600"}>
          An Undergraduate Computer Science Student at University of Indonesia 
          who is really passionate in technology improvements. A competitive 
          programmer who has achieved some achievements in programming 
          contests. A future software engineer who always tries to learn something 
          new and improve his skills.
        </Text>
      </Box>
    </Flex>
  )
}
