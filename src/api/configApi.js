const BASE_URL = "https://canteen-lzfp.onrender.com/v1/api";

const configHeader = ({ token, clientId }) => {
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    "x-client-id": clientId,
  };
};

export { BASE_URL, configHeader };
