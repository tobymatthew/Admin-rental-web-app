import axios from 'axios';

// const baseURL='https://cors-anywhere.herokuapp.com/https://cargenie-app-fvi2t.ondigitalocean.app';
const baseURL='https://cargenie-app-fvi2t.ondigitalocean.app';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL
  });
  
  export const userRequest = axios.create({
    baseURL,
    // headers: { token: `Bearer ${TOKEN}` },
  });