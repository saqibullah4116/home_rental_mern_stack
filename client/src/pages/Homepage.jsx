import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import CategorySectionForHomepage from "../components/CategorySectionForHomepage";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <CategorySectionForHomepage />
    </>
  );
};

export default Homepage;
