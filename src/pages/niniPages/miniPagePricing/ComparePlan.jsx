import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import styles from "./animationCSS";


export const ComparePlan = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="h-[738px] text-white py-[96px] px-[32px] bg-[#0E0E0E]">
        <div className="container h-[546px] max-w-[1024px] flex flex-row gap-[16px]">
          <div className='w-[1024px] h-[40px]'>
            <h1 className="w-[320px] h-[240px] font-black text-[36px] text-[#E5E2E1] leading-[40px] tracking-[-1.8px] position relative left-[500px] uppercase anim-row">COMPARE PLANS</h1>
          </div>
          <ul className='w-[1024px] h-[442px] flex flex-col gap-0 position relative top-[100px] right-[200px]'>
            {[
              { label: 'FEATURES', isHeader: true },
              { label: '24/7 Access' },
              { label: 'Group Classes' },
              { label: 'Recovery Zone' },
              { label: 'Personal Coaching' },
              { label: 'Free Guest Passes' },
            ].map(() => null)}

            <li className="w-[1024px] h-[79px] border-b-2 border-[#E8000D] flex flex-row gap-30 text-xl bg-[#1C1B1B] anim-row" style={{ transitionDelay: '0ms' }}>
              <h2 className='w-[417px] h-[77px] px-[24px] py-[26px] text-[18px] font-bold'>FEATURES</h2>
              <ul className='flex flex-row px-30'>
                <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] font-bold'>STARTER</li>
                <li className='w-[248px] h-[77px] px-[42px] py-[26px] text-[18px] text-[#E8000D] font-bold'>PRO</li>
                <li className='w-[248px] h-[77px] px-[15px] py-[26px] text-[18px] font-bold'>ELITE</li>
              </ul>
            </li>
            <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#1C1B1B]/50 anim-row" style={{ transitionDelay: '80ms' }}>
              <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>24/7 Access</h2>
              <ul className="flex flex-row px-35">
                <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[#E8000D] text-[18px] font-bold position relative right-[100px]'><FaCheck /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[100px]'><FaCheck /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative left-[65px]'><FaCheck /></li>
              </ul>
            </li>
            <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#0E0E0E] anim-row" style={{ transitionDelay: '160ms' }}>
              <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Group Classes</h2>
              <ul className="flex flex-row px-35">
                <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[100px]'><FaCheck /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative left-[65px]'><FaCheck /></li>
              </ul>
            </li>
            <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#1C1B1B]/50 anim-row" style={{ transitionDelay: '240ms' }}>
              <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Recovery Zone</h2>
              <ul className="flex justify-between gap-20 position relative left-[20px]">
                <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[180px]'><FaCheck /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[95px]'><FaCheck /></li>
              </ul>
            </li>
            <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#0E0E0E]/50 anim-row" style={{ transitionDelay: '320ms' }}>
              <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Personal Coaching</h2>
              <ul className="flex flex-row px-35">
                <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative left-[65px]'><FaCheck /></li>
              </ul>
            </li>
            <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#1C1B1B]/50 anim-row" style={{ transitionDelay: '400ms' }}>
              <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Free Guest Passes</h2>
              <ul className="flex justify-between gap-20 position relative left-[20px]">
                <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[180px]'><FaCheck /></li>
                <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[95px]'><FaCheck /></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
