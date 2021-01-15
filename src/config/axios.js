import axios from "axios";

const axiosClient = axios.create({
  // Esta url la puse ya que era una manera de solventar ese raro problema de CORS que tiene la API ya que al mandarle el Access-Control-Allow-Origin por el header no lo toma
  baseURL: "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api",
  // baseURL: "https://comicvine.gamespot.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  params: {
    api_key: "9bb7ee31db413b18c658361e489d4244f4226b7f",
    format: "json",
  },
});

export default axiosClient;
