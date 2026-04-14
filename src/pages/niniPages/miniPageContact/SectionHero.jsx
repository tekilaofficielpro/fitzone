import styles from "./animationCSS";
import { useScrollReveal } from "./userScroll";

export const SectionHero = () => {
  const heroRef = useScrollReveal();

  return (
    <>
    <style>{styles}</style>
    <section className='relative w-full min-h-[400px] sm:min-h-[550px] lg:min-h-[709px] flex items-center justify-center overflow-hidden'>
  
  {/* Background */}
  <div
    className="absolute inset-0 bg-[url('/BG_Contact.jpeg')] bg-cover bg-center"
    style={{ opacity: 0.2 }}
  />

  {/* Contenu */}
  <div ref={heroRef} className='relative z-10 w-full px-6 sm:px-10 lg:px-16 py-16 reveal'>
    
    {/* Titre principal */}
   <div className='flex flex-col sm:flex-row items-center sm:items-end justify-center gap-0 sm:gap-4 mb-6'>
    <h1 className='font-black text-white text-[clamp(52px,11vw,146px)] leading-[0.9] tracking-tight'>
      GET IN
    </h1>
    <div className='flex flex-col gap-0 items-center'>
      <h1 className='font-black text-[#E8000D] text-[clamp(52px,11vw,146px)] leading-[0.9] tracking-tight'>
        TOUCH
      </h1>
      <div className='h-[5px] bg-[#E8000D] rounded-full w-full mt-2' />
    </div>
  </div>

    {/* Sous-titre */}
    <p className='text-[#A0A0A0] text-[clamp(14px,2vw,25px)] uppercase max-w-[744px] text-center mx-auto'>
  We're here to help you start your journey.
</p>

  </div>
</section>
    </>
  )
}
