import { FA_IR_ERROR } from 'language';
import * as yup from 'yup';

export const LOGIN_VALIDATION = yup.object().shape({
  email: yup.string().email(FA_IR_ERROR.ImproperEmailFormat).required(FA_IR_ERROR.EmailRequired),
  password: yup.string().required(FA_IR_ERROR.PasswordRequired),
})

export const REGISTER_VALIDATION = yup.object().shape({
  firstName: yup.string().required(FA_IR_ERROR.FirstNameRequired),
  lastName: yup.string().required(FA_IR_ERROR.LastNameRequired),
  phoneNumber: yup.string().min(11,FA_IR_ERROR.MobileNumberLength).required(FA_IR_ERROR.MobileNumberRequired),
  email: yup.string().email(FA_IR_ERROR.ImproperEmailFormat).required(FA_IR_ERROR.EmailRequired),
  password: yup.string().required(FA_IR_ERROR.PasswordRequired),
});

export const BMI_VALIDATION = yup.object().shape({
  height: yup.number().required(FA_IR_ERROR.HeightRequired),
  weight: yup.number().required(FA_IR_ERROR.WeightRequired),
})

export const SUBMIT_GYM_VALIDATION = yup.object().shape({
  name: yup
    .string()
    .required(FA_IR_ERROR.GymNameRequired),
  description: yup
    .string()
    .required(FA_IR_ERROR.GymDescriptionRequired),
  address: yup
    .string()
    .required(FA_IR_ERROR.FullAddressRequired),
});