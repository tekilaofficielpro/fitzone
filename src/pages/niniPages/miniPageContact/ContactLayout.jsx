import styles from "./animationCSS";
import { useScrollReveal } from "./userScroll";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TbClockHour4 } from "react-icons/tb";
import { HiSpeakerWave } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";

export const ContactLayout = () => {
  const card1Ref = useScrollReveal();
  const card2Ref = useScrollReveal();
  const card3Ref = useScrollReveal();
  const card4Ref = useScrollReveal();
  const socialRef = useScrollReveal();

  return (
    <>
    <style>{styles}</style>
    <ul className='flex flex-col gap-y-[24px]'>
        <li ref={card1Ref} className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8 reveal-left transition-all duration-300 hover:border-[#E8000D]/50 hover:shadow-[0_0_20px_0_#E8000D20] hover:-translate-y-1'>
        <CiLocationOn className='w-[20px] h-[25px] mb-2 text-[#E8000D]'/>
        <h1 className='mb-4 w-[105px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>OUR GYM</h1>
        <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>123 VELOCITY WAY.PERFORMANCE DISTRICT,NY 10001</p>
        </li>
        <li ref={card2Ref} className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8 reveal-left delay-1 transition-all duration-300 hover:border-[#E8000D]/50 hover:shadow-[0_0_20px_0_#E8000D20] hover:-translate-y-1'>
        <IoCallOutline className='w-[20px] h-[25px] mb-2 text-[#E8000D]'/>
        <h1 className='mb-4 w-[105px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>CALL US</h1>
        <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>(123) 456-7890</p>
        </li>
        <li ref={card3Ref} className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8 reveal-left delay-2 transition-all duration-300 hover:border-[#E8000D]/50 hover:shadow-[0_0_20px_0_#E8000D20] hover:-translate-y-1'>
        <TfiEmail className='w-[20px] h-[25px] mb-2 text-[#E8000D]'/>
        <h1 className='mb-4 w-[105px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>EMAIL US</h1>
        <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>info@fitzone.com</p>
        </li>
        <li ref={card4Ref} className='w-[485px] h-[163px] border-1 rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-8 reveal-left delay-3 transition-all duration-300 hover:border-[#E8000D]/50 hover:shadow-[0_0_20px_0_#E8000D20] hover:-translate-y-1'>
        <TbClockHour4 className='w-[20px] h-[25px] mb-2 text-[#E8000D]' />
        <h1 className='mb-4 w-[150px] h-[9px] text-[15px] text-[#E5E2E1] font-bold'>OPENING HOURS</h1>
        <p className='w-[419px] h-[9px] mb-2 font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>MON-FRI: 05:00 AM - 23:00 PM</p>
        <p className='w-[419px] h-[9px] font-medium text-[12px] text-[#E9BCB6] leading-[20px] tracking-normal align-middle'>SAT-SUN: 07:00 AM - 21:00 PM</p>
        </li>
        <li ref={socialRef} className='w-[485px] h-[64px] py-8 flex flex-row gap-x-4 items-center reveal delay-4'>
        <HiSpeakerWave className='w-[25px] h-[25px] p-[4px] text-white border-1 border-[#5F3F3A]/20 rounded-4 transition-all duration-200 hover:text-[#E8000D] hover:border-[#E8000D]/50 hover:scale-110' />
        <BiWorld className='w-[25px] h-[25px] p-[4px] text-white border-1 border-[#5F3F3A]/20 rounded-4 transition-all duration-200 hover:text-[#E8000D] hover:border-[#E8000D]/50 hover:scale-110' />
        <FaRegCirclePlay className='w-[25px] h-[25px] p-[4px] text-white border-1 border-[#5F3F3A]/20 rounded-4 transition-all duration-200 hover:text-[#E8000D] hover:border-[#E8000D]/50 hover:scale-110' />
        </li>
    </ul>
    </>
  )
}
