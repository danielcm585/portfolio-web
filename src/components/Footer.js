import React from "react"

import colorData from "../data/colorData.js"

import { Link, Text } from "@chakra-ui/react"
import { VStack, HStack, Spacer, Flex } from "@chakra-ui/layout"

export default function Footer({ isDark }) {
  const bgColor = colorData.footer[isDark]

  return (
    <VStack p="5" pb="10" mt="20" bg={bgColor}>
      <HStack w="70%" mt="7">
        <Text fontSize="lg" fontWeight="semibold">Daniel C.M.</Text>
        <Spacer></Spacer>
        <Link href="/">home.</Link>
        <Link href="/portfolio">portfolio.</Link>
      </HStack>
      <Spacer></Spacer>
      <Spacer></Spacer>
      <Spacer></Spacer>
      <Text fontSize="md">Copyright @ 2022 | danielcm</Text>
    </VStack>
  )
}
