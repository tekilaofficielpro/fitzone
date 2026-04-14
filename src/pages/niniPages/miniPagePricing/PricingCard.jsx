import styles from "./animationCSS";
import { FaCheckCircle } from "react-icons/fa";
export const PricingCard = () => {
  return (
    <>
    <style>{styles}</style>
    <section className='container min-h-[750px] h-auto text-white'>
      <div className='py-10 sm:py-14 md:py-[80px] px-4 sm:px-6 md:px-[8px] bg-[#131313]'>
        <ul className='w-full max-w-[1216px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-10 px-4 md:px-0'>

          {/* STARTER */}
          <li className='w-full md:w-[384px] min-h-[525px] flex justify-between p-8 md:p-10 border-1 border-olive-600 col-start-1 anim-card-left'>
            <div className="w-full">
              <h1 className="font-bold text-[24px] leading-[32px] tracking-[-1.2px] uppercase mb-2.5">STARTER</h1>
              <div className='flex flex-row gap-2'>
                <h1 className="relative top-[52px] font-black text-[36px] leading-[40px]">$</h1>
                <h1 className="relative right-[10px] font-black text-[80px] md:text-[96px] leading-[96px]">49</h1>
                <h2 className="relative top-[67px] right-[15px] font-bold text-[16px] leading-[24px]">/MO</h2>
              </div>
              <ul className='w-full pt-[8px] mt-[32px] flex flex-col gap-[24px] md:gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Access to gym floor</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Basic locker access</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>1 Orientation session</li>
              </ul>
              <button className="w-full h-[60px] border-4 mt-[48px] border-olive-600 btn-select">SELECT PLAN</button>
            </div>
          </li>

          {/* PRO */}
          <li className='w-full md:w-[404px] min-h-[525px] md:min-h-[610px] bg-[#E8000D] shadow-[0_0_40px_0_#E8000D40] flex justify-between p-8 md:p-10 anim-card-center'>
            <fieldset className="w-full">
              <legend className="w-[158px] py-2 text-center relative bottom-[60px] bg-[#000000]">MOST POPULAR</legend>
              <h1 className="font-bold text-[24px] leading-[32px] tracking-[-1.2px] uppercase relative bottom-[40px]">PRO</h1>
              <div className='flex flex-row gap-2'>
                <h1 className="relative top-[52px] font-black text-[36px] leading-[40px]">$</h1>
                <h1 className="relative right-[10px] font-black text-[80px] md:text-[96px] leading-[96px]">89</h1>
                <h2 className="relative top-[67px] right-[15px] font-bold text-[16px] leading-[24px]">/MO</h2>
              </div>
              <ul className='w-full pt-[8px] mt-[32px] flex flex-col gap-[24px] md:gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Everything in Starter</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Unlimited group classes</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Recovery zone access</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Nutrition guide</li>
              </ul>
              <button className="w-full h-[67px] py-[20px] px-[24px] mt-[48px] md:mt-[96px] bg-[#FFFFFF] btn-pro">
                <p className="text-[16px] leading-[24px] tracking-[-0.8px] text-center text-[#E8000D] uppercase font-bold">CHOOSE PRO</p>
              </button>
            </fieldset>
          </li>

          {/* ELITE */}
          <li className='w-full md:w-[384px] min-h-[525px] flex justify-between p-8 md:p-10 border-1 border-olive-600 anim-card-right'>
            <div className="w-full">
              <h1 className="font-bold text-[24px] leading-[32px] tracking-[-1.2px] uppercase mb-2.5">ELITE</h1>
              <div className='flex flex-row gap-2'>
                <h1 className="relative top-[52px] font-black text-[36px] leading-[40px]">$</h1>
                <h1 className="relative right-[10px] font-black text-[80px] md:text-[96px] leading-[96px]">149</h1>
                <h2 className="relative top-[67px] left-[30px] font-bold text-[16px] leading-[24px]">/MO</h2>
              </div>
              <ul className='w-full pt-[8px] mt-[32px] flex flex-col gap-[24px] md:gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Everything in pro</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Personnal Coach (2/mo)</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='relative top-1'/>Monthly body scans</li>
              </ul>
              <button className="w-full h-[60px] border-4 mt-[48px] border-olive-600 btn-select">SELECT PLAN</button>
            </div>
          </li>

        </ul>
      </div>
    </section>
    </>
  )
}
