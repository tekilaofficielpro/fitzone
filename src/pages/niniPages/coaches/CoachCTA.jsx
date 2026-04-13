import { MdOutlineVerified } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { RiSpeedUpLine } from "react-icons/ri";

const CoachCTA = () => {
    return (
        <section className="bg-tertiary flex flex-col justify-center h-60 mt-10">
            <h1 className="text-2xl font-bold text-center text-white">CERTIFIED & EXPERIENCED</h1>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">

                <div class="p-6 rounded flex flex-col items-center gap-2">
                    <span class="text-gray-500 text-4xl"><MdOutlineVerified /></span>
                    <span class="font-headline text-[10px] text-gray-500 font-bold tracking-tighter">NASM ACCREDITED</span>
                </div>
                <div class="p-6 rounded flex flex-col items-center gap-2">
                    <span class="text-gray-500 text-4xl"><MdFitnessCenter /></span>
                    <span class="font-headline text-[10px] text-gray-500 font-bold tracking-tighter">NSCA CERTIFIED</span>
                </div>
                <div class="p-6 rounded flex flex-col items-center gap-2">
                    <span class="text-gray-500 text-4xl"><GoGraph /></span>
                    <span class="font-headline text-[10px] text-gray-500 font-bold tracking-tighter">PRECISION NUTRITION</span>
                </div>
                <div class="p-6 rounded flex flex-col items-center gap-2">
                    <span class="text-gray-500 text-4xl"><RiSpeedUpLine /></span>
                    <span class="font-headline text-[10px] text-gray-500 font-bold tracking-tighter">EXOS PERFORMANCE</span>
                </div>
            </div>
        </section>
    )
}

export default CoachCTA