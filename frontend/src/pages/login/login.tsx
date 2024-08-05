// libraries
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// icons
import { IoArrowBackCircle } from "react-icons/io5";

const Login: FC = () => {
    return (
        <div className='relative flex flex-row w-screen h-screen bg-slate-600'>
            <Link to='/'><IoArrowBackCircle className='fixed top-0 left-0 size-20 md:text-white text-black hover:cursor-pointer'/></Link>
            <section className='hidden flex-col h-full w-1/2 md:flex' style={{ backgroundImage: 'url(https://ideogram.ai/assets/image/lossless/response/8KofQGyyQvO7vOJMiMyzPA)', backgroundPosition: 'center', backgroundSize:'cover' }} />
            <section className='flex flex-col h-full w-full md:w-1/2 gap-5 place-content-center items-center bg-white'>
                <p className='font-Montserrat font-bold text-4xl'>Login</p>
                <input
                    type='text'
                    className='w-80 bg-slate-300 h-12 text-center font-Montserrat'
                    placeholder='👤 username'
                />
                <input
                    type='password'
                    className='w-80 bg-slate-300 h-12 text-center font-Montserrat'
                    placeholder='🔒 password'
                />
                <p className='font-Lato'>
                    Don't have an account yet? <Link to='/register' className='text-sky-500'>Register!</Link>
                </p>
                <button className='btn-start font-Montserrat font-bold self-center'>Login</button>
            </section>
        </div>
    );
};

export default Login;
