import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { categories } from "../../../data";
import { useDispatch } from "react-redux";

const SelectingCategory = () => {
  const [category, setCategory] = useState("All");

  const dispatch = useDispatch();

  const selectCategory = (item) => {
    setCategory(item.label);
  };

  const fetchSelectedCategory = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/listing?category=${category}`,
        {
          method: "GET",
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      const fetchedCategory = await response.json();
      console.log("**************************************************");
      console.log(fetchedCategory);
      if (response.status >= 400) {
        // setError(loggedIn.message);
      }

      if (response.ok) {
        dispatch();
      }
    } catch (error) {
      console.log(`log in  filed: ${error}`);
    }
  };
  useEffect(() => {
    fetchSelectedCategory();
  }, [category]);

  return (
    <Box
      maxWidth="md"
      margin="auto"
      paddingLeft={{ sm: 5, md: 0 }}
      paddingRight={{ sm: 5, md: 0 }}
      mt={6}
    >
      <Grid container spacing={1}>
        {categories.map((item, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={4}
            lg={2}
            onClick={() => selectCategory(item)}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              paddingTop={1}
              paddingBottom={1}
              sx={{
                borderColor:
                  item.label === category ? "#ff69b4" : "transparent",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: "10px",
                "&:hover": {
                  borderColor: "#ff69b4",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderRadius: "10px",
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="body2"
                fontSize={"14px"}
                textAlign={"center"}
                padding={"0px 3px"}
              >
                {item.label}
              </Typography>
              <Box mt={1} />
              {item.icon}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SelectingCategory;
