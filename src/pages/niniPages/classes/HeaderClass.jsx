import { useEffect, useRef } from "react";
import { headerClassAnimation } from "../../../components/animations/pageTrasition";

const HeaderClass = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            headerClassAnimation(containerRef.current);
        }
    }, []);

    return (
        <section className="bg-image2 h-screen flex justify-center items-center" ref={containerRef}>
            <div className="text-center">
                <h1 className="text-white text-3xl sm:text-7xl font-bold">OUR CLASSES</h1>
                <hr className="w-80 border-t-5 border-red-500 mt-4" />
                <p className="text-red-300 mt-4">Find the workout that fits your goal.</p>
            </div>
        </section>
    )
}

export default HeaderClass