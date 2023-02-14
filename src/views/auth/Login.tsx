import React from 'react';
import LoginImg from 'assets/login1.jpg';
import { FA_IR } from 'language';
import { Field, Form, Formik } from 'formik';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { useLogin } from 'hooks/useLogin';

export const Login = () => {
  const { mutateAsync } = useLogin();
  const handleSubmitLogin = (values: any) => {
    mutateAsync({
      email: values.email,
      password: values.password,
    });
  };

  const [isShowPassword, setIsShowPassword] =
    React.useState(false);
  
  

  return (
    <section className="bg-gray-50 w-screen h-screen flex justify-between items-center">
      <section className="hidden xl:p-32 overflow-hidden lg:flex bg-white lg:w-[50%] xl:w-[70%] h-full justify-center items-center">
        <img
          loading="lazy"
          src={LoginImg}
          alt="login-img"
          className="w-full"
        />
      </section>
      <section className="flex-1 flex flex-col items-center justify-center text-center ">
        <section className="space-y-4">
          <h2 className="text-2xl text-indigo-900">
            {FA_IR.WelcomeToDambel}
          </h2>
          <h4 className="">{FA_IR.SignIn}</h4>
        </section>
        <section className="w-80 flex flex-col space-y-4 mt-4">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmitLogin}
          >
            <Form className="flex flex-col items-end space-y-4">
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
              <Link
                to="/auth/forgot-password"
                className="text-blue-300 text-sm"
              >
                {FA_IR.ForgotPassword}
              </Link>
              <span className="h-12" />
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                {FA_IR.Login}
              </button>
            </Form>
          </Formik>
          <span className="h-4" />
          <section className="text-sm text-right">
            <span className="text-gray-500">
              {FA_IR.DontHaveAccount}
            </span>
            <Link
              to="/auth/register"
              className="text-blue-300 mr-2"
            >
              {FA_IR.CreateAccount}
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};
