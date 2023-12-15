const BASE_URL = "http://localhost:8080/v1/api";

const configHeader = ({ token, clientId }) => {
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    "x-client-id": clientId,
  };
};

export { BASE_URL, configHeader };
