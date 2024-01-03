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

  async updateInfo({ token, clientId }, attributes, password) {
    try {
      const res = await axios.post(
        `${LOCAL_URL}/user`,
        {
          "attributes": attributes,
          "password": password
        },
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

  async getStaffList({ token, clientId }) {
    try {
      const res = await axios.get(
        `${LOCAL_URL}/staffs`,
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

  async deleteStaff({ token, clientId }, staffId) {
    try {
      const res = await axios.delete(
        `${LOCAL_URL}/staff/${staffId}`,
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
