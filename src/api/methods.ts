import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})


export const get = async (url: string) => {
  return await axios.get(url).then((res) => res.data); 
}
export const post = async (url: string, data:any) => {
  return await axios.get(url, data).then((res) => res.data); 
}


