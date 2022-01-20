import React from "react"

import colorData from "../../data/colorData.js"

import { Icon } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"

export default function SkillItem({ isDark, skill }) {
  const levelColor = colorData.level[skill.level][isDark]

  return (
    <Box bg={levelColor} mt="3" mr="3" p="1" pl="2" pr="2" borderRadius="lg">
      <Icon mr="1" as={skill.icon} />
      {skill.title}
    </Box>
  )
}
