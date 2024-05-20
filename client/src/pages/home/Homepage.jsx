import React from "react";
import Navbar from "../../components/Navbar";
import CategorySectionForHomepage from "./components/CategorySectionForHomepage";
import HeroBanner from "./components/HeroBanner";

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
