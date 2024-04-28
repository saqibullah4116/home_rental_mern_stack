import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const CategoryCard = ({ item }) => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          "&:hover": {
            // backgroundColor:"red",
            borderColor: "#ff69b4", // Pinkish color
            borderWidth: "1px", // Border width
            borderStyle: "solid",
          },
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          paddingTop={1}
          paddingBottom={1}
        >
          <Typography
            variant="p"
            fontSize={"14px"}
            textAlign={"center"}
            padding={"0px 3px"}
          >
            {item.label ?? item.name}
          </Typography>
          <Box mt={1} />
          {item.icon}
        </Box>
      </Paper>
    </>
  );
};

export default CategoryCard;
