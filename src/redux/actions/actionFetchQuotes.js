import {
  FETCH_QUOTES_LOADING,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_ERROR,
} from "../constants";

import axios from "axios";

const fetchQuotesLoading = () => {
  return {
    type: FETCH_QUOTES_LOADING,
  };
};

const fetchQuotesSuccess = (data) => {
  return {
    type: FETCH_QUOTES_SUCCESS,
    payload: data,
  };
};

const fetchQuotesError = (error) => {
  return {
    type: FETCH_QUOTES_ERROR,
    payload: error,
  };
};

export const fetchQuotes = (category) => {
  return (dispatch) => {
    dispatch(fetchQuotesLoading);
    axios
      .get("https://api.api-ninjas.com/v1/quotes?category=" + category, {
        headers: {
          "X-Api-Key": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const quoteItems = response.data;

        dispatch(fetchQuotesSuccess(quoteItems));
      })
      .catch((error) => {
        console.error("Error: ", error);
        dispatch(fetchQuotesError(error.message));
      });
  };
};
