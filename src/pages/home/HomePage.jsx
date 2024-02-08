import React, { useEffect } from "react";
import "./style.scss";
import Button from "../../components/button/Button";
import { FaCopy } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { fetchQuotes } from "../../redux/actions/actionFetchQuotes";
import { VscRefresh } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const copyToClipboard = async (text) => {
  try {
    const permissions = await navigator.permissions.query({
      name: "clipboard-write",
    });
    if (permissions.state === "granted" || permissions.state === "prompt") {
      await navigator.clipboard.writeText(text);
      toast.info("Quote copied to clipboard !");
    } else {
      throw new Error(
        "Can't access the clipboard. Check your browser permissions."
      );
    }
  } catch (error) {
    console.error("Failed to copy quote to clipboard:", error);
    toast.error("Failed to copy quote to clipboard" + error);
  }
};

const ContainerActionsQuote = ({ data }) => {
  const { fetchedQuotes } = data;
  return (
    <div className="quote__actions">
      <Button
        idBtn="#btn-copy-quote"
        Icons={<FaCopy />}
        handleEvent={() => copyToClipboard(fetchedQuotes[0].quote)}
      />
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
      <p className="quote__category">{fetchedQuotes[0].category} Quotes</p>
      <blockquote className="quote__text">{fetchedQuotes[0].quote}</blockquote>
      <p className="quote__author">{fetchedQuotes[0].author}</p>
    </>
  );
};
function HomePage({ quote, fetchQuote }) {
  useEffect(() => {
    fetchQuote(localStorage.getItem("categoryQuote"));
  }, []);

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
        <ContainerActionsQuote data={quote} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <input
          type="text"
          name=""
          id="input-copy"
          value={quote.fetchedQuotes[0].quote}
          hidden
        />
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
