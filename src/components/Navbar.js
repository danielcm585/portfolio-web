import React from "react"

import socialData from "../data/socialData.js"

import MenuDrawer from './MenuDrawer'

import { IconButton } from "@chakra-ui/button"
import { Flex, Heading, Spacer } from "@chakra-ui/layout"

import { useDisclosure } from "@chakra-ui/react"
import { SiInstagram, SiWhatsapp, SiGithub, SiLinkedin, SiCodeforces } from "react-icons/si"
import { FaSun, FaMoon } from "react-icons/fa"
import { BiMenu } from "react-icons/bi"

export default function Navbar({ isDark, toggleColorMode, isBigScreen }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex w={isBigScreen ? "70%" : "100%"} alignItems="center">
      <Heading size="lg" fontWeight="semibold">
        Daniel C.M.
      </Heading>
      <Spacer></Spacer>
      {
        isBigScreen ? (
          <>
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
          </>
        ) : (
          <>
            <IconButton size='lg' variant='ghost' icon={<BiMenu />} onClick={onOpen} />
            <MenuDrawer isOpen={isOpen} onClose={onClose} isDark={isDark} toggleColorMode={toggleColorMode} />
          </>
        )
      }
    </Flex>
  )
}
