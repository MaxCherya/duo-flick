// libraries
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

// icons
import { IoArrowBackCircle } from "react-icons/io5";

const Login = ({ history }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [incor, setIncor] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await authService.login(username, password);
          navigate('/menu');
        } catch (error) {
          console.error("Failed to login", error);
          setIncor(true);
        }
      };

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
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    className='w-80 bg-slate-300 h-12 text-center font-Montserrat'
                    placeholder='🔒 password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                { incor ? <p className='font-Montserrat text-red-600'>Your username or password is incorrect.</p> : null }
                <p className='font-Lato'>
                    Don't have an account yet? <Link to='/register' className='text-sky-500'>Register!</Link>
                </p>
                <button className='btn-start font-Montserrat font-bold self-center' onClick={handleLogin}>Login</button>
            </section>
        </div>
    );
};

export default Login;
