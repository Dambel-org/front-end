import React from 'react';
import './css/StyleReg.css';

const OwnerReg = () => {
    return (
        <div className='wrapper h-full'>
            <div className="row mx-auto  w-full xl:w-4/6 md:p-0 ">

                <figure className="w-0 md:w-8/12  ">
                    <img src="src/views/Owner/img/Login-pic.png" alt="Login" className="column-12 hidden md:block" />
                </figure>

                <form className="w-full md:w-4/12  pb-1">

                    <div >
                        <h1>ساخت حساب کاربری</h1>
                        <h3>لطفا مشخصات خود را وارد کنید.</h3>
                    </div>

                    <div className="inputs">
                        <label htmlFor="name" className='w-full'> نام و نام خانوادگی</label>
                        <input type="text" name="name" className="input input-bordered w-full max-w-xs" required />
                        <label htmlFor="tel" className='w-full'>تلفن همراه </label>
                        <input type="tel" name="tel" className="input input-bordered w-full max-w-xs" required />
                        <label htmlFor="email" className='w-full'> آدرس ایمیل </label>
                        <input type="email" name="email" className="input input-bordered w-full max-w-xs" required />
                        <label htmlFor="password" className='w-full'>گذرواژه </label>
                        <input type="password" name="password" className="input input-bordered w-full max-w-xs" required />
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">انتخاب نقش</span>
                            </label>
                            <select className="select" name='role' required>
                                <option disabled selected>انتخاب کنید</option>
                                <option value='owner'>باشگاه دار</option>
                                <option value='trainee'>ورزش کار</option>
                                <option value='tranier'>مربی</option>
                            </select>

                        </div>
                    </div>

                    <div className="buttons">
                        <button type="submit" className="btn  w-full max-w-xs" >مرحله بعد</button>
                        <a href="" className='font-medium w-full text-blue-600 dark:text-blue-500 hover:underline'>آیا اکانت کاربری دارید ؟   وارد شوید!</a>
                        <figure>
                            <img src="src/views/Owner/img/pic.png" alt="" />
                        </figure>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default OwnerReg;
