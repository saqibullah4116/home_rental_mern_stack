import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState(null);
  console.log("**************************************");
  console.log(listing);
  const { listingId } = useParams();

  const fetchSingleListing = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/listing/${listingId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const fetchedSingleListing = await response.json();

      if (response.status >= 400) {
        // setError(fetchedCategory.message);
        setLoading(false);
      }

      if (response.ok) {
        setLoading(false);

        setListing({
          fetchedSingleListing,
        });
      }
    } catch (error) {
      console.log(`Fetching category failed: ${error}`);
    }
  };
  useEffect(() => {
    fetchSingleListing();
  }, []);

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
        <Typography variant="h5" fontWeight={"bold"}>
          {listing?.fetchedSingleListing?.title}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {listing?.fetchedSingleListing?.listingPhotosPath.map(
            (path, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Box
                  component="img"
                  src={`http://localhost:4000/${path?.replace("public", "")}`}
                  sx={{
                    position: "relative",
                    width: {
                      xs: "150px",
                      sm: "180px",
                      md: "200px",
                      lg: "220px",
                    },
                    height: {
                      xs: "150px",
                      sm: "180px",
                      md: "200px",
                      lg: "220px",
                    },
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
            )
          )}
        </Grid>
        <Box mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            {listing?.fetchedSingleListing?.type} in{" "}
            {listing?.fetchedSingleListing?.city},
            {listing?.fetchedSingleListing?.province},
            {listing?.fetchedSingleListing?.country}
          </Typography>
          <Typography variant="body1">
            {listing?.fetchedSingleListing.guestCount} guest,
            {listing?.fetchedSingleListing?.bedroomCount}-bedroom,
            {listing?.fetchedSingleListing?.bedCount}-bed,
            {listing?.fetchedSingleListing?.bathroomCount}-bath
          </Typography>
          <Box mb={1} />
          <Divider />
          <Box padding={1} display={"flex"} alignItems={"center"}>
            <Avatar
              alt="Remy Sharp"
              src={`http://localhost:4000/${listing?.fetchedSingleListing?.creator?.profileImagePath?.replace(
                "public",
                ""
              )}`}
              style={{
                border: "2px solid lightgray",
              }}
            />
            <Typography ml={2}>
              {` ${listing?.fetchedSingleListing?.creator?.firstName} ${listing?.fetchedSingleListing?.creator?.lastName}`}
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h5" fontWeight={"bold"} mt={2}>
              Description
            </Typography>
            <Typography mb={1}>
              {listing?.fetchedSingleListing?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ListingDetails;
