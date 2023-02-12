import RegImg from 'assets/reg2.jpg';
import RegMap from 'assets/reg-map.svg';

import { Field, Form, Formik } from 'formik';
import { FA_IR } from 'language';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SubmitPrimaryGym = () => {
  const navigate = useNavigate();
  const [province, setProvince] =
    useState<string>('');
  const [city, setCity] = useState<string>('');
  const handleSubmitGym = (values: any) => {
    // submit gymdata
    navigate('/register/gym/pcode');
  };
  return (
    <section className="bg-gray-50 overflow-hidden w-screen h-screen flex justify-between items-center">
      <section className="hidden xl:p-32 overflow-hidden lg:flex bg-white lg:w-[50%] xl:w-[70%] h-full justify-center items-center">
        <img
          loading="lazy"
          src={RegImg}
          alt="login-img"
          className="w-full"
        />
      </section>
      <section className="flex-1 flex flex-col items-center justify-center text-center ">
        <section className="space-y-2 w-80 mt-10 md:mt-0 text-right">
          <h2 className="text-lg text-indigo-900">
            {FA_IR.NewGymRegister}
          </h2>
          <h4 className="text-sm">
            {FA_IR.PutYourGymInfo}
          </h4>
        </section>
        <section className="w-80 flex flex-col space-y-4 mt-4">
          <Formik
            initialValues={{
              address: '',
            }}
            onSubmit={handleSubmitGym}
          >
            <Form className="flex flex-col items-end space-y-4">
              <section className="w-full form-control items-end">
                <label
                  htmlFor="province"
                  className="label"
                >
                  {FA_IR.Province}
                </label>
                <Field
                  as="select"
                  className="text-center select w-full"
                  id="province"
                  value={province}
                  onChange={(
                    e: ChangeEvent<HTMLSelectElement>,
                  ) => {
                    setProvince(e.target.value);
                  }}
                >
                  <option value="none">
                    {FA_IR.NoOption}
                  </option>
                </Field>
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="province"
                  className="label"
                >
                  {FA_IR.City}
                </label>
                <Field
                  as="select"
                  className="text-center select w-full"
                  id="city"
                  value={city}
                  onChange={(
                    e: ChangeEvent<HTMLSelectElement>,
                  ) => {
                    setCity(e.target.value);
                  }}
                >
                  <option value="none">
                    {FA_IR.NoOption}
                  </option>
                </Field>
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="address"
                  className="label"
                >
                  {FA_IR.FullAddress}
                </label>
                <Field
                  as="textarea"
                  className="textarea resize-none w-full"
                  id="city"
                  value={city}
                  onChange={(
                    e: ChangeEvent<HTMLSelectElement>,
                  ) => {
                    setCity(e.target.value);
                  }}
                >
                  <option value="none">
                    {FA_IR.NoOption}
                  </option>
                </Field>
              </section>
              <span className='h-12' />
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                {FA_IR.RegisterGym}
              </button>
            </Form>
          </Formik>
        </section>
        <span className='h-16' />
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
