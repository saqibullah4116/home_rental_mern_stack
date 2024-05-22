import React from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography } from "@mui/material";

const ListingDetails = () => {
  return (
    <>
      <Navbar />
      <Box
        maxWidth="md"
        margin="auto"
        paddingLeft={{ sm: 5, md: 0 }}
        paddingRight={{ sm: 5, md: 0 }}
        paddingTop={2}
      >
        <Typography variant="h5" fontWeight={"bold"}>title</Typography>
      </Box>
    </>
  );
};

export default ListingDetails;
