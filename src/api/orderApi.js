import axios from "axios";
import { BASE_URL, LOCAL_URL, configHeader } from "./configApi";

class OrderApi{
    async getAllOrders({ token, clientId }){
        try{
            const res = await axios.get(`${LOCAL_URL}/order`,{
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

    async getAllPendingOrders({ token, clientId }){
        try{
            const res = await axios.get(`${LOCAL_URL}/order/pending`,{
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

    async createOrder({ token, clientId }, listItems, timeReceive){
        try{
            const res = await axios.post(`${LOCAL_URL}/order/new`,
                {
                    "listItems": listItems,
                    "timeReceive": timeReceive
                },
                {
                    headers: configHeader({ token, clientId })
                }
            );
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

    async confirmPayment({ token, clientId }, orderID){
        try{
            const res = await axios.post(`${LOCAL_URL}/order/confirm-payment/${orderID}`,{
                    headers: configHeader({ token, clientId }),
                }
            );
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

    async getAllOrdersOfUser({ token, clientId }){
        try{
            const res = await axios.get(`${LOCAL_URL}/order/${clientId}`, {
                    headers: configHeader({ token, clientId })
                }
            );
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

    async getOrderDetail({ token, clientId }, orderID){
        try{
            const res = await axios.get(`${LOCAL_URL}/order/details?${orderID}`, {
                    headers: configHeader({ token, clientId })
                }
            );
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

    async deleteOrder({ token, clientId }, orderID){
        try{
            const res = await axios.delete(`${LOCAL_URL}/order/${orderID}`, {
                    headers: configHeader({ token, clientId })
                }
            );
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

export default new OrderApi();