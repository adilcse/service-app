import {
  GET_SLIDER_PENDING,
  GET_SLIDER_FAILED,
  GET_SLIDER_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  loaded: false,
  sliders: [],
  error: false,
};
export const sliderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SLIDER_PENDING:
      return { ...state, loading: true, loaded: false, error: false };
    case GET_SLIDER_FAILED:
      return { ...state, loaded: true, loading: false, error: action.payload };
    case GET_SLIDER_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        error: false,
        sliders: action.payload,
      };
    default:
      return { ...state };
  }
};
