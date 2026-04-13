import styles from "./animationCSS";
import { useScrollReveal } from "./userScroll";

export const SectionHero = () => {
  const heroRef = useScrollReveal();

  return (
    <>
    <style>{styles}</style>
    <section className='container flex flex-row items-center justify-center h-[709px]'>
      <div 
        className="absolute inset-0 bg-[url('/BG_Contact.jpeg')] bg-cover bg-center"
        style={{ opacity: 0.2 }} 
      />
      <div ref={heroRef} className='mt-20 relative left-8 top-10 reveal'>
        <div className='container mx-auto relative z-10'>
          <div className='text-[#FFFFFF] text-[146px] font-bold flex flex-row gap-6'>
            <h1>GET IN</h1>
            <div className='flex flex-col'>
              <h1 className='z-10 text-[#E8000D]'>TOUCH</h1>
              <div className='w-[220px] h-[8px] mb-6 relative right-25 bottom-5 bg-[#E8000D]'></div>
            </div>
          </div>
          <h2 className='w-[599px] h-[36px] max-w-[744px] text-[#A0A0A0] text-[25px] mx-35 relative left-20 uppercase'>We're here to help you start your journey.</h2>
        </div>
      </div>
    </section>
    </>
  )
}
