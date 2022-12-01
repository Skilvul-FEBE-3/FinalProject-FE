import React from "react";
import Card from "../../components/Home/Card";
import Comment from "../../components/Home/Comment";
import HeroSection from "../../components/Home/HeroSection";
import HeroSection2 from "../../components/Home/HeroSection2";
import HeroSection3 from "../../components/Home/HeroSection3";
import Maps from "../../components/Home/Maps";
import Layout from "../Layout";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <HeroSection3 />

      <HeroSection2 />
      <Comment />
      {/* <Card />
      <Maps /> */}
    </Layout>
  );
}

export default Home;
