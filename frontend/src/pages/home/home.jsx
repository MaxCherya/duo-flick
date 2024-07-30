// libraries
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

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
        <div className={`relative flex flex-col w-screen min-h-screen ${introComplete ? 'h-auto' : 'h-screen'}`}>
            <Intro />
            <span className='fixed top-0 left-0 right-0 bottom-0 h-full w-full bg-gradient-origin z-0'/>
            <section className='flex flex-col align-middle items-center w-full h-full z-10'>
                <img src={logo}/>
                <p className=''>Start Now</p>
            </section>
        </div>
    )
}