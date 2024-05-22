import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Skeleton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { categories } from "../../../data";
import { setListings } from "../../../redux/state";
import { Link } from "react-router-dom";

const SelectingCategory = () => {
  const [category, setCategory] = useState("All");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const listings = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const selectCategory = (item) => {
    setCategory(item.label);
  };

  const fetchSelectedCategory = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        category !== "All"
          ? `http://localhost:4000/listing?category=${category}`
          : "http://localhost:4000/listing",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const fetchedCategory = await response.json();

      if (response.status >= 400) {
        setError(fetchedCategory.message);
        setLoading(false);
      }

      if (response.ok) {
        setLoading(false);
        dispatch(
          setListings({
            listings: fetchedCategory,
          })
        );
      }
    } catch (error) {
      console.log(`Fetching category failed: ${error}`);
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
      mb={6}
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
      <Box mt={5}>
        {loading ? (
          <Box display={"flex"} flexDirection={"row"} gap={1}>
            {[1, 2, 3].map((index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height="250px"
                width="250px"
              />
            ))}
          </Box>
        ) : listings.length < 1 ? (
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <span>No listings available for </span>
            <Typography variant="h5" color={"#ff69b4"} fontWeight={"bold"}>
              {"  " + category}
            </Typography>{" "}
          </Box>
        ) : (
          <Grid container spacing={2}>
            {listings.map((listing, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link to={`/properties/${listing._id}`}>
                  <Card style={{ backgroundColor: "#f7f7f7" }}>
                    <Carousel>
                      {listing.listingPhotosPath.map((path, index) => (
                        <CardMedia
                          key={index}
                          component="img"
                          height="140"
                          image={`http://localhost:4000/${path.replace(
                            "public",
                            ""
                          )}`}
                          alt={`Listing Image ${index + 1}`}
                        />
                      ))}
                    </Carousel>
                    <CardContent>
                      <Typography variant="h6">{listing.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {listing.description}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="black"
                        fontWeight={"bold"}
                      >
                        {listing.price} USD
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default SelectingCategory;
