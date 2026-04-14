import styles from "./animationCSS";

const HeroSection = () => {
  return (
    <>
    <style>{styles}</style>
    <section className='relative min-h-[700px] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-10 md:px-20 lg:px-75 flex flex-col gap-8 sm:gap-12 md:gap-16'>
     <div
        className="absolute inset-0 bg-[url('/pricingCoach4.png')] bg-cover bg-center"
        style={{ opacity: 0.2 }}
      />
      <div className='container mx-auto relative top-20 sm:top-28 md:top-32 lg:top-40 left-0 sm:left-10 md:left-20 z-10'>
        <div className='text-white font-bold flex flex-row gap-3 sm:gap-6 anim-hero-title
                text-4xl sm:text-6xl md:text-7xl lg:text-8xl lg:ml-[150px]'>
          <h1>SIMPLE</h1>
          <div className='flex flex-col'>
            <h1 className='z-10'>PRICING</h1>
            <div className='relative bottom-2 sm:bottom-3 md:bottom-4 bg-[#E8000D] anim-hero-bar
                            h-[6px] sm:h-[8px] md:h-[10px] lg:h-[12px]
                            w-full'></div>
          </div>
        </div>
        <h2 className='w-full max-w-[360px] text-[#A0A0A0] text-base sm:text-lg md:text-[25px] mx-auto sm:mx-10 md:mx-30 lg:mx-90 anim-hero-sub'>
          No hidden fees. Cancel anytime.
        </h2>
      </div>
      <div className='w-full max-w-[363px] bg-[#2e2d2d] 
                mx-auto sm:mx-10 md:mx-49
                p-4 text-white flex flex-row gap-0 font-bold 
                relative top-20 sm:top-28 md:top-32 lg:top-40 
                left-0 sm:left-10 md:left-1 lg:mx-106 
                anim-hero-toggle'>
        <button className='flex-1 sm:w-[138px] h-[44px] py-3 relative bottom-0.5 toggle-btn'>
          MONTHLY
        </button>
        <button className='flex-[1.5] sm:w-[216px] h-[44px] py-3 bg-[#E8000D] relative bottom-0.5 left-2 toggle-btn'>
          YEARLY (SAVE 20%)
        </button>
      </div>
    </section>    
    </>
  )
}

export default HeroSection
