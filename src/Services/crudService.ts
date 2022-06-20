import axios from 'axios';

const baseURL = 'http://192.168.122.1:3000/';

const getAll = () => {
  axios.get(baseURL).then((data) => {
    return data;
  })
}
const crudService = {
  getAll
}
export default crudService;