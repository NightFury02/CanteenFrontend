import axios from "axios";
import { BASE_URL, LOCAL_URL, configHeader} from "./configApi";

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
            const headers = configHeader({ token, clientId });
            console.log('Request Headers:', headers);
            const res = await axios.patch(
                `${LOCAL_URL}/order/confirm-payment/${orderID}`,
                {}, // Set the request body to null since you don't have any data to send
                {
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

    async getAllOrdersOfUser({ token, clientId }, userID){
        try{
            const res = await axios.post(
                `${ORDER_URL}/new`,
                listItems,
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
}

export default new OrderApi();