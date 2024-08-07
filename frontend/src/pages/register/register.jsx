// libraries
import React, { useState } from 'react'
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

// styles
import './register.scss'

const Register = ({ history }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.register(username, password, image);
            navigate('/menu');
        } catch (error) {
            console.error("Failed to register", error);
        }
    };

    return (
        <div className='relative flex flex-col w-screen h-screen bg-tv items-center justify-center'>
            <form onSubmit={handleRegister} className='flex flex-col custom-size-box items-center justify-between'>
                <p className='font-Montserrat font-bold text-4xl'>Registration</p>
                <div className='flex flex-col gap-16'>
                    <div className='flex flex-col gap-5'>
                        <input type='text' className='border-b-2 focus:outline-none placeholder-opacity-30 text-center' placeholder='👤 username' />
                        <div className='flex flex-col md:flex-row gap-5'>
                            <input type='password' className='border-b-2 focus:outline-none placeholder-opacity-30 text-center' placeholder='🔒 password' />
                            <input type='password' className='border-b-2 focus:outline-none placeholder-opacity-30 text-center' placeholder='🔒 repeat password' />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-center'>Profile Photo:</p>
                        <input type='file' className='bg-black text-white rounded-lg shadow-black shadow-md' />
                    </div>
                </div>
                <button type='submit' className='btn-start mt-10'>Register</button>
            </form>
        </div>
    )
}

export default Register;
