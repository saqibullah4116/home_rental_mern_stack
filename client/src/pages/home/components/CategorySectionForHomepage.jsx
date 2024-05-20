import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Categories from "../../createListing/components/Categories";
import { categories } from "../../../data";

const CategorySectionForHomepage = () => {
  return (
    <Box
      maxWidth="md"
      margin="auto"
      paddingLeft={{ sm: 5, md: 0 }}
      paddingRight={{ sm: 5, md: 0 }}
      mt={6}
    >
      <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
        Explore the top categories
      </Typography>
      <Typography variant="body1" textAlign={"center"} mb={2}>
        Explore our wide range of vacation rentals that cater to all types of
        travelers. Immerse yourself in the local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={4} md={3}  key={index}>
            <Categories
              imageUrl={category.img}
              icon={category.iconCategory}
              label={category.label}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySectionForHomepage;
