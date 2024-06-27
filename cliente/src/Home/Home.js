// components/Home.js
import React, { useState } from "react";
import Navigation from "../Navigation/Nav";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../components/Card";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(query.toLowerCase())
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = () => {
    let filteredProducts = filteredItems;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    return filteredProducts.map(({ _id, image, name, price, category }) => (
      <Card
        key={_id}
        img={image}
        title={name}
        price={price}
        category={category}
      />
    ));
  };

  const result = filteredData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
};

export default Home;
