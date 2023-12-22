import axios from "axios";
import { ORDER_URL} from "./configApi";

class OrderApi{
    async getAllOrders({ token, clientId }){
        try{
            const orders = await axios.get(
                `${ORDER_URL}`,
                {},
                {
                    headers: configHeader({ token, clientId }),
                }
            );
            return orders.data;
        }
        catch(e){

        }
    }

    async createOrder(id){
        try{
            const orderDetail = await axios.get(`${ORDER_URL}/new`);
            console.log(orderDetail);
        }
        catch(e){

        }
    }
}

export default new OrderApi();