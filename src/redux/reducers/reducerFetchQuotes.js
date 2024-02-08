import {
  FETCH_QUOTES_LOADING,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_ERROR,
} from "../constants";

const initialState = {
  isLoading: false,
  fetchedQuotes: [],
  error: "",
};

const reducerFetchedQuotes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_LOADING:
      return {
        ...state,
        isLoading: true,
        fetchedQuotes: [],
      };

    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchedQuotes: action.payload,
        error: "",
      };

    case FETCH_QUOTES_ERROR:
      return {
        ...state,
        isLoading: false,
        fetchedQuotes: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducerFetchedQuotes;
