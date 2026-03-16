import React from "react";
import BlogForm from "../../components/BlogForm/BlogForm";
import BlogView from "../../components/BlogView/BlogView";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
     
     <HeroSection/>
     <FeatureSection/>
     <Subscribe/>
     
    </div>
  );
};

export default Home;
