import React from 'react';
import './css/StyleLogin.css';

const OwnerLogin = () => {
  return (
    <div className='wrapper'>
      <div className="row mx-auto md:w-full lg:w-4/5 ">

        <figure className="w-7/12 ">
          <img src="src/views/Owner/img/Login-pic.png" alt="Login" className="column-12" />
        </figure>

        <form action="#" className="w-5/12">
          <div>
            <h1>سلام به دمبل خوش اومدید! </h1>
            <h3>وارد شوید !</h3>
          </div>
          <div className="inputs">

            <label htmlFor="email"> آدرس ایمیل </label>
            <input type="email" name="email" className="input input-bordered w-full max-w-xs" />
            <label htmlFor="password">گذرواژه </label>
            <input type="password" name="password" className="input input-bordered w-full max-w-xs" />

          </div>
        </form>
      </div>
    </div>
  );
};
export default OwnerLogin;
