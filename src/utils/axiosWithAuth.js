import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://todoappo.herokuapp.com/api",
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `${token}`,
        },  
    });
};



// https://cors-anywhere.herokuapp.com/
