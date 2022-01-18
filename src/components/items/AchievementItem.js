import React from "react"
import colorData from "../../data/colorData.js"

import { Icon } from "@chakra-ui/react"
import { FaMedal } from "react-icons/fa"

export default function AchievementItem({ achievement }) {
  const colorDataColor = colorData.color["medal"]
  const medalColor = colorDataColor[achievement.medal]
  console.log(medalColor);

  return (
    <>
      <Icon as={FaMedal} color={medalColor} />
      Halo
    </>
  )
}
