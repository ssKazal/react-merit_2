import axios from 'axios';
const apiEndPoint = 'http://localhost:8000/api/products/';

export function getProducts() {
  return axios.get(apiEndPoint);
}

export function getProduct(productId) {
  return axios.get(apiEndPoint + productId + '/');
}

export function saveProduct(obj) {
  return axios.put(apiEndPoint + obj.id + '/', obj);
}
