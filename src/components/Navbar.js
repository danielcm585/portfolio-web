import React from "react"
import Data from "./Data.js"

import { IconButton } from "@chakra-ui/button"
import { Flex, Heading, Spacer } from "@chakra-ui/layout"
import { SiInstagram, SiWhatsapp, SiGithub, SiLinkedin, SiCodeforces } from "react-icons/si"
import { FaSun, FaMoon } from "react-icons/fa"

export default function Navbar({ isDark, toggleColorMode }) {
  return (
    <Flex w="70%">
      <Heading size="lg" fontWeight="semibold" color={isDark ? "cyan.400" : "blue.500"}>
        Daniel C.M.
      </Heading>
      <Spacer></Spacer>
      <IconButton icon={<SiWhatsapp />} isRound="true" 
        onClick={() => window.open(Data.social.whatsapp)}></IconButton>
      <IconButton ml="2" icon={<SiInstagram />} isRound="true" 
        onClick={() => window.open(Data.social.instagram)}></IconButton>
      <IconButton ml="2" icon={<SiGithub />} isRound="true" 
        onClick={() => window.open(Data.social.github)}></IconButton>
      <IconButton ml="2" icon={<SiLinkedin />} isRound="true" 
        onClick={() => window.open(Data.social.linkedin)}></IconButton>
      <IconButton ml="2" icon={<SiCodeforces />} isRound="true"
        onClick={() => window.open(Data.social.codeforces)}></IconButton>
      <IconButton ml="5" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" 
        onClick={toggleColorMode}></IconButton>
    </Flex>
  )
}
