import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:3001",
});

export const getGrapData = async (Url) => await baseUrl.get(Url);
export const chartCatog = async (Url) => await baseUrl.get(Url);
export const tableDataGet = async (Url) => await baseUrl.get(Url);
