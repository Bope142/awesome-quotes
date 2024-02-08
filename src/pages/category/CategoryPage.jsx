import React from "react";
import "./style.scss";
import SquareCategory from "../../components/categorySquare/SquareCategory";
import { categoryQuote } from "../../utils/categorieQuote";
function CategoryPage() {
  return (
    <main className="catgory__page">
      {categoryQuote.map((item) => (
        <SquareCategory key={item} title={item} />
      ))}
    </main>
  );
}

export default CategoryPage;
