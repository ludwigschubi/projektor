import axios from "axios";

export const getActiveSessions = async () => {
  return (await axios.get("http://localhost:3000/sessions")).data;
};

export const logOutOfSession = async (sessionId: string) => {
  return (await axios.get("http://localhost:3000/logout")).data;
};
