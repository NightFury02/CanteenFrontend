import axios from "axios";
import { LOCAL_URL, BASE_URL, configHeader } from "./configApi";

class UserApi {
  async register(data) {
    try {
      const res = await axios.post(`${LOCAL_URL}/auth/signup`, data);

      return res.data;
    } catch (error) {
      console.log(error);
      return {
        error: true,
        response: error?.response,
      };
    }
  }

  async login(data) {
    try {
      const res = await axios.post(`${LOCAL_URL}/auth/login`, data);

      return res.data;
    } catch (error) {
      console.log(error);
      return {
        error: true,
        response: error?.response,
      };
    }
  }

  async loginSuccess({ token, clientId }) {
    try {
      const res = await axios.post(
        `${LOCAL_URL}/auth/login-success`,
        {},
        {
          headers: configHeader({ token, clientId }),
        }
      );

      return res.data;
    } catch (error) {
      console.log(error);
      return {
        error: true,
        response: error?.response,
      };
    }
  }

  async logout({ token, clientId }) {
    try {
      const res = await axios.post(
        `${LOCAL_URL}/auth/logout`,
        {},
        {
          headers: configHeader({ token, clientId }),
        }
      );

      return res.data;
    } catch (error) {
      console.log(error);
      return {
        error: true,
        response: error?.response,
      };
    }
  }
}

export default new UserApi();
