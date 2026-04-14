import { IoIosArrowDown } from "react-icons/io";
import styles from "./animationCSS";

export const SectionFAQ = () => {
  return (
    <>
    <style>{styles}</style>
    <section className="min-h-[766px] h-auto text-white py-16 sm:py-20 md:py-[96px] px-4 sm:px-10 md:px-[192px] bg-[#131313]">
        <div className='w-full max-w-[896px] mx-auto flex flex-col gap-10 md:gap-[64px]'>
            
            {/* Titre */}
            <h1 className='w-full font-black text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] tracking-[-1.8px] text-center anim-faq'>
            FREQUENTLY ASKED
            </h1>

            {/* FAQ items */}
            <ul className='flex flex-col gap-4 md:gap-[16px]'>

            <li className='w-full border-[1px] rounded-[4px] border-[#FFFFFF]/5 p-4 md:p-[24px] flex flex-col gap-4 bg-[#1C1B1B] anim-faq' style={{ transitionDelay: '100ms' }}>
                <div className='w-full flex flex-row justify-between items-center'>
                <h1 className="font-bold text-[16px] sm:text-[18px] leading-[28px] tracking-[-0.45px] pr-4">CAN I CANCEL MY SUBSCRIPTION AT ANY TIME?</h1>
                <IoIosArrowDown className='text-[#E8000D] shrink-0'/>
                </div>
                <p className='w-full font-normal text-[14px] sm:text-[16px] text-[#A0A0A0] leading-[26px]'>Yes, all of our plans are commitment-free on a month-to-month basis. You can cancel through your dashboard with a 30-day notice period.</p>
            </li>

            <li className='w-full border-[1px] rounded-[4px] border-[#FFFFFF]/5 p-4 md:p-[24px] flex flex-col gap-4 bg-[#1C1B1B] anim-faq' style={{ transitionDelay: '200ms' }}>
                <div className='w-full flex flex-row justify-between items-center'>
                <h1 className="font-bold text-[16px] sm:text-[18px] leading-[28px] tracking-[-0.45px] pr-4">ARE THERE ANY JOINING FEES?</h1>
                <IoIosArrowDown className='text-[#E8000D] shrink-0'/>
                </div>
                <p className='w-full font-normal text-[14px] sm:text-[16px] text-[#A0A0A0] leading-[26px]'>Absolutely not. We believe in transparency. The price you see is the price you pay, with no hidden sign-up or administration costs.</p>
            </li>

            <li className='w-full border-[1px] rounded-[4px] border-[#FFFFFF]/5 p-4 md:p-[24px] flex flex-col gap-4 bg-[#1C1B1B] anim-faq' style={{ transitionDelay: '300ms' }}>
                <div className='w-full flex flex-row justify-between items-center'>
                <h1 className="font-bold text-[16px] sm:text-[18px] leading-[28px] tracking-[-0.45px] pr-4">DO YOU OFFER STUDENT DISCOUNTS?</h1>
                <IoIosArrowDown className='text-[#E8000D] shrink-0'/>
                </div>
                <p className='w-full font-normal text-[14px] sm:text-[16px] text-[#A0A0A0] leading-[26px]'>We offer a 15% discount for verified students on our Pro plan. Bring your valid student ID to any of our locations to activate this rate.</p>
            </li>

            </ul>
        </div>
    </section>
    </>
  )
}
