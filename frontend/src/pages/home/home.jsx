// libraries
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

// imgs
import logo from '../../imgs/logo.png'

// styles
import './home.scss'

export default function Home() {

    const [ref, inView] = useInView();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        } else {
            setAnimate(false);
        }
    }, [inView]);

  return (
    <div>
    <div style={{position:'relative'}}>
        <div className='bg-gradient-origin z-0 bg-cover'>
            <motion.p ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`absolute top-5 left-5 text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-9xl font-bold z-10 ${animate ? 'animate-shadow' : ''}`}>What's up?</motion.p>
        </div>
    </div>
    </div>
  )
}
