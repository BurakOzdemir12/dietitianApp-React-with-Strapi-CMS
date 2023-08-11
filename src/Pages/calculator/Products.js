import React from "react";
import { products } from "../../Components/Json/NutritionalItems";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Products
      <div className="products">{products.map((product) => {

        return <div key={product.id}>

            <h5>{product.name}</h5>
            <Link to={`/products/${product.name}`} > more info
            </Link>
        </div>
      })}</div>
    </div>
  );
};

export default Products;
