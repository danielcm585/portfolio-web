import React from 'react'

import socialData from "../data/socialData.js"

import { Button, IconButton, Drawer, DrawerCloseButton, DrawerContent, DrawerBody, DrawerOverlay } from '@chakra-ui/react'

import { SiInstagram, SiWhatsapp, SiGithub, SiLinkedin, SiCodeforces } from "react-icons/si"
import { FaSun, FaMoon } from "react-icons/fa"

export default function MenuDrawer({ isOpen, onClose, isDark, toggleColorMode }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" 
              onClick={toggleColorMode}></IconButton>
            <Button mt='2' w='100%' variant='ghost' borderRadius='lg' leftIcon={<SiWhatsapp />} onClick={() => window.open(socialData.whatsapp)}>
              WhatsApp
            </Button>
            <Button mt='2' w='100%' variant='ghost' borderRadius='lg' leftIcon={<SiInstagram />} onClick={() => window.open(socialData.instagram)}>
              Instagram
            </Button>
            <Button mt='2' w='100%' variant='ghost' borderRadius='lg' leftIcon={<SiGithub />} onClick={() => window.open(socialData.instagram)}>
              Github
            </Button>
            <Button mt='2' w='100%' variant='ghost' borderRadius='lg' leftIcon={<SiLinkedin />} onClick={() => window.open(socialData.instagram)}>
              LinkedIn
            </Button>
            <Button mt='2' w='100%' variant='ghost' borderRadius='lg' leftIcon={<SiCodeforces />} onClick={() => window.open(socialData.instagram)}>
              Codeforces
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
