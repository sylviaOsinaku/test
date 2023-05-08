import React from "react";
import { Link } from "react-router-dom";
const products = [
  {
    name: "HP Laptop",
    price: 300,
    link: "hp",
  },
  {
    name: "Dell Laptop",
    price: 300,
    link: "dell",
  },
  {
    name: "Apple Laptop",
    price: 300,
    link: "apple",
  },
  {
    name: "Lenovo Laptop",
    price: 300,
    link: "lenovo",
  },
];
const Shop = function () {
  return (
    <div className="d-flex py-5 container ">
      {products.map((product, i) => {
        return (
          <Link to={`/shop/${product.link}`} style={{ textDecoration: "none" }}>
            <div className="product-wrapper px-5 mx-3" key={i}>
              <div>
                Name: <span>{product.name}</span>
              </div>
              <div>
                Price: <span>{product.price}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Shop;
