import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import styles from "./animationCSS";


export const ComparePlan = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="min-h-[808px] h-auto text-white py-10 sm:py-14 md:py-[96px] px-4 sm:px-6 md:px-[32px] bg-[#0E0E0E]">
        <div className="container min-h-[546px] h-auto max-w-[1024px] flex flex-col md:flex-row gap-[16px]">
          <div className='w-full'>
            <h1 className="w-full md:w-[320px] font-black text-[28px] md:text-[36px] text-[#E5E2E1] leading-[40px] tracking-[-1.8px] uppercase anim-row
                          text-center md:text-left md:relative md:left-[400px] lg:left-[500px] anim-compare-title" style={{ transitionDelay: '0ms' }}>
              COMPARE PLANS
            </h1>
          </div>
          <ul className='w-full max-w-[1024px] mx-auto flex flex-col gap-0 relative top-0 md:top-[100px] md:right-[200px] lg:right-80'>
            {[
              { label: 'FEATURES', isHeader: true },
              { label: '24/7 Access' },
              { label: 'Group Classes' },
              { label: 'Recovery Zone' },
              { label: 'Personal Coaching' },
              { label: 'Free Guest Passes' },
            ].map(() => null)}

            {/* Ligne header */}
            <li className="w-full border-b-2 border-[#E8000D] bg-[#1C1B1B] anim-row grid grid-cols-4" style={{ transitionDelay: '0ms' }}>
              <h2 className='px-4 py-[26px] text-[18px] font-bold col-span-1'>FEATURES</h2>
              <span className='px-4 py-[26px] text-[18px] font-bold text-center'>STARTER</span>
              <span className='px-4 py-[26px] text-[18px] font-bold text-[#E8000D] text-center'>PRO</span>
              <span className='px-4 py-[26px] text-[18px] font-bold text-center'>ELITE</span>
            </li>

            {/* 24/7 Access */}
            <li className="w-full bg-[#1C1B1B]/50 anim-row grid grid-cols-4" style={{ transitionDelay: '80ms' }}>
              <h2 className='px-4 py-[26px] text-[18px] font-bold'>24/7 Access</h2>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
            </li>

            {/* Group Classes */}
            <li className="w-full bg-[#0E0E0E] anim-row grid grid-cols-4" style={{ transitionDelay: '160ms' }}>
              <h2 className='px-4 py-[26px] text-[18px] font-bold'>Group Classes</h2>
              <span className='px-4 py-[26px] text-[#4B5563] text-[18px] font-bold flex items-center justify-center'><MdClose /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
            </li>

            {/* Recovery Zone */}
            <li className="w-full bg-[#1C1B1B]/50 anim-row grid grid-cols-4" style={{ transitionDelay: '240ms' }}>
              <h2 className='px-4 py-[26px] text-[18px] font-bold'>Recovery Zone</h2>
              <span className='px-4 py-[26px] text-[#4B5563] text-[18px] font-bold flex items-center justify-center'><MdClose /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
            </li>

            {/* Personal Coaching */}
            <li className="w-full bg-[#0E0E0E]/50 anim-row grid grid-cols-4" style={{ transitionDelay: '320ms' }}>
              <h2 className='px-4 py-[26px] text-[18px] font-bold'>Personal Coaching</h2>
              <span className='px-4 py-[26px] text-[#4B5563] text-[18px] font-bold flex items-center justify-center'><MdClose /></span>
              <span className='px-4 py-[26px] text-[#4B5563] text-[18px] font-bold flex items-center justify-center'><MdClose /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
            </li>

            {/* Free Guest Passes */}
            <li className="w-full bg-[#1C1B1B]/50 anim-row grid grid-cols-4" style={{ transitionDelay: '400ms' }}>
              <h2 className='px-4 py-[26px] text-[18px] font-bold'>Free Guest Passes</h2>
              <span className='px-4 py-[26px] text-[#4B5563] text-[18px] font-bold flex items-center justify-center'><MdClose /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
              <span className='px-4 py-[26px] text-[#E8000D] text-[18px] font-bold flex items-center justify-center'><FaCheck /></span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
