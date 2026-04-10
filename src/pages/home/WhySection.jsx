import material from "../../assets/material.png"

const WhySection = () => {
    return (
        <section class="bg-surface relative overflow-hidden my-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 bg-tertiary">
                <div class="p-12 md:p-40 flex flex-col justify-center space-y-16">
                    <div class="space-y-6">
                        <h2 class="text-7xl md:text-8xl text-white font-black uppercase headline tracking-tighter leading-[0.8]">WHY<br />US?</h2>
                        <p class="text-white/70 text-xl font-light">We engineer environments. We don't just host workouts.</p>
                    </div>
                    <div class="space-y-10">
                        <div class="flex items-start gap-6 group">
                            <span class="text-secondary font-black text-5xl headline">01</span>
                            <div>
                                <h4 class="text-2xl text-white font-bold uppercase mb-2">ELITE ARSENAL</h4>
                                <p class="text-white/70 text-sm">Hammersmith and Eleiko hardware for pure force production.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-6 group">
                            <span class="text-secondary font-black text-5xl headline">02</span>
                            <div>
                                <h4 class="text-2xl text-white font-bold uppercase mb-2">SCIENTIFIC COACHING</h4>
                                <p class="text-white/70 text-sm">Programs derived from high-performance sports science.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-6 group">
                            <span class="text-secondary font-black text-5xl headline">03</span>
                            <div>
                                <h4 class="text-2xl text-white font-bold uppercase mb-2">WARRIOR CULTURE</h4>
                                <p class="text-white/70 text-sm">Train in a community that refuses to accept mediocrity.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative min-h-150 lg:min-h-full">
                    <img alt="Gym" class="absolute inset-0 w-full h-full object-cover grayscale brightness-75" src={material} />
                    <div class="absolute inset-0 bg-red-800/20 mix-blend-multiply"></div>
                    <div class="absolute inset-0 bg-linear-to-l from-red-800/40 via-transparent to-transparent"></div>
                    <div class="absolute inset-0 pointer-events-none">
                        <div class="absolute -left-20 top-0 h-full w-40 bg-surface rotate-12 origin-top"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhySection