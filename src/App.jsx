import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      stock: 12,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c7eDucuVczFahOVPs7vcpeDZIyPHPc2Ypg&s",
      description: "Noise-cancelling over-ear wireless headphones."
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      stock: 5,
      url: "https://modernelectronics.pk/cdn/shop/files/Vivo-Y19s-Glacier-Blue-1.png?v=1744108869",
      description: "Latest model smartphone with OLED display."
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1299.99,
      stock: 3,
      url: "https://m.media-amazon.com/images/I/71OyrTkxpGL.jpg",
      description: "High performance laptop designed for gaming."
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 249.99,
      stock: 8,
      url: "https://dukaan.b-cdn.net/700x700/webp/media/5380f5c3-12e6-4750-a9c1-be89905699ac.jpg",
      description: "Fitness tracking and notifications on your wrist."
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: 20,
      url: "https://static.webx.pk/files/19643/Images/sony-srs-xb100-wireless-speaker-price-in-pakistan-junaidtech-19643-2257568-191124091125916.jpg",
      description: "Portable speaker with deep bass and clear sound."
    },
    {
      id: 6,
      name: "4K Monitor",
      price: 399.99,
      stock: 7,
      url: "https://static.webx.pk/files/19643/Images/asus-rog-swift-oled-pg32ucdp-monitor-price-in-pakistan-junai-19643-2293888-080125013203633.jpg",
      description: "Ultra HD monitor with vibrant colors."
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: 89.99,
      stock: 15,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMxMO4WXhpVDBzU_bpTgF_8mb1md8uk03dg&s",
      description: "RGB backlit keyboard with tactile switches."
    },
    {
      id: 8,
      name: "Gaming Mouse",
      price: 49.99,
      stock: 10,
      url: "https://eezepc.com/wp-content/uploads/2019/05/910-005439-3.jpg",
      description: "Ergonomic mouse with customizable buttons."
    },
    {
      id: 9,
      name: "Drone",
      price: 499.99,
      stock: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pHzAtgXfUgRnVgWq051bOcjjELSW6oDuaA&s",
      description: "Capture stunning aerial photos and videos."
    },
    {
      id: 10,
      name: "Action Camera",
      price: 199.99,
      stock: 6,
      url: "https://m.media-amazon.com/images/I/81oTtNYt1vL._AC_SL1500_.jpg",
      description: "Waterproof action cam with 4K recording."
    }
  ];

  return (
    <div className="app">
      <h1 className="title">Product Catalog</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
