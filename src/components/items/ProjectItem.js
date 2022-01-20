import React from "react";

import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

export default function ProjectItem({ project }) {
  return (
    <Box>
      {/* Halo */}
      <Image h="8" src={project.img} />
    </Box>
  )
}
