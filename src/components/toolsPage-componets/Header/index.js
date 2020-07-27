import React from "react";
import Header from "../../Header/header";
import HeroSection from "./heroSection";

export default function toolsPageHeader({ title, subtitle, image }) {
  return (
    <>
      <Header title={title} subtitle={subtitle} isHomepage={false} />
      <HeroSection title={title} subtitle={subtitle} image={image} />
    </>
  );
}
