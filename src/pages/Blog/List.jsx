import React from "react";
import Card from "../../components/Blog/Card";
import HeroSection from "../../components/Blog/HeroSection";

function ListBlog() {
  return (
    <div>
      <HeroSection />
      <div className="mb-20">
        <Card />
      </div>
    </div>
  );
}

export default ListBlog;
