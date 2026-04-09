import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Pricing = () => {
  return (

     <>
    {/* Section Hero et Banière */}
    <section className='relative w-[1680px] h-[450px] mx-1  py-24 px-120 flex flex-col gap-16 '>
      <div 
        className="absolute inset-0 bg-[url('/pricingCoach4.png')] bg-cover bg-center"
        style={{ opacity: 0.2 }} 
      />
      <div className='relative z-10'>
        <div className='text-[#FFFFFF] text-8xl font-bold flex flex-row gap-6'>
          <h1>SIMPLE</h1>
          <div className='flex flex-col'>
            <h1 className='z-10'>PRICING</h1>
            <div className='w-[380px] h-[12px] position relative bottom-4 bg-[#E8000D]'></div>
          </div>
        </div>
        <h2 className='w-[360px] h-[28px] text-[#A0A0A0] text-[25px] mx-50'>No hidden fees. Cancel anytime.</h2>
      </div>
      <div className='w-[363px] h-[56px] bg-[#2e2d2d] mx-49 p-4 text-white flex flex-row gap-0 font-bold'>
        <button className='w-[138px] h-[44px] py-3 position relative bottom-2.5'>MONTHLY</button>
        <button className='w-[216px] h-[44px] py-3 bg-[#E8000D] position relative bottom-2.5 left-2'>YEARLY (SAVE 20%)</button>
      </div>
    </section>

    {/* Pricing card section */}
    <section className='w-[1280px] h-[750px] text-white '>

      <div className='py-[80px] px-[32px] position relative left-[200px] bg-[#131313]'>
        <ul className='w-[1216px] h-[520px] max-w-[1280px] grid grid-rows-1 grid-cols-3 gap-y-8 gap-x-20 opacity-100'>
          <li className='w-[384px] h-[525px] flex justify-between p-10 border-1 border-olive-600 opacity-100 col-start-1 row-start-1 col-span-1 row-span-1'>
            <div className="">
              <h1 className="w-[302px] h-[32px] mb-2.5 font-bold text-[24px] leading-[32px] tracking-[-1.2px] align-middle uppercase">STARTER</h1> 
              <div className='flex flex-row gap-2'>
                <h1 class="w-[23px] h-[42px] position relative top-[52px] font-['Space_Grotesk'] font-black text-[36px] leading-[40px] tracking-normal align-middle">$</h1>
                <h1 className="w-[123px] h-[101px] position relative right-[10px] font-black text-[96px] leading-[96px] tracking-normal align-middle">49</h1>
                <h2 className="w-[33px] h-[25px] position relative top-[67px] right-[15px] font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] tracking-normal align-middle">/MO</h2>
              </div>   
              <ul className='w-[319px] h-[160px] pt-[8px] mt-[32px] flex flex-col gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Access to gym floor</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Basic locker access</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>1 Orientation session</li>
              </ul>
              <button className="w-[302px] h-[60px] border-4 mt-[48px] border-olive-600">SELECT PLAN</button>


            </div>
          </li>
          <li className='w-[404px] h-[610px] bg-[#E8000D] shadow-[0_0_40px_0_#E8000D40] flex justify-between p-10 opacity-100 col-start-2 row-start-1 col-span-1 row-span-1 left-[416px]'>
            <fieldset>
              <legend className="w-[158px] py-2 text-center position relative bottom-[60px] bg-[#000000]">MOST POPULAR</legend>
              <h1 className="w-[302px] h-[32px] font-bold text-[24px] leading-[32px] tracking-[-1.2px] align-middle uppercase position relative bottom-[40px]">PRO</h1>
              <div className='flex flex-row gap-2'>
                <h1 class="w-[23px] h-[42px] position relative top-[52px] font-['Space_Grotesk'] font-black text-[36px] leading-[40px] tracking-normal align-middle">$</h1>
                <h1 className="w-[123px] h-[101px] position relative right-[10px] font-black text-[96px] leading-[96px] tracking-normal align-middle">89</h1>
                <h2 className="w-[33px] h-[25px] position relative top-[67px] right-[15px] font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] tracking-normal align-middle">/MO</h2>
              </div>   
              <ul className='w-[319px] h-[160px] pt-[8px] mt-[32px] flex flex-col gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Everything in Starter</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Unlimited group classes</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Recovery zone access</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Nutrition guide</li>
              </ul>
              <button className="w-[319px] h-[67px] py-[20px] px-[24px] mt-[96px] bg-[#FFFFFF]"><p className=" h-[25px] text-[16px] leading-[24px] tracking-[-0.8px] text-center text-[#E8000D] align-middle uppercase font-bold">CHOOSE PRO</p></button>
            </fieldset>
          </li>
          <li className='w-[384px] h-[525px] flex justify-between p-10 border-1 border-olive-600 opacity-100 col-start-3 row-start-1 col-span-1 row-span-1'>
            <div>
              <h1 className="w-[302px] h-[32px] mb-2.5 font-bold text-[24px] leading-[32px] tracking-[-1.2px] align-middle uppercase">ELITE</h1>
              <div className='flex flex-row gap-2'>
                <h1 class="w-[23px] h-[42px] position relative top-[52px] font-['Space_Grotesk'] font-black text-[36px] leading-[40px] tracking-normal align-middle">$</h1>
                <h1 className="w-[123px] h-[101px] position relative right-[10px] font-black text-[96px] leading-[96px] tracking-normal align-middle">149</h1>
                <h2 className="w-[33px] h-[25px] position relative top-[67px] left-[30px] font-['Space_Grotesk'] font-bold text-[16px] leading-[24px] tracking-normal align-middle">/MO</h2>
              </div>   
              <ul className='w-[319px] h-[160px] pt-[8px] mt-[32px] flex flex-col gap-[32px]'>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Everything in pro</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Personnal Coach (2/mo)</li>
                <li className='flex flex-row gap-2 text-xl'><FaCheckCircle className='position relative top-1'/>Monthly body scans</li>
              </ul>
              <button className="w-[302px] h-[60px] border-4 mt-[48px] border-olive-600">SELECT PLAN</button>

            </div>            
          </li>
        </ul>
      </div>
    </section>

    {/* Section compare plans */}
    <section className="w-[1685px] h-[738px] text-white py-[96px] px-[185px] bg-[#0E0E0E]">
      <div className="w-[1024px] h-[546px] max-w-[1024px] flex flex-row gap-[64px]">     
        <div className='w-[1024px] h-[40px]'> 
          <h1 className="w-[320px] h-[240px] font-black text-[36px] text-[#E5E2E1] leading-[40px] tracking-[-1.8px] position relative left-[545px] uppercase">COMPARE PLANS</h1>
        </div>
        <ul className='w-[1024px] h-[442px] flex flex-col gap-0 position relative top-[100px] right-[200px]'>
          <li className="w-[1024px] h-[79px] border-b-2 border-[#E8000D] flex flex-row gap-30 text-xl bg-[#1C1B1B]">
            <h2 className='w-[417px] h-[77px] px-[24px] py-[26px] text-[18px] font-bold '>FEATURES</h2>
            <ul className='flex flex-row px-30'>
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] font-bold '>STARTER</li>
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold '>PRO</li>
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] font-bold '>ELITE</li>
            </ul>
          </li>
          <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#1C1B1B]/50">
            <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>24/7 Access</h2>
            <ul className="flex flex-row px-35">
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[#E8000D] text-[18px] font-bold position relative right-[100px] '><FaCheck /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[100px] '><FaCheck /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative left-[65px] '><FaCheck /></li>
            </ul>
          </li>
          <li className=" w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#0E0E0E]">
            <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Group Classes</h2>
            <ul className="flex flex-row px-35">
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[100px]'><FaCheck /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative left-[65px]'><FaCheck /></li>
            </ul>
          </li>
          <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#1C1B1B]/50">
            <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Recovery Zone</h2>
            <ul className=" flex justify-between gap-20 position relative left-[20px]">
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[180px]'><FaCheck /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative right-[95px]'><FaCheck /></li>
            </ul>
          </li>
          <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#0E0E0E]/50">
            <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Personal Coaching</h2>
            <ul className="flex flex-row px-35">
              <li className='w-[248px] h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#4B5563] font-bold position relative right-[100px]'><MdClose /></li>
              <li className='h-[77px] px-[24px] py-[26px] text-[18px] text-[#E8000D] font-bold position relative left-[65px]'><FaCheck /></li>
            </ul>
          </li>
          <li className="w-[1024px] h-[74px] flex flex-row gap-30 text-xl bg-[#1C1B1B]/50">
            <h2 className='w-[417px] h-[74px] px-[24px] py-[26px] text-[18px] font-bold'>Free Guest Passes</h2>
            <ul className=" flex justify-between gap-20 position relative left-[20px]">
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

export default Pricing

/*  */