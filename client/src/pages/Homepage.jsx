import React from "react";
import Navbar from "../components/Navbar";
import { Box, Stack, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
      <h1>hi there from home page</h1>
    </>
  );
};

export default Homepage;
