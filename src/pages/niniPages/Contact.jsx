import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BiWorld } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";


const Contact = () => {
  return (
    <>
    {/* Section hero */}

    <section className='container flex flex-row items-center justify-center h-[409px]'>
      <div 
        className="absolute inset-0 bg-[url('/BG_contact.jpg')] bg-cover bg-center"
        style={{ opacity: 0.2 }} 
      />
      <div className='mt-60 relative left-8 top-10'>
        <div className='container mx-auto relative z-10'>
          <div className='text-[#FFFFFF] text-8xl font-bold flex flex-row gap-6'>
            <h1>GET IN</h1>
            <div className='flex flex-col'>
              <h1 className='z-10 text-[#E8000D]'>TOUCH</h1>
              <div className='w-[128px] h-[8px] m-5 relative right-20 bg-[#E8000D]'></div>
            </div>
          </div>
          <h2 className='w-[439px] h-[36px] max-w-[444px] text-[#A0A0A0] text-[22px] mx-35'>We're here to help you start your journey.</h2>
        </div>
      </div>
    </section>

    {/* section contact-layout */}

    <section className='container h-[870px]'>
      <div className='container mx-2 mt-70'>
        <ul className='flex flex-rows gap-x-[64px]'>
          <li>
            <div>
              <ul className='flex flex-col gap-y-[24px]'>
                <li className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8'>
                  <CiLocationOn className='w-[20px] h-[25px] mb-2 text-[#E8000D]'/>
                  <h1 className='mb-4 w-[105px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>OUR GYM</h1>
                  <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>123 VELOCITY WAY.PERFORMANCE DISTRICT,NY 10001</p>
                </li>
                <li className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8'>
                  <IoCallOutline className='w-[20px] h-[25px] mb-2 text-[#E8000D]'/>
                  <h1 className='mb-4 w-[105px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>CALL US</h1>
                  <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>(123) 456-7890</p>
                </li>
                <li className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8'>
                  <TfiEmail className='w-[20px] h-[25px] mb-2 text-[#E8000D]'/>
                  <h1 className='mb-4 w-[105px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>EMAIL US</h1>
                  <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>info@fitzone.com</p>
                </li>
                <li className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8'>
                  <TbClockHour4 className='w-[20px] h-[25px] mb-2 text-[#E8000D]' />
                  <h1 className='mb-4 w-[150px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>OPENING HOURS</h1>
                  <p className='w-[419px] h-[9px] mb-2 font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>MON-FRI: 05:00 AM - 23:00 PM</p>
                  <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>SAT-SUN: 07:00 AM - 21:00 PM</p>
                </li>
                <li className='w-[485px] h-[64px] py-8 flex flex-row gap-x-4 items-center'>
                  <HiSpeakerWave className='w-[25px] h-[25px] p-[4px] text-white border-1 border-[#5F3F3A]/20 rounded-4' />
                  <BiWorld className='w-[25px] h-[25px] p-[4px] text-white border-1 border-[#5F3F3A]/20 rounded-4' />
                  <FaRegCirclePlay className='w-[25px] h-[25px] p-[4px] text-white border-1 border-[#5F3F3A]/20 rounded-4' />
                </li>
              </ul>
            </div>
          </li>
          <li className='w-[720px] h-[622px] bg-[#1C1B1B] top-[96px] left-[533.33px] rounded-[4px] border-1 border-[#5F3F3A]/15 pt-[39.5px] pr-[40px] pb-[56px] pl-[40px] gap-[32px] col-start-6 col-span-7 row-start-1 row-span-1'>
            <div className="w-[616.67px] flex flex-row h-[36px] gap-[16px] mb-8">
              <h1 className="font-black text-[30px] text-[#E5E2E1] leading-[36px] tracking-[-1.5px] align-middle">SEND US A</h1>
              <div>
                <h1 className="font-black text-[30px] text-[#E8000D] leading-[36px] tracking-[-1.5px] align-middle">MESSAGE</h1>
              </div>
            </div>
            <form className='w-[616.67px] h-[479px]'>
              <ul className='flex flex-col gap-[24px]'>
                <li className='w-[616px] h-[81px] flex flex-row gap-[48px] text-white'>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label htmlFor="" className='w-[90px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px] align-middle'>FULL NAME</label>
                    <input type="text" placeholder='JOHN DOE' className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/20 radius-4'/>
                  </div>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label htmlFor="" className='w-[90px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px] align-middle'>EMAIL</label>
                    <input type="email" placeholder='EMAIL@EXAMPLE.com' className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/15'/>
                  </div>
                </li>
                <li className='w-[616px] h-[81px] flex flex-row gap-[48px] text-white'>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label htmlFor="" className='w-[120px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px] align-middle'>PHONE NUMBER</label>
                    <input type="text" placeholder='(123) 456-7890' className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/15'/>
                  </div>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label htmlFor="" className='w-[90px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px] align-middle'>SUBJECT</label>
                    <select name="" id="" className='w-[296px] h-[57px] px-[16px] py-[18px] bg-[#0E0E0E] border-1 border-[#5F3F3A]/15'>
                      <option value="">SELECT A SUBJECT</option>
                      <option value="general">GENERAL INQUIRY</option>
                      <option value="membership">MEMBERSHIP</option>
                      <option value="classes">CLASSES</option>
                    </select>
                  </div>
                </li>
                <li className='w-[616px] h-[81px] flex flex-row gap-[48px]  text-white'>
                  <div className='w-[296px] h-[81px] flex flex-col gap-[8px]'>
                    <label htmlFor="" className='w-[120px] h-[15px] font-bold text-[10px] text-[#E9BCB6] leading-[15px] tracking-[1px] align-middle'>YOUR MESSAGE</label>
                    <textarea name="" id="" placeholder='TELL US YOUR GOALS...' className="w-[640.67px] h-[154px] opacity-100 rounded-[4px] border-[1px] border-[#5F3F3A]/15 px-[16px] pt-[16px] pb-[112px] bg-[#0E0E0E] overflow-hidden resize-none"></textarea>
                  </div>
                </li>
                <li className="w-[616.67px] h-[68px] opacity-100 rounded-[4px] py-[20px] mt-15">
                  <button type="submit" className="w-[640px] h-[68px] opacity-100 rounded-[4px] py-[20px] bg-gradient-to-r from-[#FFB4A9] to-[#E8000D] text-white font-bold">SEND MESSAGE</button>
                </li>
              </ul>
            </form>
          </li>
        </ul>
      </div>
    </section>

    {/* section MAP */}

    <section className='h-[829px] py-[96px] bg-[#0E0E0E]'>
      <div className='container mx-auto relative z-10'>
        <div className='text-[#FFFFFF] text-8xl font-bold flex flex-row gap-2'>
          <h1 className="font-black text-[30px] text-[#E5E2E1] leading-[36px] tracking-[-1.5px] align-middle">FIND</h1>
          <div>
            <h1 className="font-black text-[30px] text-[#E8000D] leading-[36px] tracking-[-1.5px] align-middle">US</h1>
          </div>
        </div>
        <h2 className='w-[1232px] h-[20px] max-w-[444px] text-[#E9BCB6] text-[14px] mt-3'>VIST OUR PERFORMANCE LAB IN THE HEART OF THE CITY</h2>
      </div>
      <img src="/MAP2.png" alt="Map" className='w-[1600px] h-[500px] my-10 mx-auto'/>
    </section>

    {/* section -CTA Banner */}

    <section>
      <div className='w-[1680px] h-[196px] py-[48px] bg-[#E8000D] flex flex-row gap-70 mb-0'>
        <h1 className='w-[815px] h-[60px] font-bold text-[60px] text-[#FFFFFF] px-[20px]'>READY TO TRANSFORM?</h1>
        <button className='w-[204px] h-[68px] border-2 border-[#FFFFFF] text-[#FFFFFF] bg-transparent hover:bg-[#FFFFFF] hover:text-[#E8000D] py-[10px] px-[20px] whitespace-nowrap shrink-0 relative top-3'>
          START FREE TRIAL
        </button>
      </div>
    </section>

    </>
  )
}

export default Contact