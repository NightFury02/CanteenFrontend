import axios from "axios";
import { LOCAL_URL} from "./configApi";

class OrderApi{
    async getAllOrders({ token, clientId }){
        try{
            const res = await axios.get(
                `${LOCAL_URL}`,
                {},
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

    async createOrder(listItems){
        try{
            const res = await axios.post(
                `${LOCAL_URL}/new`,
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