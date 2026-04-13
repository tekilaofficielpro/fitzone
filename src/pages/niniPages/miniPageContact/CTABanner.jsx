import styles from "./animationCSS";
import {useScrollReveal} from "./userScroll";

export const CTABanner = () => {
    const ctaRef = useScrollReveal();
  return (
    <>
    <style>{styles}</style>
    <section>
      <div ref={ctaRef} className='w-full h-[266px] py-[48px] bg-[#E8000D] flex flex-row gap-70 mb-0 reveal'>
        <h1 className='w-[815px] h-[60px] font-bold text-[60px] text-[#FFFFFF] px-[20px] py-[40px]'>READY TO TRANSFORM?</h1>
        <button className='w-[204px] h-[68px] border-2 border-[#FFFFFF] text-[#FFFFFF] bg-transparent hover:bg-[#FFFFFF] hover:text-[#E8000D] py-[10px] px-[20px] ml-90 whitespace-nowrap shrink-0 relative top-16 transition-all duration-300 hover:scale-105 active:scale-95'>
          START FREE TRIAL
        </button>
      </div>
    </section>
    </>
  )
}
