import React from "react"

import Navbar from "../components/Navbar.js"
import Introduction from "../components/Introduction.js"
import Skill from "../components/Skill.js"
import Project from "../components/Project.js"
import Achievement from "../components/Achievement.js"
// import Certification from "../components/Certification.js"

import { VStack } from "@chakra-ui/layout"
import { useColorMode } from "@chakra-ui/color-mode"
import { useMediaQuery } from "@chakra-ui/media-query"

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode === "dark")

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")
  
  return (
    <VStack p="5">
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode} />
      <Introduction isDark={isDark} isBigScreen={isBigScreen} />
      <Skill isDark={isDark} isBigScreen={isBigScreen} />
      <Project isBigScreen={isBigScreen} />
      <Achievement isDark={isDark} isBigScreen={isBigScreen} />
      {/* <Certification /> */}
    </VStack>
  )
}
