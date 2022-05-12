import React from "react";
import { ApiCategories } from "../apiFolder/CategoryApi";
import Category from "./Category";

function Categories() {
  return (
    <div className="flex justify-between items-center">
      {ApiCategories.map((cat, i) => {
        return <Category key={i} item={cat} />;
      })}
    </div>
  );
}

export default Categories;
