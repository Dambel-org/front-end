import RegImg from 'assets/reg4-post.png';
import RegMap from 'assets/reg-map.svg';

import { Field, Form, Formik } from 'formik';
import { FA_IR } from 'language';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PostCode = () => {
  const navigate = useNavigate();
  const [province, setProvince] =
    useState<string>('');
  const [city, setCity] = useState<string>('');
  const handleSubmitGym = (values: any) => {
    // submit postcode
    navigate('/dashboard');
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
        <section className="space-y-6 text-indigo-900 w-80 mt-10 md:mt-0 text-right">
          <h2 className="text-lg ">
            {FA_IR.SendDocuments}
          </h2>
          <p className="bg-white p-4 rounded-lg text-sm">
            {FA_IR.SendDocumentsDesc}
          </p>
        </section>
        <section className="w-80 flex flex-col space-y-4 mt-4">
          <Formik
            initialValues={{
              postalCode: '',
            }}
            onSubmit={handleSubmitGym}
          >
            <Form className="text-right flex flex-col items-end space-y-6">
              <section>
                <h4 className="text-orange-400">
                  {FA_IR.RequiredDocs}
                </h4>
                <ul
                  dir="rtl"
                  className='mt-4'
                >
                  {FA_IR.RequiredDocsDesc.map(
                    (item, index) => (
                      <li>
                        {`${index + 1}. ${item}`}
                      </li>
                    ),
                  )}
                </ul>
              </section>
              <section className="w-full form-control items-end">
                <label
                  htmlFor="postalCode"
                  className="label"
                >
                  {FA_IR.PostCode}
                </label>
                <Field
                  type="text"
                  className="input w-full"
                  id="postalCode"
                  name="postalCode"
                />
              </section>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                {FA_IR.Send}
              </button>
            </Form>
          </Formik>
        </section>
        <span className="h-20" />
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
