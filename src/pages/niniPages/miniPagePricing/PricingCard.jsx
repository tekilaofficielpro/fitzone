import styles from "./animationCSS";
import { FaCheckCircle } from "react-icons/fa";
export const PricingCard = () => {
  return (
    <>
    <style>{styles}</style>
    <section className='container h-[750px] text-white'>
      <div className='py-[80px] px-[8px] position bg-[#131313]'>
        <ul className='w-[1216px] h-[520px] max-w-[1280px] grid grid-rows-1 grid-cols-3 gap-y-8 gap-x-10 opacity-100 relative left-[25px]'>

          {/* STARTER */}
          <li className='w-[384px] h-[525px] flex justify-between p-10 border-1 border-olive-600 opacity-100 col-start-1 row-start-1 col-span-1 row-span-1 anim-card-left'>
            <div className="">
              <h1 className="w-[302px] h-[32px] mb-2.5 font-bold text-[24px] leading-[32px] tracking-[-1.2px] align-middle uppercase">STARTER</h1>
              <div className='flex flex-row gap-2'>
                <h1 className="w-[23px] h-[42px] position relative top-[52px] font-['Space_Grotesk'] font-black text-[36px] leading-[40px] tracking-normal align-middle">$</h1>
                <h1 className="w-[123px] h-[101px] position relative right-[10px] font-black text-[96px] leading-[96px] tracking-normal align-middle">49</h1>
                <h2 className="w-[33px] h-[25px] position relative top-[67px] right-[15px] font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] tracking-normal align-middle">/MO</h2>
              </div>
              <ul className='w-[319px] h-[160px] pt-[8px] mt-[32px] flex flex-col gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Access to gym floor</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Basic locker access</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>1 Orientation session</li>
              </ul>
              <button className="w-[302px] h-[60px] border-4 mt-[48px] border-olive-600 btn-select">SELECT PLAN</button>
            </div>
          </li>

          {/* PRO */}
          <li className='w-[404px] h-[610px] bg-[#E8000D] shadow-[0_0_40px_0_#E8000D40] flex justify-between p-10 opacity-100 col-start-2 row-start-1 col-span-1 row-span-1 anim-card-center'>
            <fieldset>
              <legend className="w-[158px] py-2 text-center position relative bottom-[60px] bg-[#000000]">MOST POPULAR</legend>
              <h1 className="w-[302px] h-[32px] font-bold text-[24px] leading-[32px] tracking-[-1.2px] align-middle uppercase position relative bottom-[40px]">PRO</h1>
              <div className='flex flex-row gap-2'>
                <h1 className="w-[23px] h-[42px] position relative top-[52px] font-['Space_Grotesk'] font-black text-[36px] leading-[40px] tracking-normal align-middle">$</h1>
                <h1 className="w-[123px] h-[101px] position relative right-[10px] font-black text-[96px] leading-[96px] tracking-normal align-middle">89</h1>
                <h2 className="w-[33px] h-[25px] position relative top-[67px] right-[15px] font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] tracking-normal align-middle">/MO</h2>
              </div>
              <ul className='w-[319px] h-[160px] pt-[8px] mt-[32px] flex flex-col gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Everything in Starter</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Unlimited group classes</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Recovery zone access</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Nutrition guide</li>
              </ul>
              <button className="w-[319px] h-[67px] py-[20px] px-[24px] mt-[96px] bg-[#FFFFFF] btn-pro">
                <p className="h-[25px] text-[16px] leading-[24px] tracking-[-0.8px] text-center text-[#E8000D] align-middle uppercase font-bold">CHOOSE PRO</p>
              </button>
            </fieldset>
          </li>

          {/* ELITE */}
          <li className='w-[384px] h-[525px] flex justify-between p-10 border-1 border-olive-600 opacity-100 col-start-3 row-start-1 col-span-1 row-span-1 anim-card-right'>
            <div>
              <h1 className="w-[302px] h-[32px] mb-2.5 font-bold text-[24px] leading-[32px] tracking-[-1.2px] align-middle uppercase">ELITE</h1>
              <div className='flex flex-row gap-2'>
                <h1 className="w-[23px] h-[42px] position relative top-[52px] font-['Space_Grotesk'] font-black text-[36px] leading-[40px] tracking-normal align-middle">$</h1>
                <h1 className="w-[123px] h-[101px] position relative right-[10px] font-black text-[96px] leading-[96px] tracking-normal align-middle">149</h1>
                <h2 className="w-[33px] h-[25px] position relative top-[67px] left-[30px] font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] tracking-normal align-middle">/MO</h2>
              </div>
              <ul className='w-[319px] h-[160px] pt-[8px] mt-[32px] flex flex-col gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Everything in pro</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Personnal Coach (2/mo)</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Monthly body scans</li>
              </ul>
              <button className="w-[302px] h-[60px] border-4 mt-[48px] border-olive-600 btn-select">SELECT PLAN</button>
            </div>
          </li>

        </ul>
      </div>
    </section>
    </>
  )
}
