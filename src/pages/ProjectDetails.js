import React, { useEffect } from "react"

import Navbar from "../components/Navbar.js"
import projectData from "../data/projectData.js"
import colorData from "../data/colorData.js"

import { useParams } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"
import { FaHome } from "react-icons/fa"

import { useColorMode } from "@chakra-ui/color-mode"
import { useMediaQuery } from "@chakra-ui/media-query"
import { Button, Image, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react"
import { Flex, VStack, Box, HStack, Wrap, Spacer } from "@chakra-ui/layout"

export default function ProjectDetails() {
  useEffect(() => {
    document.title = project.title
  })

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode === "dark")

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  const { id } = useParams()
  const [ project ] = projectData.filter((project) => project.id == id)
  console.log(project)

  const cardColor = colorData.card[isDark]

  return (
    <VStack p="5">
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode} />
      <Flex w="70%">
        <Box mt="6">

          <HStack>
            <Wrap>
              <Text fontSize="4xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
                {project.title}
              </Text>
            </Wrap>
            <Spacer></Spacer>
            <Button mt="8" leftIcon={<MdArrowBack />} onClick={() => window.location.href="/portfolio"}>Portfolio</Button>
            <Button mt="8" leftIcon={<FaHome />} onClick={() => window.location.href="/"}>Home</Button>
          </HStack>

          <Box borderRadius="lg" bg={cardColor} p="2" mt="5">
            <Image src={project.img} />
            {
              (project.site != null) && <Button mt="2" onClick={() => window.open(project.site)}>Visit Site</Button>
            }
          </Box>

          <Box borderRadius="lg" bg={cardColor} p="5" pt="4" mt="5">
            <Text fontSize="2xl" fontWeight="semibold">Description</Text>
            <Text fontSize="1xl">{project.desc}</Text>
          </Box>

          {
            (project.role != null) && <Box borderRadius="lg" bg={cardColor} p="5" pt="4" mt="5">
              <Text fontSize="2xl" fontWeight="semibold">Role</Text>
              <UnorderedList>
                {
                  project.role.map((role, index) => {
                    return (
                      <ListItem>
                        <Text key={index} fontSize="1xl">{role}</Text>
                      </ListItem>
                    )
                  })
                }
              </UnorderedList>
            </Box>
          }

          <Box borderRadius="lg" bg={cardColor} p="5" pt="4" mt="5">
            <Text fontSize="2xl" fontWeight="semibold">Technology used</Text>
            <UnorderedList>
              {
                project.tech.map((tech, index) => {
                  return (
                    <ListItem>
                      <Text key={index} fontSize="1xl">{tech}</Text>
                    </ListItem>
                  )
                })
              }
            </UnorderedList>
          </Box>

          {
            (project.resource != null) && <Box borderRadius="lg" bg={cardColor} p="5" pt="4" mt="5">
              <Text fontSize="2xl" fontWeight="semibold">Resources</Text>
              <UnorderedList>
                {
                  (project.resource.repo != null) && <ListItem>
                    <Link href={project.repo}>
                      <Text fontSize="1xl">Repository</Text>
                    </Link>
                  </ListItem>
                }
                {
                  (project.resource.backRepo != null) && <ListItem>
                    <Link href={project.backRepo}>
                      <Text fontSize="1xl">Backend Repository</Text>
                    </Link>
                  </ListItem>
                }
                {
                  (project.resource.frontRepo != null) && <ListItem>
                    <Link href={project.frontRepo}>
                      <Text fontSize="1xl">Frontend Repository</Text>
                    </Link>
                  </ListItem>
                }
              </UnorderedList>
            </Box>
          }

        </Box>
      </Flex>
    </VStack>
  )
}
