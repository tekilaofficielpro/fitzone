import coach7 from '../../../assets/coach7.png'
import { FaQuoteRight } from "react-icons/fa";

const FeaturedCoach = () => {
    return (
        <section className="relative container flex flex-row h-200 gap-8 justify-center mt-10 border border-tertiary bg-linear-to-r from-[#1c1b1b] to-[#1c1b1b]/10 min-h-125">
            <hr className=" absolute w-80 border-t-5 absolute right-0 top-0" style={{ borderImage: 'linear-gradient(to right, #ef4444, transparent) 1' }} />
            <div className='lg:w-1/2 relative h-full'>
                <img src={coach7} alt="coach 7" className='grayscale w-full h-full object-cover' />
            </div>

            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-0.5 bg-secondary"></div>
                    <span class="text-secondary font-headline font-bold tracking-widest uppercase">HEAD OF PERFORMANCE</span>
                </div>
                <h2 class="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter mb-8 leading-none">
                    SARAH <br /> "THE ENGINE" <br /> JENKINS
                </h2>
                <p class="text-red-200 text-lg leading-relaxed mb-10 max-w-xl">
                    Sarah brings over a decade of elite competitive experience. Her training philosophy is built on clinical precision and relentless intensity. She doesn't just train bodies; she engineers performance benchmarks for those who refuse to settle.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-red-300/50 pt-10">
                    <div>
                        <div class="text-secondary font-headline text-4xl font-black mb-1">12+</div>
                        <div class="text-white font-headline text-xs font-bold tracking-widest uppercase">YEARS EXPERIENCE</div>
                    </div>
                    <div>
                        <div class="text-secondary font-headline text-4xl font-black mb-1">1500+</div>
                        <div class="text-white font-headline text-xs font-bold tracking-widest uppercase">CLIENTS TRAINED</div>
                    </div>
                    <div>
                        <div class="text-secondary font-headline text-4xl font-black mb-1">25</div>
                        <div class="text-white font-headline text-xs font-bold tracking-widest uppercase">CLASSES/WEEK</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCoach