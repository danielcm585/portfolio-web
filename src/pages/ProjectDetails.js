import React, { useEffect } from 'react';

export default function ProjectDetails({ project }) {
  useEffect(() => {
    document.title = project.title
  })

  return (
    <>
      Halo
      <Button mt="3" onClick={() => window.open("/portfolio")}>Visit Site</Button>
    </>
  )
}
