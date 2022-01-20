import React from "react"

import colorData from "../../data/colorData.js"

import { FaMedal } from "react-icons/fa"

import { Button, Text } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icon"
import { Box, HStack } from "@chakra-ui/layout"

export default function AchievementItem({ isDark, achievement }) {
  const medalColor = colorData.medal[achievement.medal]
  const cardColor = colorData.card[isDark]

  return (
    <Box bg={cardColor} mt="5" p="5" pl="6" pr="6" borderRadius="lg">
      <HStack>
      <Box bg="black" p="2" pl="3" pr="3" mr="5" borderRadius="lg">
        <Icon as={FaMedal} color={medalColor} />
      </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="semibold">{achievement.title}</Text>
          <Text fontSize="1xl" fontWeight="semibold">{achievement.contest}</Text>
          <Button mt="2" onClick={() => window.open(achievement.site)}>Visit Site</Button>
        </Box>
      </HStack>
    </Box>
  )
}
