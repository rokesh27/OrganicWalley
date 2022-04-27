import axios from "axios";
import httpSolr from "../http-solr";

// all the code for the api requests
export function getAllProductsByType(type) {
  return axios.get(`http://localhost:9000/api/products?type=${type}`);
}
export function getAllProducts() {
  return axios.get(`http://localhost:9000/api/products`);
}

export function getAllUsers(){
    return axios.get(`http://localhost:9000/api/user`)
}

export function getAddress(){
    return axios.get(`http://localhost:9000/api/address`)
}

export function getProductsOfUser(email){
  return axios.get(`http://localhost:9000/api/products/email/${email}`)
}

export function getUserByEmail(email){
  return axios.get(`http://localhost:9000/api/user/email/${email}`)
}


export function findByName(Product_name){
  return axios.get(`http://localhost:8983/solr/Products/query?q=${Product_name}&q.op=OR&indent=true&rows=5&df=Full_name`)
}

