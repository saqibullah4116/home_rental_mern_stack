import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const GroupButtons = ({ type }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          padding={"2px 8px"}
        >
          <Typography>{type}</Typography>
        </Box>
        <IconButton onClick={() => increment()}>
          <AddCircleOutline
            sx={{
              "&:hover": {
                color: "#ff69b4",
              },
            }}
          />
        </IconButton>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography>{count}</Typography>
        </Box>
        <IconButton onClick={() => decrement()}>
          <RemoveCircleOutline
            sx={{
              "&:hover": {
                color: "#ff69b4",
              },
            }}
          />
        </IconButton>
      </ButtonGroup>
    </>
  );
};

export default GroupButtons;
