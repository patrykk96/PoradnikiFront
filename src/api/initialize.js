import axios from 'axios';

export default () => {
    axios.defaults.baseURL = "https://localhost:44326/api" 
    axios.defaults.headers.common = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token')
      };
};