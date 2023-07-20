import React from "react";
import "../assets/styles/pages/catgory.page.scss";
import CategoryQuotes from "../components/CategoryQuotes";

const catagoryList = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
export default class CategoryPage extends React.Component {
  componentDidMount() {
    document
      .querySelectorAll(".category__card")
      [catagoryList.indexOf(this.props.content.category)].classList.add(
        "selected_category"
      );
  }
  render() {
    return (
      <main className="container__page_app" id="category__page">
        {catagoryList.map((item, index) => {
          return (
            <CategoryQuotes
              key={index}
              titleCategory={item}
              changeEvent={this.props.content.onDataChange}
            />
          );
        })}
      </main>
    );
  }
}
