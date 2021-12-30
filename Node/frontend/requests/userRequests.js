import fetchRequest from "../fetchRequest";

export const getAllUsers = async () => {
  const url = '/users';
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  };
  return fetchRequest(url, options);
};