import React from "react";
import Navbar from "../../components/Navbar";
import CategorySectionForHomepage from "./components/CategorySectionForHomepage";
import HeroBanner from "./components/HeroBanner";
import SelectingCategory from "./components/SelectingCategory";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <CategorySectionForHomepage />
      <SelectingCategory/>
    </>
  );
};

export default Homepage;
