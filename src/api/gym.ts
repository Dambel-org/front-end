import { get, post } from "./methods";

export const postGymCreate = async (data: {
  name: string;
  description: string;
  city_id: number;
  address: string;
}) => {
  return await post('/gym/create', data).then((res) => res.data);
}

export const getGymList = async () => {
  return await get('/gym/list').then((res) => res.data);
}

export const getGymDetail = async (id: string) => {
  return await get(`/gym/detail/${id}`).then((res) => res.data);
}

export const getAvailableProvinceList = async () => {
  return await get('/gym/provinces').then((res) => res.data);
}

export const getCityList = async (id: string) => {
  return await get(`/gym/provinces/${id}`).then((res) => res.data);
}