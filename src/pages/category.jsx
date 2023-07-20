import React from "react";
import "../assets/styles/pages/catgory.page.scss";
import CategoryQuotes from "../components/CategoryQuotes";

const catagoryList = [
  "ages",
  "alone",
  "amount",
  "currency",
  "article",
  "book",
  "booking",
  "guide",
  "bussiness",
  "commmnication",
  "history",
  "immagination",
  "life",
  "love",
  "money",
  "music",
  "people",
  "politics",
  "religion",
  "science",
  "sport",
  "technology",
  "travel",
  "innovation",
  "technology",
];
export default function CategoryPage(props) {
  return (
    <main className="container__page_app" id="category__page">
      {catagoryList.map((item, index) => {
        return <CategoryQuotes key={index} titleCategory={item} />;
      })}
    </main>
  );
}
