import { Field, Form, Formik } from 'formik';
import { FA_IR } from 'language';
import {
  Navigate,
  useLocation,
} from 'react-router-dom';

export const TraineeBMI = () => {
  const location = useLocation();
  const baseUserData = location.state;

  console.log(baseUserData);
  if (!baseUserData) {
    return <Navigate to="/auth/register" />;
  }
  const handleTraineeRegister = (values: any) => {
    console.log(values);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gray-50">
      <section className="w-80">
        <Formik
          onSubmit={handleTraineeRegister}
          initialValues={{ height: 0, weight: 0 }}
        >
          <Form className="flex flex-col items-end space-y-4">
            <section className="flex space-x-10">
              <section className="w-full relative form-control items-end">
                <label
                  htmlFor="height"
                  className="label"
                >
                  {FA_IR.Height}
                </label>
                <Field
                  type="number"
                  className="input w-full"
                  id="height"
                  name="height"
                />
                <span className="absolute top-[3.3rem] right-3">
                  CM
                </span>
              </section>
              <section className="w-full relative form-control items-end">
                <label
                  htmlFor="weight"
                  className="label"
                >
                  {FA_IR.Weight}
                </label>
                <Field
                  type="number"
                  className="input w-full"
                  id="weight"
                  name="weight"
                />
                <span className="absolute top-[3.3rem] right-3">
                  KG
                </span>
              </section>
            </section>
            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              {FA_IR.Register}
            </button>
          </Form>
        </Formik>
      </section>
    </section>
  );
};
