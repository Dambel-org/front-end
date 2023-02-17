import { postAuthRegisterTrainee } from 'api';
import { BMI_VALIDATION } from 'constants';
import { Field, Form, Formik } from 'formik';
import { FA_IR, FA_IR_ERROR } from 'language';
import { useMutation } from 'react-query';
import {
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

export const TraineeBMI = () => {
  const location = useLocation();
  const baseUserData = location.state;
  const navigate = useNavigate();
  const { mutate: mutateTraineeRegister } =
    useMutation(
      ['trainee-reigster'],
      postAuthRegisterTrainee,
      {
        onSuccess: () => {
          toast.success(FA_IR_ERROR.RegisterSuccess);
          navigate('/trainee/dashboard');
        },
      },
    );

  if (!baseUserData) {
    return <Navigate to="/auth/register" />;
  }
  const handleTraineeRegister = (values: any) => {
    mutateTraineeRegister({
      height: values.height,
      weight: values.weight,
      phone_number: baseUserData.phoneNumber,
      user: {
        email: baseUserData.email,
        first_name: baseUserData.firstName,
        last_name: baseUserData.lastName,
        password: baseUserData.password,
      },
    });
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gray-50">
      <section className="w-80">
        <Formik
          onSubmit={handleTraineeRegister}
          initialValues={{ height: 0, weight: 0 }}
          validationSchema={BMI_VALIDATION}
        >
          {({ errors, touched }) => (
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
                    className="dir-left input w-full"
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
                    className="dir-left input w-full"
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
              <ul className="dir-right grid grid-cols-2 place-items-center w-full">
                {Object.entries(errors).map(
                  ([key, value]) =>
                    !!value &&
                    // @ts-ignore
                    touched[key] && (
                      <li
                        key={key}
                        className="text-red-500 text-sm whitespace-nowrap"
                      >
                        {value}
                      </li>
                    ),
                )}
              </ul>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};
