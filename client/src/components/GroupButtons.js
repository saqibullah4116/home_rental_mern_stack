import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, ButtonGroup, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const GroupButtons = ({ type, onCountChange }) => {
  const [count, setCount] = useState(1);
  
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onCountChange) {
      onCountChange(newCount); // Notify parent about the updated count
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (onCountChange) {
        onCountChange(newCount); // Notify parent about the updated count
      }
    }
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
        <IconButton onClick={increment}>
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
        <IconButton onClick={decrement}>
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
