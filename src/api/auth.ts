import { IBaseUser } from "interfaces";
import { post } from "./methods";

export const postAuthLogin = async (data: {
  email: string;
  password: string;
}) => {
  return await post('/account/login/', data);
};

export const postAuthRegisterOwner = async (data: {
  user: IBaseUser,
  phone_number: string,
}) => {
  return await post('/account/signup/gymowner/', data);
}
export const postAuthRegisterTrainer = async (data: {
  user: IBaseUser,
  phone_number: {
    number: string,
  },  
}) => {
  return await post('/account/signup/trainer/', data);
}
export const postAuthRegisterTrainee = async (data: {
  user: IBaseUser,
  phone_number: string,
  height: number,
  weight: number,
}) => {
  return await post('/account/signup/trainee/', data);
}