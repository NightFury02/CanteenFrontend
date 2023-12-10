import axios from 'axios';
const fetchExpired = async () => {
    try {
      let result = [];
      let page = 1;
  
      const initialResponse = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=10`);
      const { data, total_pages } = initialResponse.data;
      result = result.concat(data);
  
      while (page < total_pages) {
        page++;
        const res = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=10`);
        result = result.concat(res.data.data);
      }
      console.log(result);
  
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
};
  
export default fetchExpired;
  