import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ListingDetails = () => {
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState(null);

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
          {listing?.title}
        </Typography>
      </Box>
    </>
  );
};

export default ListingDetails;
