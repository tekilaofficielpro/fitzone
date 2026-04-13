import { useEffect, useRef } from "react";
import { reviewAnimation } from "../../components/animations/pageTrasition";

const Review = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            reviewAnimation(containerRef.current);
        }
    }, []);

    return (
        <section className="container mx-auto flex flex-col sm:flex-row sm:max-w-4/5 bg-tertiary justify-center items-center px-4 sm:px-8 lg:px-12 py-6 sm:py-0 sm:h-40 lg:mt-10 md:mt-5 gap-6 sm:gap-20 text-center border-l-8 border-red-700 mt-6 sm:mt-0" ref={containerRef}>
                <div>
                    <span className="text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold block">500+</span>
                    <p className="text-white font-bold text-xs sm:text-sm md:text-lg mt-1">ACTIVE WARRIORS</p>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 w-4/5 sm:w-auto">
                    <span className="text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold block">20+</span>
                    <p className="text-white font-bold text-xs sm:text-sm md:text-lg mt-1">WAR ZONES</p>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 w-4/5 sm:w-auto">
                    <span className="text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold block">10</span>
                    <p className="text-white font-bold text-xs sm:text-sm md:text-lg mt-1">MASTER COACHES</p>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 w-4/5 sm:w-auto">
                    <span className="text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold block">5</span>
                    <p className="text-white font-bold text-xs sm:text-sm md:text-lg mt-1">YEARS OF EXCELLENCE</p>
                </div>
        </section>
    )
}

export default Review