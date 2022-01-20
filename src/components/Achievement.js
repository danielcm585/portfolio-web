import React from "react"

import AchievementItem from "./items/AchievementItem.js"
import achievementData from "../data/achievementData.js"

import { Flex, Box, Wrap } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"

export default function Achievement({ isDark, isBigScreen }) {
  return (
    <Flex w="77%">
      <Box ml={isBigScreen ? "16" : "0"} mt="20" align="flex-start">
        <Wrap>
          <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
            My Achievements
          </Text>
        </Wrap>
        <Box>
          {
            achievementData.map((achievement, index) => <AchievementItem key={index} isDark={isDark} achievement={achievement} />)
          }
        </Box>
      </Box>
    </Flex>
  )
}
