import React from "react";
import Aboutus from "../components/layouts/Aboutus";
import Hero from "../components/layouts/Hero";
import Whatwedo from "../components/layouts/Whatwedo";
import Projectsdone from "../components/layouts/Projectsdone";
import CTABanner from "../components/layouts/CTABanner";
import News from "../components/layouts/News";
import Events from "../components/layouts/Events";


const Home = () => {
  return (
    <div>
      <Hero />
      <Aboutus />
      <Whatwedo />
      <Projectsdone />
      <CTABanner />
      
      <News />
      <Events />
      
    </div>
  );
};

export default Home;
