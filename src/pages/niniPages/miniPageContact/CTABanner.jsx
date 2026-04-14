import styles from "./animationCSS";
import {useScrollReveal} from "./userScroll";

export const CTABanner = () => {
    const ctaRef = useScrollReveal();
  return (
    <>
    <style>{styles}</style>
    <section>
      <div
        ref={ctaRef}
        className='w-full bg-[#E8000D] flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 px-6 sm:px-12 lg:px-20 py-12 reveal'
      >
        <h2 className='font-bold text-[clamp(32px,6vw,60px)] text-white text-center sm:text-left leading-tight'>
          READY TO TRANSFORM?
        </h2>
        <button className='shrink-0 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#E8000D] py-[10px] px-[20px] whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95'>
          START FREE TRIAL
        </button>
      </div>
    </section>
    </>
  )
}
