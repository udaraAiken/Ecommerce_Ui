import React from "react";
import { ApiTopProducts } from "../apiFolder/TopProductsApi";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-wrap p-5">
      {ApiTopProducts.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </div>
  );
};

export default Products;
