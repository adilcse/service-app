import { servicemanUrl } from "./urls";

const getServiceman = async () => {
  let persons = [];
  try {
    persons = await fetch(`${servicemanUrl}view=all`);
    persons = await persons.json();
  } catch (e) {}
  return persons.serviceman;
};
export default getServiceman;
