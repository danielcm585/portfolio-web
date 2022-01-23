import React, { useEffect } from "react"

import Navbar from "../components/Navbar.js"
import ProjectItem from "../components/items/ProjectItem.js"
import Footer from "../components/Footer.js"
import projectData from "../data/projectData.js"
import colorData from "../data/colorData.js"

import { useParams } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"
import { FaHome, FaExternalLinkAlt } from "react-icons/fa"

import { useColorMode } from "@chakra-ui/color-mode"
import { useMediaQuery } from "@chakra-ui/media-query"
import { Button, Image, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react"
import { Flex, VStack, Box, HStack, Wrap, Spacer, Grid } from "@chakra-ui/layout"

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

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  let otherProject = projectData.filter((project) => project.id !== id)
  shuffle(otherProject)
  otherProject = otherProject.slice(0,3)

  return (
    <>
      <VStack p="5">
        <Navbar isDark={isDark} toggleColorMode={toggleColorMode} isBigScreen={isBigScreen} />
        <Flex w={isBigScreen ? "70%" : "100%"}>
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
              <Image src={project.img} borderRadius="lg" />
              {
                (project.site != null) && <Button mt="2" leftIcon={<FaExternalLinkAlt />} onClick={() => window.open(project.site)}>Visit Site</Button>
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
              <Text fontSize="2xl" fontWeight="semibold">Technology Used</Text>
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
                      <Link href={project.resource.repo} isExternal>
                        <Text fontSize="1xl">Repository</Text>
                      </Link>
                    </ListItem>
                  }
                  {
                    (project.resource.backRepo != null) && <ListItem>
                      <Link href={project.resource.backRepo} isExternal>
                        <Text fontSize="1xl">Backend Repository</Text>
                      </Link>
                    </ListItem>
                  }
                  {
                    (project.resource.frontRepo != null) && <ListItem>
                      <Link href={project.resource.frontRepo} isExternal>
                        <Text fontSize="1xl">Frontend Repository</Text>
                      </Link>
                    </ListItem>
                  }
                </UnorderedList>
              </Box>
            }

            <Text mt="5" fontSize="2xl" fontWeight="semibold">Other</Text>
            <Grid mt="5" templateColumns={isBigScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"} gap="3">
              {
                otherProject.map((project, index) => <ProjectItem key={index} project={project} isDark={isDark} />)
              }
            </Grid>

          </Box>
        </Flex>
      </VStack>
      <Footer isDark={isDark} />
    </>
  )
}
