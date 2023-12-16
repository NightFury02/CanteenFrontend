import axios from "axios";
import { BASE_URL} from "./configApi";

class OrderApi{
    async getOrderDetail(id){
        try{
            const orderDetail = await axios.get(`${BASE_URL}/order/details`)
        }
        catch(e){

        }
    }
}