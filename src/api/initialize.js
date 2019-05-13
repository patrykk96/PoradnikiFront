import axios from 'axios';

export default () => {
    axios.defaults.baseURL = "https://localhost:44326/api" 
    axios.defaults.headers.post = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token'),
      };
      axios.defaults.headers.get = {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token'),
      };
};