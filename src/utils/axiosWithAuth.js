import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://todoappo.herokuapp.com/api",
        headers:{
            'Access-Control-Allow-Headers: Origin, Content-Type': 'application/json',
            Authorization: `${token}`,
        },  
    });
};



// https://cors-anywhere.herokuapp.com/
