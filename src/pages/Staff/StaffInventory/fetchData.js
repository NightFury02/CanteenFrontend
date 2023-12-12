import axios from 'axios'
const fetchExpiredProducts = async () => {
    const url = `https://reqres.in/api/users`;
    try {
      const res = await axios.get(url);
      const data = res.data;
      return data;
    } catch (error) {
      console.error('Error fetching expired products:', error);
    }
}

export default fetchExpiredProducts;