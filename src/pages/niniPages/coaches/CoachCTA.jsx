import { MdOutlineVerified } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { RiSpeedUpLine } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { coachCTAAnimation } from "../../../components/animations/pageTrasition";

const CoachCTA = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            coachCTAAnimation(containerRef.current);
        }
    }, []);

    return (
        <section className="bg-tertiary flex flex-col justify-center h-75 sm:h-60 pt-5 mt-10" ref={containerRef}>
            <h1 className="text-xl sm:text-2xl font-bold text-center text-white">CERTIFIED & EXPERIENCED</h1>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">

                <div className="p-6 rounded flex flex-col items-center gap-2">
                    <span className="text-gray-500 text-4xl hover:scale-110 cursor-pointer"><MdOutlineVerified /></span>
                    <span className="font-headline text-[10px] text-gray-500 font-bold tracking-tighter cursor-pointer hover:scale-110">NASM ACCREDITED</span>
                </div>
                <div className="p-6 rounded flex flex-col items-center gap-2">
                    <span className="text-gray-500 text-4xl hover:scale-110 cursor-pointer"><MdFitnessCenter /></span>
                    <span className="font-headline text-[10px] text-gray-500 font-bold tracking-tighter cursor-pointer hover:scale-110">NSCA CERTIFIED</span>
                </div>
                <div className="p-6 rounded flex flex-col items-center gap-2">
                    <span className="text-gray-500 text-4xl hover:scale-110 cursor-pointer"><GoGraph /></span>
                    <span className="font-headline text-[10px] text-gray-500 font-bold tracking-tighter cursor-pointer hover:scale-110">PRECISION NUTRITION</span>
                </div>
                <div className="p-6 rounded flex flex-col items-center gap-2">
                    <span className="text-gray-500 text-4xl hover:scale-110 cursor-pointer"><RiSpeedUpLine /></span>
                    <span className="font-headline text-[10px] text-gray-500 font-bold tracking-tighter cursor-pointer hover:scale-110">EXOS PERFORMANCE</span>
                </div>
            </div>
        </section>
    )
}

export default CoachCTA