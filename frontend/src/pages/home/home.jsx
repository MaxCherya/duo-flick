// libraries
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Link, NavLink } from 'react-router-dom';

// imgs
import logo from '../../imgs/logo.png'

// styles
import './home.scss'

// components
import Intro from '../../components/intro/intro';

export default function Home() {

    const [introComplete, setIntroComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroComplete(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);

    return (
        <div className={`relative flex flex-col gap-10 w-screen min-h-screen ${introComplete ? 'h-auto' : 'h-screen'}`}>
            <span className='fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-gradient-origin z-0' />
            <span className='fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-gradient-origin-after z-10' />
            <section className='flex flex-row w-screen h-14 bg-black z-30 align-middle animation-fadeInTop'>
                <ul className='list-none flex flex-row items-center justify-evenly w-screen'>
                    <NavLink to="/"><li className='text-yellow-50'>| HOME |</li></NavLink>
                    <NavLink to="/news"><li className='text-yellow-50'>| NEWS |</li></NavLink>
                    <NavLink to="/how-to"><li className='text-yellow-50'>| HOW TO |</li></NavLink>
                    <NavLink to="/about"><li className='text-yellow-50'>| ABOUT |</li></NavLink>
                </ul>
            </section>
            {introComplete ? null : <Intro />}
            <section className='flex flex-col align-middle items-center w-full h-full z-10'>
                <img src={logo} className='animation-slideIn-epic w-96 -mt-10' />
                <p className='font-bold font-Montserrat text-4xl -mt-16 animation-trackingIn'>DuoFlick</p>
                <p className='font-Lato animation-focusInExpand text-sm'>Instantly find movies <b>you both love</b>, effortlessly.</p>
                <div className='flex flex-row items-center mt-14'>
                    <div className='flex flex-row align-middle justify-evenly w-svw'>
                        <div className='flex flex-col items-center z-20 animation-fadeIn'>
                            <p className='font-Oswald text-xl'>Users</p>
                            <CountUp className='font-RampartOne text-1xl' start={0} end={14213} delay={12} />
                        </div>
                        <div className='flex flex-col items-center z-20 animation-fadeIn'>
                            <p className='font-Oswald text-xl'>Movies</p>
                            <p className='font-RampartOne text-1xl'><CountUp start={0} end={1053233} delay={14} />+</p>
                        </div>
                        <div className='flex flex-col items-center z-20 animation-fadeIn'>
                            <p className='font-Oswald text-xl'>Fun</p>
                            <p className='font-RampartOne text-1xl'><CountUp start={0} end={100} delay={16} />%</p>
                        </div>
                    </div>
                    <span className='absolute w-screen h-40 bg-white z-10 shapenation animation-flickerIn' />
                </div>
            </section>
            <Link to='/login' className='mt-16 btn-start font-Montserrat font-bold animation-bounceIn self-center text-center place-content-center z-10'>Start Now</Link>
        </div>
    )
}