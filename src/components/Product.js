import React from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const Product = () => {
  const products = [
    {
      name: "Wedsta",
      location: "Indore",
      paragraph: "WMG At Home, Family Makeup Services",
      image: "/images/img5.jpeg",
      style: {
        backgroundImage: "url('/images/img1.jpeg')",
      },
    },
    {
      name: "Genie Services",
      location: "Dewas",
      paragraph: "Plan your dream wedding in your budget",
      image: "/images/img6.jpeg",
      style: {
        backgroundImage: "url('/images/img2.jpeg')",
      },
    },
    {
      name: "Venue Booking Service",
      location: "Mhow",
      paragraph: "Best Price Guaranteed",
      image: "/images/img7.jpeg",
      style: {
        backgroundImage: "url('/images/img3.jpeg')",
      },
    },
    {
      name: "Destination Wedding",
      location: "Dhar",
      paragraph: "Tours and Trips for Destination Wedding",
      image: "/images/img8.jpeg",
      style: {
        backgroundImage: "url('/images/img4.jpeg')",
      },
    },
  ];

  return (
    <div className="product-section">
      <h1>Featured Travel Pros</h1>
      <p>Popular exclusive listings in our directory</p>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} myStyle={product.style} />
        ))}
      </div>
    </div>
  );
};

export default Product;
