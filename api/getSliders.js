import { sliderUrl } from "./urls";

const getSliders = async () => {
  let sliders = [];
  try {
    sliders = await fetch(`${sliderUrl}view=all`);
    sliders = await sliders.json();
  } catch (e) {
    throw e;
  }
  return sliders.slider;
};
export default getSliders;
