import React from "react";
import "./Category.css";
import Input from "../../components/Input";

// categorías de productos
const categories = ["Zapatillas", "Gorra", "Mochila"];

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>
        {categories.map((category) => (
          <Input
            key={category}
            handleChange={handleChange}
            value={category.toLowerCase()}
            title={category}
            name="category"
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
