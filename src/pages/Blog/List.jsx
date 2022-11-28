import React from "react";
import CardBlog from "../../components/Blog/CardBlog";
import HeroSection from "../../components/Blog/HeroSection";

function ListBlog() {
  return (
    <div>
      <HeroSection />
      <div className="mb-20">
        <CardBlog />
      </div>
    </div>
  );
}

export default ListBlog;
