// libraries
import React, { useEffect, useRef } from 'react'
import { TweenMax, Power3 } from 'gsap';

// styles
import './intro.scss'

export default function Intro() {

    let bgWhite = useRef(null);
    let bgBlack = useRef(null);
    let bgBlack2 = useRef(null);
    let txt1 = useRef(null);
    let txt2 = useRef(null);
    let txt3 = useRef(null);
    let txt4 = useRef(null);

    useEffect(() => {
        TweenMax.to(bgWhite, 5, {
            x: '-100vw',
            ease: Power3.easeInOut,
            delay: 6,
        });
        TweenMax.to(bgBlack, 5, {
            x: '100vw',
            ease: Power3.easeInOut,
            delay: 1.5,
        });
        TweenMax.to(txt1, 5, {
            x: '-100vw',
            ease: Power3.easeInOut,
            delay: 5.9,
        });
        TweenMax.to(txt2, 5, {
            x: '-100vw',
            ease: Power3.easeInOut,
            delay: 5.8,
        });
        TweenMax.to(txt3, 5, {
            x: '-100vw',
            ease: Power3.easeInOut,
            delay: 6,
        });
        TweenMax.to(txt4, 5, {
            x: '-100vw',
            ease: Power3.easeInOut,
            delay: 6,
        });
        TweenMax.from(bgBlack2, 5, {
            x: '100vw',
            ease: Power3.easeInOut,
            delay: 6,
        });
        TweenMax.to(bgBlack2, 5, {
            x: '-100vw',
            ease: Power3.easeInOut,
            delay: 6,
        });
    }, [])

    return (
        <div className='h-screen w-screen flex flex-col z-40 overflow-hidden absolute'>
            <section className='flex flex-col z-40 p-5'>
                <p ref={e => txt1 = e} className='font-Montserrat font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl z-40'>Find your movie</p>
                <p ref={e => txt2 = e} className='font-Montserrat font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl z-40'>match in</p>
                <p ref={e => txt3 = e} className='font-Montserrat font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl z-40'>a flick.</p>
            </section>
            <p ref={e => txt4 = e} className='fixed bottom-1 right-1 font-Montserrat font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm z-40'>DuoFlick v1.0</p>
            <span ref={e => bgWhite = e} className='fixed h-screen w-screen bg-bright-blue absolute z-30' />
            <span ref={e => bgBlack2 = e} className='fixed h-screen w-screen bg-black absolute z-50' />
            <span ref={e => bgBlack = e} className='fixed h-screen w-screen bg-black absolute z-50' />
        </div>
    )
}
