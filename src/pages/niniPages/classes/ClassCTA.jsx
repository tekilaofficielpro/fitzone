import { useEffect, useRef } from "react";
import { classCTAAnimation } from "../../../components/animations/pageTrasition";

const ClassCTA = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            classCTAAnimation(containerRef.current);
        }
    }, []);

    return (
        <section className="py-24 bg-secondary relative overflow-hidden mt-10" ref={containerRef}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <span className="text-[20vw] font-black font-headline text-white italic select-none">FITZONE</span>
            </div>
            <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter mb-8 leading-tight">
                    READY FOR THE NEXT LEVEL?
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button className="w-full md:w-auto px-12 py-5 bg-white text-primary font-headline font-black text-xl uppercase italic tracking-widest hover:scale-105 transition-transform">
                        UPGRADE PLAN
                    </button>
                    <button className="w-full md:w-auto px-12 py-5 border-2 border-white text-white font-headline font-black text-xl uppercase italic tracking-widest hover:bg-white hover:text-black transition-all">
                        REFER A FRIEND
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ClassCTA