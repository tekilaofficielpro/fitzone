import styles from './animationCSS';

export const SectionFinal = () => {
  return (
    <>
    <style>{styles}</style>
    <section className="w-full min-h-[516px] h-auto text-white py-16 sm:py-20 md:py-[96px] px-4 sm:px-10 md:px-20 bg-[#E8000D] flex items-center justify-center">
      <div className='w-full max-w-[728px] flex flex-col items-center gap-6 md:gap-[32px]'>
        
        <h1 className='w-full font-black text-[40px] sm:text-[56px] md:text-[72px] leading-tight md:leading-[72px] tracking-[-2px] md:tracking-[-3.6px] text-center anim-cta'>
          START YOUR FREE TRIAL TODAY
        </h1>
        
        <h2 className='w-full font-medium text-base sm:text-lg md:text-[20px] leading-[28px] text-center anim-cta' style={{ transitionDelay: '150ms' }}>
          Experience elite performance with no strings attached for 7 days.
        </h2>
        
        <button className='w-full max-w-[304px] h-[60px] md:h-[72px] px-8 md:px-[48px] py-4 md:py-[20px] rounded-[4px] border-2 anim-cta btn-cta' style={{ transitionDelay: '300ms' }}>
          GET STARTED NOW
        </button>
        
      </div>
    </section>
    </>
  )
}
