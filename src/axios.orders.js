import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://react-my-burger-13f6b.firebaseio.com/'

});

export default instance;
