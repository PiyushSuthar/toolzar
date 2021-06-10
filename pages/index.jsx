import React, { useState } from "react";
import Header from "../components/Header/header";
import Categories from "../components/categories/index";
import Cards from "../components/card";
import CardsData from "../configs/cards.config";
import CategoriesData from "../configs/categories.config";
import Footer from "../components/Footer";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("");

  const CategorySwitch = () => {
    switch (activeCategory) {
      case "Google":
        return <Cards type="Google" data={CardsData.Google} />;
      case "Instagram":
        return <Cards type="Instagram" data={CardsData.Instagram} />;
      default:
        return (
          <>
            <Cards type="Instagram" data={CardsData.Instagram} />
            <Cards type="Google" data={CardsData.Google} />
          </>
        );
    }
  };
  function categoryChange(name) {
    switch (name) {
      case "Instagram":
        setActiveCategory("Instagram");
        break;

      case "Google":
        setActiveCategory("Google");
        break;

      default:
        setActiveCategory("");
        break;
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
