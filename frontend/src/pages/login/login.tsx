// libraries
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='relative flex flex-row w-screen h-screen bg-slate-600'>
        <section className='flex flex-col h-full w-1/2 bg-black'>
            
        </section>
        <section className='flex flex-col h-full w-1/2 gap-5 place-content-center items-center bg-white'>
            <p className='font-Montserrat font-bold text-4xl'>Login</p>
            <input type='text' className='w-80 bg-slate-300 h-12 text-center font-Montserrat' placeholder='👤 username'></input>
            <input type='password' className='w-80 bg-slate-300 h-12 text-center font-Montserrat' placeholder='🔒 password'></input>
            <p className='font-Lato'>Don't have account yet? <Link className='text-sky-500'>Register!</Link></p>
            <button className='btn-start font-Montserrat font-bold self-center'>Login</button>
        </section>
    </div>
  )
}
