import React from "react"

import socialData from "../data/socialData.js"

import { IconButton } from "@chakra-ui/button"
import { Flex, Heading, Spacer } from "@chakra-ui/layout"

import { SiInstagram, SiWhatsapp, SiGithub, SiLinkedin, SiCodeforces } from "react-icons/si"
import { FaSun, FaMoon } from "react-icons/fa"

export default function Navbar({ isDark, toggleColorMode, isBigScreen }) {
  return (
    <Flex w={isBigScreen ? "70%" : "100%"}>
      <Heading size="lg" fontWeight="semibold">
        Daniel C.M.
      </Heading>
      <Spacer></Spacer>
      <IconButton icon={<SiWhatsapp />} isRound="true" 
        onClick={() => window.open(socialData.whatsapp)}></IconButton>
      <IconButton ml="2" icon={<SiInstagram />} isRound="true" 
        onClick={() => window.open(socialData.instagram)}></IconButton>
      <IconButton ml="2" icon={<SiGithub />} isRound="true" 
        onClick={() => window.open(socialData.github)}></IconButton>
      <IconButton ml="2" icon={<SiLinkedin />} isRound="true" 
        onClick={() => window.open(socialData.linkedin)}></IconButton>
      <IconButton ml="2" icon={<SiCodeforces />} isRound="true"
        onClick={() => window.open(socialData.codeforces)}></IconButton>
      <IconButton ml="5" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" 
        onClick={toggleColorMode}></IconButton>
    </Flex>
  )
}
