import React, { useState } from "react";
import Header from "../../components/Header/header";
import Categories from "../../components/categories/index";
import Cards from "../../components/card";
import CardsData from "../../configs/cards.config";
import CategoriesData from "../../configs/categories.config";
import Footer from "../../components/Footer";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("");

  const CategorySwitch = () => {
    if (activeCategory === "Google") {
      return <Cards type="Google" data={CardsData.Google} />;
    } else if (activeCategory === "Instagram") {
      return <Cards type="Instagram" data={CardsData.Instagram} />;
    } else {
      return (
        <>
          <Cards type="Instagram" data={CardsData.Instagram} />
          <Cards type="Google" data={CardsData.Google} />
        </>
      );
    }
  };
  function categoryChange(name) {
    if (name === "Instagram") {
      setActiveCategory("Instagram");
    } else if (name === "Google") {
      setActiveCategory("Google");
    } else {
      setActiveCategory("");
    }
  }
  return (
    <>
      <Header isHomepage={true} />
      <Categories setcategory={categoryChange} data={CategoriesData} />
      <CategorySwitch />
      {/* <Cards type="Instagram" data={CardsData.Instagram} />
      <Cards type="Google" data={CardsData.Google} /> */}
      <Footer />
    </>
  );
}
