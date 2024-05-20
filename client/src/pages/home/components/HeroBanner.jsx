import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box
    sx={{
      backgroundImage: `url(${"https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Stack spacing={2}>
      <Typography
        variant="h4"
        color="black"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Welcome Home! Anywher you roam
      </Typography>
      <Typography
        variant="h4"
        color="black"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Stay in the moment. Make you memories
      </Typography>
    </Stack>
  </Box>
  )
}

export default HeroBanner
