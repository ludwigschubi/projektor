import axios from "axios";

export const getCurrentProfile = async (webId: string) => {
  return (await axios.get("http://localhost:3000/sessions")).data;
};
