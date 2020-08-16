import getCatagory from "../../api/getCatagories";
import {
  GET_CATAGORIES_SUCCESS,
  GET_CATAGORIES_PENDING,
  GET_CATAGORIES_FAILED,
} from "../constants";
export const getCategoriesAction = (dispatch) => {
  dispatch({ type: GET_CATAGORIES_PENDING });
  getCatagory()
    .then((result) => {
      dispatch({ type: GET_CATAGORIES_SUCCESS, payload: result });
    })
    .catch((e) => {
      dispatch({ type: GET_CATAGORIES_FAILED, payload: e });
    });
};
