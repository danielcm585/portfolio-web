import React, { useEffect } from 'react';

export default function PortfolioItem({ project }) {
  useEffect(() => {
    document.title = project.title
  })

  return (

  )
}
