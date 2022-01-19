import React from "react"
import SkillItem from "./items/SkillItem.js"
import skillData from "../data/skillData.js"

import { Flex, Text, Box, Wrap } from "@chakra-ui/layout"

export default function Skill({ isDark, isBigScreen }) {
  return (
    <Flex w="77%">
      <Box ml={isBigScreen ? "16" : "0"} mt={isBigScreen ? "0" : "16"} align="flex-start">
        <Wrap>
          <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
            My Skills
          </Text>
        </Wrap>
        <Text mt="5" fontSize="2xl" fontWeight="semibold">Languages</Text>
        <Flex>
          {skillData.language.map((skill) => <SkillItem key={skill.id} isDark={isDark} skill={skill} />)}
        </Flex>
        <Text mt="5" fontSize="2xl" fontWeight="semibold">Frameworks</Text>
        <Flex>
          {skillData.framework.map((skill) => <SkillItem key={skill.id} isDark={isDark} skill={skill} />)}
        </Flex>
        <Text mt="5" fontSize="2xl" fontWeight="semibold">Tools</Text>
        <Flex>
          {skillData.tool.map((skill) => <SkillItem key={skill.id} isDark={isDark} skill={skill} />)}
        </Flex>
        <Text mt="5" fontSize="2xl" fontWeight="semibold">Additional</Text>
        <Flex>
          {skillData.additional.map((skill) => <SkillItem key={skill.id} isDark={isDark} skill={skill} />)}
        </Flex>
      </Box>
    </Flex>
  )
}
