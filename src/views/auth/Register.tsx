import { Field, Form, Formik } from 'formik';
import { FA_IR } from 'language';
import LoginImg from 'assets/login1.jpg';
import RegMap from 'assets/reg-map.svg';
import { ChangeEvent, useState } from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { Roles } from 'constants';
import { useMutation } from 'react-query';
import {
  postAuthRegisterOwner,
  postAuthRegisterTrainer,
} from 'api';
import { useLogin } from 'hooks/useLogin';

export const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(Roles.TRAINEE);
  const { mutateAsync: login } = useLogin();
  const { mutate: mutateTrainerRegister } =
    useMutation(
      ['trainer-register'],
      postAuthRegisterTrainer,
      {
        onSuccess: () => {
          navigate('/auth/login');
        },
        onError: () => {
          console.log('error');
        },
      },
    );
  const { mutateAsync: mutateOwnerRegister } =
    useMutation(
      ['owner-register'],
      postAuthRegisterOwner,
      {
        onError: () => {
          console.log('error');
        },
      },
    );
  const handleSubmitRegister = (values: any) => {
    if (role === Roles.TRAINEE) {
      navigate('/auth/register/trainee', {
        state: values,
      });
    }
    if (role === Roles.TRAINER) {
      mutateTrainerRegister({
        phone_number: {
          number: values.phoneNumber,
        },
        user: {
          email: values.email,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
        },
      });
    }
    if (role === Roles.GYM_OWNER) {
      mutateOwnerRegister({
        phone_number: values.phoneNumber,
        user: {
          email: values.email,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
        },
      }).then(() => {
        login({
          email: values.email,
          password: values.password,
        }).then(() => {
          navigate('/register/gym/submit-gym');
        });
      });
    }
  };

  const [isShowPassword, setIsShowPassword] =
    useState(false);

  return (
    <section className="bg-gray-50 overflow-hidden w-screen h-screen flex justify-between items-center">
      <section className="hidden xl:p-32 overflow-hidden lg:flex bg-white lg:w-[50%] xl:w-[70%] h-full justify-center items-center">
        <img
          loading="lazy"
          src={LoginImg}
          alt="login-img"
          className="w-full"
        />
      </section>
      <section className="flex-1 flex flex-col items-center justify-center text-center ">
        <section className="space-y-2 w-80 mt-10 md:mt-0 text-right">
          <h2 className="text-lg text-indigo-900">
            {FA_IR.CreateAccountNow}
          </h2>
          <h4 className="text-sm">
            {FA_IR.PutYourInfo}
          </h4>
        </section>
        <section className="w-80 flex flex-col space-y-4 mt-4">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSubmitRegister}
          >
            <Form className="flex flex-col items-end space-y-4">
              <section className="w-full form-control items-end">
                <label
                  htmlFor="firsName"
                  className="label"
                >
                  {FA_IR.FirstName}
                </label>
                <Field
                  type="text"
                  className="input w-full"
                  id="firstName"
                  name="firstName"
                />
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="lastName"
                  className="label"
                >
                  {FA_IR.LastName}
                </label>
                <Field
                  type="text"
                  className="input w-full"
                  id="lastName"
                  name="lastName"
                />
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="phoneNumber"
                  className="label"
                >
                  {FA_IR.MobileNumber}
                </label>
                <Field
                  type="tel"
                  className="dir-left input w-full"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="email"
                  className="label"
                >
                  {FA_IR.email}
                </label>
                <Field
                  type="email"
                  className="dir-left input w-full"
                  id="email"
                  name="email"
                />
              </section>
              <section className="relative w-full form-control items-end">
                <label
                  htmlFor="password"
                  className="label"
                >
                  {FA_IR.password}
                </label>
                <Field
                  type={
                    isShowPassword
                      ? 'text'
                      : 'password'
                  }
                  className="dir-left input w-full"
                  id="password"
                  name="password"
                />
                <button
                  type="button"
                  className="absolute top-[3.3rem] right-3"
                  onClick={() =>
                    setIsShowPassword(
                      !isShowPassword,
                    )
                  }
                >
                  {isShowPassword ? (
                    <i className="fas fa-eye-slash" />
                  ) : (
                    <i className="fas fa-eye" />
                  )}
                </button>
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="role"
                  className="label"
                >
                  {FA_IR.ChooseRole}
                </label>
                <Field
                  as="select"
                  className="text-center select w-full"
                  id="role"
                  value={role}
                  onChange={(
                    e: ChangeEvent<HTMLSelectElement>,
                  ) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value={Roles.TRAINEE}>
                    {FA_IR.Trainee}
                  </option>
                  <option value={Roles.TRAINER}>
                    {FA_IR.Trainer}
                  </option>
                  <option value={Roles.GYM_OWNER}>
                    {FA_IR.GymOwner}
                  </option>
                </Field>
              </section>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                {role === Roles.TRAINEE
                  ? FA_IR.Continue
                  : FA_IR.Register}
              </button>
            </Form>
          </Formik>

          <section className="text-sm text-center">
            <span className="text-gray-500">
              {FA_IR.AlreadyHaveAccount}
            </span>
            <Link
              to="/auth/login"
              className="text-blue-300 mr-2"
            >
              {FA_IR.SignIn}
            </Link>
          </section>
        </section>
        <img
          src={RegMap}
          loading="lazy"
          className="pt-6 hidden sm:block md:w-96"
          alt="register-map"
        />
      </section>
    </section>
  );
};
