import axios from 'axios';
import config from '../config/config';
console.log("import.meta.env ",import.meta.env);
const instance = axios.create({ baseURL: config.baseURL });
export default instance;

