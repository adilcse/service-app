import {
  GET_CATAGORIES_SUCCESS,
  GET_CATAGORIES_PENDING,
  GET_CATAGORIES_FAILED,
} from "../constants";

const initialState = {
  category: [],
  loading: false,
  loaded: false,
  error: false,
};
export const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CATAGORIES_PENDING:
      return { ...state, loading: true, loaded: false, error: false };
    case GET_CATAGORIES_SUCCESS:
      return {
        ...state,
        category: action.payload,
        error: false,
        loaded: true,
        loading: false,
      };
    case GET_CATAGORIES_FAILED:
      return { ...state, loading: false, loaded: true, error: action.payload };
    default:
      return { ...state };
  }
};
