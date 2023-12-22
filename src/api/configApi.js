const BASE_URL = "https://canteen-lzfp.onrender.com/v1/api";
const ORDER_URL = "http://localhost:8080/v1/api/order/";

const configHeader = ({ token, clientId }) => {
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    "x-client-id": clientId,
  };
};

export { BASE_URL, ORDER_URL, configHeader };
