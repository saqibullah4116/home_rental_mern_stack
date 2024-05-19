import { Box, Typography } from "@mui/material";
import React from "react";

const Categories = ({ imageUrl, icon, label }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "180px",
        height: "180px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            transform: "scale(0.7)", 
          },
        }}
      >
        {icon}
        <Typography color={"white"}>{label}</Typography>
      </Box>
    </Box>
  );
};

export default Categories;
