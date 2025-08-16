import React from "react";
import "./App.css";

const ProductCard = ({ name, price, stock, url, id, description }) => {
  return (
    <div className="product-card" key={id}>
      <img src={url} alt={name} className="product-img" />
      <div className="product-info">
        <h2>{name}</h2>
        <p className="desc">{description}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p className={stock > 0 ? "in-stock" : "out-stock"}>
          {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
