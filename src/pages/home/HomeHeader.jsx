import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { homeHeaderAnimation } from "../../components/animations/pageTrasition";

const HomeHeader = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            homeHeaderAnimation(containerRef.current);
        }
    }, []);

    return (
        <section className="bg-image">
            <div className="container flex items-center justify-center sm:mt-20 md:mt-1 xl:mt-10" ref={containerRef}>
                <div>
                    <div className="text-secondary flex gap-5 mt-30">
                        <hr className="text-red-500 w-20 mt-3" />
                        <p>BEYOND HUMAN LIMITS</p>
                    </div>
                    <h1 className="flex flex-col leading-normal">
                        <span className="text-white text-6xl sm:text-7xl lg:text-[150px]">TRANSFORM</span>
                        <span className="text-stroke text-6xl sm:text-6xl lg:text-[100px]">YOUR BODY.</span>
                    </h1>
                    <p className="text-sm px-1 text-white/50">This is not a gym. This is a high performance laboratory <br /> where raw power meets calculated precision.</p>
                    <div className="flex sm:flex-row justify-center sm:justify-start mb-4 space-x-5 mt-5">
                        <button className="bg-secondary hover:scale-110 hover:duration-900 px-4 py-3 rounded">
                            <Link to="/login" className="text-white">JOIN NOW</Link>
                        </button>
                        <button className="border border-white hover:scale-110 hover:duration-900 px-4 py-3 rounded">
                            <Link to="/classes" className="text-white">SEE CLASSES</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader