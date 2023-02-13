import { post } from "./methods";

export const postGymCreate = async (data: {
  name: string;
  description: string;
  city_id: number;
  address: string;
}) => {
  return await post('/gym/create', data).then((res) => res.data);
}