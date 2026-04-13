import styles from './animationCSS';

export const SectionFinal = () => {
  return (
    <>
    <style>{styles}</style>
    <section className="w-full h-[516px] text-white py-[96px] px-[420px] bg-[#E8000D]">
        <div className='container h-[324px] max-w-[728px] flex flex-col gap-[32px]'>
          <h1 className='w-[896px] h-[144px] font-black text-[72px] leading-[72px] tracking-[-3.6px] text-center anim-cta'>START YOUR FREE TRIAL TODAY</h1>
          <h2 className='w-[896px] h-[44px] font-medium text-[20px] leading-[28px] tracking-normal text-center position relative bottom-[16px] anim-cta' style={{ transitionDelay: '150ms' }}>Experience elite performance with no strings attached for 7 days.</h2>
          <button className='w-[303.81px] h-[72px] px-[48px] py-[20px] rounded-[4px] border-2 opacity-100 position relative left-[295px] anim-cta btn-cta' style={{ transitionDelay: '300ms' }}>GET STARTED NOW</button>
        </div>
    </section>
    </>
  )
}
