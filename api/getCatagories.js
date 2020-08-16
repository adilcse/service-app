import { catagoryUrl } from "./urls";

const getCatagory = async () => {
  let catagories = [];
  try {
    catagories = await fetch(`${catagoryUrl}view=all`);
    catagories = await catagories.json();
  } catch (e) {
    throw e;
  }
  return catagories.category;
};
export default getCatagory;
