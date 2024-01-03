import axios from "axios";
import { BASE_URL, LOCAL_URL, configHeader} from "./configApi";

class ReportApi{
    async createDailyInventoryReport({ token, clientId }){
        try{
            const res = await axios.post(`${LOCAL_URL}/report/inventoryD/new`,
            {
                "userId": clientId,
            },
            {
                headers: configHeader({ token, clientId }),
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
            return {
              error: true,
              response: error?.response,
            };
        }
    }

    async createDailyIncomeReport({ token, clientId }){
        try{
            const res = await axios.post(`${LOCAL_URL}/report/incomeD/new`,
            {
                "userId": clientId,
            },
            {
                headers: configHeader({ token, clientId }),
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
            return {
              error: true,
              response: error?.response,
            };
        }
    }

    async createMonthlyIncomeReport({ token, clientId }){
        try{
            const res = await axios.post(`${LOCAL_URL}/report/incomeM/new`,
            {
                "userId": clientId,
            },
            {
                headers: configHeader({ token, clientId }),
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
            return {
              error: true,
              response: error?.response,
            };
        }
    }

    async getAllDailyInventoryReport({ token, clientId }){
        try{
            const res = await axios.get(`${LOCAL_URL}/report/inventoryD/all`, {
                headers: configHeader({ token, clientId }),
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
            return {
              error: true,
              response: error?.response,
            };
        }
    }

    async getAllDailyIncomeReport({ token, clientId }){
        try{
            const res = await axios.get(`${LOCAL_URL}/report/incomeD/all`, {
                headers: configHeader({ token, clientId }),
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
            return {
              error: true,
              response: error?.response,
            };
        }
    }

    async getAllMonthlyIncomeReport({ token, clientId }){
        try{
            const res = await axios.get(`${LOCAL_URL}/report/incomeM/all`, {
                headers: configHeader({ token, clientId }),
            });
            return res.data;
        }
        catch (error) {
            console.log(error);
            return {
              error: true,
              response: error?.response,
            };
        }
    }
}

export default new ReportApi();