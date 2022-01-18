import React from "react"
import achievementData from "../data/achievementData.js"

import { HStack } from "@chakra-ui/layout"
import AchievementItem from "./items/AchievementItem.js"

export default function Achievement() {
  return (
    <HStack w="65%">
      {
        achievementData.map((achievement) => {
          return <AchievementItem achievement={achievement} />
        })
      }
    </HStack>
  )
}
