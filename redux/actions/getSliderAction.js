import {
  GET_SLIDER_PENDING,
  GET_SLIDER_FAILED,
  GET_SLIDER_SUCCESS,
} from "../constants";
import getSlider from "../../api/getSliders";

export const getSliderAction = (dispath) => {
  dispath({ type: GET_SLIDER_PENDING });
  getSlider()
    .then((res) => {
      dispath({ type: GET_SLIDER_SUCCESS, payload: res });
    })
    .catch((e) => {
      dispath({ type: GET_SLIDER_FAILED, payload: e });
    });
};
