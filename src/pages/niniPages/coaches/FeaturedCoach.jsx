import coach7 from '../../../assets/coach7.png'
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import { featuredCoachAnimation } from '../../../components/animations/pageTrasition';

const FeaturedCoach = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            featuredCoachAnimation(containerRef.current);
        }
    }, []);

    return (
        <section className="relative container flex flex-col md:flex-row h-auto md:h-200 gap-4 md:gap-8 justify-center mt-10 border border-tertiary bg-linear-to-r from-[#1c1b1b] to-[#1c1b1b]/10 min-h-auto md:min-h-125 px-4 sm:px-6 md:px-0" ref={containerRef}>
            <hr className="absolute w-40 sm:w-60 md:w-80 border-t-5 right-0 top-0" style={{ borderImage: 'linear-gradient(to right, #ef4444, transparent) 1' }} />
            <div className='w-full md:w-1/2 lg:w-1/2 relative h-75 sm:h-90 md:h-full'>
                <img src={coach7} alt="coach 7" className='grayscale w-full h-full object-cover' />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="w-8 sm:w-12 h-0.5 bg-secondary"></div>
                    <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm">HEAD OF PERFORMANCE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-4 sm:mb-6 md:mb-8 leading-none">
                    SARAH <br /> "THE ENGINE" <br /> JENKINS
                </h2>
                <p className="text-red-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl">
                    Sarah brings over a decade of elite competitive experience. Her training philosophy is built on clinical precision and relentless intensity. She doesn't just train bodies; she engineers performance benchmarks for those who refuse to settle.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 border-t border-red-300/50 pt-6 sm:pt-8 md:pt-10">
                    <div>
                        <div className="text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black mb-1">12+</div>
                        <div className="text-white font-headline text-xs font-bold tracking-widest uppercase">YEARS EXPERIENCE</div>
                    </div>
                    <div>
                        <div className="text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black mb-1">1500+</div>
                        <div className="text-white font-headline text-xs font-bold tracking-widest uppercase">CLIENTS TRAINED</div>
                    </div>
                    <div>
                        <div className="text-secondary font-headline text-2xl sm:text-3xl md:text-4xl font-black mb-1">25</div>
                        <div className="text-white font-headline text-xs font-bold tracking-widest uppercase">CLASSES/WEEK</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCoach