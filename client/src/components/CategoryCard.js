import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CategoryCard = ({ item, selected = "" }) => {
  const [select, setSelect] = useState(false);
  useEffect(() => {
    if (item.label  === selected) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  }, [item, selected]);
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          borderColor: select? "#ff69b4" : "transparent",
          borderWidth: "2px",
          borderStyle: "solid",
          "&:hover": {
            borderColor: "#ff69b4", 
            borderWidth: "2px", 
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
