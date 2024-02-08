import React, { useEffect } from "react";
import "./style.scss";
import Button from "../../components/button/Button";
import { FaCopy } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { fetchQuotes } from "../../redux/actions/actionFetchQuotes";
import { VscRefresh } from "react-icons/vsc";
const ContainerActionsQuote = () => {
  return (
    <div className="quote__actions">
      <Button idBtn="#btn-copy-quote" Icons={<FaCopy />} />
      <Button idBtn="#btn-like-quote" Icons={<BiSolidLike />} />
      <Button idBtn="#btn-share-quote" Icons={<FaShareAlt />} />
    </div>
  );
};
const ContainerNavigationQoute = ({ refreshQuoteEvent }) => {
  const refreshQuote = () => {
    refreshQuoteEvent(localStorage.getItem("categoryQuote"));
  };
  return (
    <div className="navigation__quote_list">
      <Button
        idBtn="#btn-next-quote"
        Icons={<VscRefresh />}
        handleEvent={refreshQuote}
      />
    </div>
  );
};
const ContainerViewQuote = ({ data }) => {
  const { fetchedQuotes } = data;
  return (
    <>
      <p className="quote__category">{fetchedQuotes[0].category} Qoutes</p>
      <p className="quote__text">{fetchedQuotes[0].quote}</p>
      <p className="quote__author">{fetchedQuotes[0].author}</p>
    </>
  );
};
function HomePage({ quote, fetchQuote }) {
  useEffect(() => {
    fetchQuote(localStorage.getItem("categoryQuote"));
  }, []);
  console.log(quote.fetchedQuotes.length);
  const quoteContainer =
    quote.fetchedQuotes.length > 0 ? (
      <main className="home__page">
        <div className="quote__content">
          <ContainerViewQuote data={quote} />
          <ContainerNavigationQoute
            refreshQuoteEvent={fetchQuote}
            loading={quote}
          />
        </div>
        <ContainerActionsQuote />
      </main>
    ) : (
      <main className="home__page isLoading">
        <div className="loader"></div>
      </main>
    );
  return quoteContainer;
}

const mapStateToProps = (state) => {
  return {
    quote: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (category) => dispatch(fetchQuotes(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
