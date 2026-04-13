import styles from "./animationCSS";

const HeroSection = () => {
  return (
    <>
    <style>{styles}</style>
    <section className='relative h-[700px] py-24 px-75 flex flex-col gap-16'>
      <div
        className="absolute inset-0 bg-[url('/pricingCoach4.png')] bg-cover bg-center"
        style={{ opacity: 0.2 }}
      />
      <div className='container mx-auto relative top-40 left-55 z-10'>
        <div className='text-[#FFFFFF] text-8xl font-bold flex flex-row gap-6 anim-hero-title'>
          <h1>SIMPLE</h1>
          <div className='flex flex-col'>
            <h1 className='z-10'>PRICING</h1>
            <div className='w-[380px] h-[12px] position relative bottom-4 bg-[#E8000D] anim-hero-bar'></div>
          </div>
        </div>
        <h2 className='w-[360px] h-[28px] text-[#A0A0A0] text-[25px] mx-50 anim-hero-sub'>No hidden fees. Cancel anytime.</h2>
      </div>
      <div className='w-[363px] h-[56px] bg-[#2e2d2d] mx-49 p-4 text-white flex flex-row gap-0 font-bold relative top-40 left-55 anim-hero-toggle'>
        <button className='w-[138px] h-[44px] py-3 position relative bottom-2.5 toggle-btn'>MONTHLY</button>
        <button className='w-[216px] h-[44px] py-3 bg-[#E8000D] position relative bottom-2.5 left-2 toggle-btn'>YEARLY (SAVE 20%)</button>
      </div>
    </section>    
    </>
  )
}

export default HeroSection
