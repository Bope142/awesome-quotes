import React from "react";
import "./style.scss";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import Button from "../../components/button/Button";
import { FaCopy } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
const ContainerActionsQuote = () => {
  return (
    <div className="quote__actions">
      <Button idBtn="#btn-copy-quote" Icons={<FaCopy />} />
      <Button idBtn="#btn-like-quote" Icons={<BiSolidLike />} />
      <Button idBtn="#btn-share-quote" Icons={<FaShareAlt />} />
    </div>
  );
};
const ContainerNavigationQoute = () => {
  return (
    <div className="navigation__quote_list">
      <Button idBtn="#btn-prev-quote" Icons={<FaCircleChevronLeft />} />
      <Button idBtn="#btn-next-quote" Icons={<FaChevronCircleRight />} />
    </div>
  );
};
const ContainerViewQuote = () => {
  return (
    <>
      {" "}
      <p className="quote__category">Money Qoutes</p>
      <p className="quote__text">
        Genius is one percent inspiration and ninety-nine percent perspiration
      </p>
      <p className="quote__author">- Thomas Edjison</p>
    </>
  );
};
function HomePage() {
  return (
    <main className="home__page">
      <div className="quote__content">
        <ContainerViewQuote />
        <ContainerNavigationQoute />
      </div>
      <ContainerActionsQuote />
    </main>
  );
}

export default HomePage;
