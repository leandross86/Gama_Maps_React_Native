import axios from 'axios';

export const contactSend =  axios.create({
  baseURL: 'https://webhook.site/8d746e8e-7d3b-4f4d-b25f-3c358c3652af'
})

export const getData = axios.create({
  baseURL: 'https://accenture-server-rn.herokuapp.com/all'
})