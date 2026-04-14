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

      {/* Card partagée — classes communes extraites */}
      {[
        {
          ref: card1Ref, delay: '',
          Icon: <CiLocationOn className='w-[20px] h-[25px] mb-2 text-[#E8000D]' />,
          title: 'OUR GYM',
          content: <p className='font-medium text-[12px] text-[#E9BCB6] leading-[20px]'>123 VELOCITY WAY. PERFORMANCE DISTRICT, NY 10001</p>
        },
        {
          ref: card2Ref, delay: 'delay-1',
          Icon: <IoCallOutline className='w-[20px] h-[25px] mb-2 text-[#E8000D]' />,
          title: 'CALL US',
          content: <p className='font-medium text-[12px] text-[#E9BCB6] leading-[20px]'>(123) 456-7890</p>
        },
        {
          ref: card3Ref, delay: 'delay-2',
          Icon: <TfiEmail className='w-[20px] h-[25px] mb-2 text-[#E8000D]' />,
          title: 'EMAIL US',
          content: <p className='font-medium text-[12px] text-[#E9BCB6] leading-[20px]'>info@fitzone.com</p>
        },
        {
          ref: card4Ref, delay: 'delay-3',
          Icon: <TbClockHour4 className='w-[20px] h-[25px] mb-2 text-[#E8000D]' />,
          title: 'OPENING HOURS',
          content: (
            <>
              <p className='font-medium text-[12px] text-[#E9BCB6] leading-[20px] mb-1'>MON-FRI: 05:00 AM - 23:00 PM</p>
              <p className='font-medium text-[12px] text-[#E9BCB6] leading-[20px]'>SAT-SUN: 07:00 AM - 21:00 PM</p>
            </>
          )
        },
      ].map(({ ref, delay, Icon, title, content }) => (
        <li
          key={title}
          ref={ref}
          className={`w-full max-w-[485px] border rounded-[4px] border-[#5F3F3A]/15 bg-[#1C1B1B] p-6 sm:p-8 reveal-left ${delay} transition-all duration-300 hover:border-[#E8000D]/50 hover:shadow-[0_0_20px_0_#E8000D20] hover:-translate-y-1`}
        >
          {Icon}
          <h2 className='mb-3 text-[15px] text-[#E5E2E1] font-bold'>{title}</h2>
          {content}
        </li>
      ))}

      {/* Réseaux sociaux */}
      <li
        ref={socialRef}
        className='w-full max-w-[485px] py-4 flex flex-row gap-x-4 items-center reveal delay-4'
      >
        {[HiSpeakerWave, BiWorld, FaRegCirclePlay].map((Icon, i) => (
          <Icon
            key={i}
            className='w-[25px] h-[25px] p-[4px] text-white border border-[#5F3F3A]/20 rounded transition-all duration-200 hover:text-[#E8000D] hover:border-[#E8000D]/50 hover:scale-110'
          />
        ))}
      </li>

    </ul>
    </>
  )
}
