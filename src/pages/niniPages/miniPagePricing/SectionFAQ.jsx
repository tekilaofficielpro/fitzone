import { IoIosArrowDown } from "react-icons/io";
import styles from "./animationCSS";

export const SectionFAQ = () => {
  return (
    <>
    <style>{styles}</style>
    <section className="h-[766px] text-white py-[96px] px-[192px] bg-[#131313]">
        <div className='container mx-auto w-[896px] h-[574px] max-w-[896px] flex flex-col gap-[64px]'>
            <div className='w-[896px] h-[40px]'>
            <h1 className='w-[354px] h-[40px] font-black text-[36px] leading-[40px] tracking-[-1.8px] text-center relative left-[260px] anim-faq'>FREQUENTLY ASKED</h1>
            </div>
            <div className='w-[896px] h-[470px] max-w-[896px]'>
            <ul className='flex flex-col gap-[16px]'>
                <li className='w-[896px] h-[146px] border-[1px] rounded-[4px] border-[#FFFFFF]/5 p-[24px] flex flex-col gap-[16px] bg-[#1C1B1B] anim-faq' style={{ transitionDelay: '100ms' }}>
                <div className='w-[846px] h-[28px] justify-between flex flex-row'>
                    <h1 className="w-[415px] h-[28px] font-bold text-[18px] leading-[28px] tracking-[-0.45px]">CAN I CANCEL MY SUBSCRIPTION AT ANY TIME?</h1>
                    <IoIosArrowDown className='text-[#E8000D]'/>
                </div>
                <p className='w-[846px] h-[52px] font-normal text-[16px] text-[#A0A0A0] leading-[26px] tracking-normal'>Yes, all of our plans are commitment-free on a month-to-month basis. You can cancel through your dashboard with a 30-day notice period.</p>
                </li>
                <li className='w-[896px] h-[146px] border-[1px] rounded-[4px] border-[#FFFFFF]/5 p-[24px] flex flex-col gap-[16px] bg-[#1C1B1B] anim-faq' style={{ transitionDelay: '200ms' }}>
                <div className='w-[846px] h-[28px] justify-between flex flex-row'>
                    <h1 className="w-[415px] h-[28px] font-bold text-[18px] leading-[28px] tracking-[-0.45px]">ARE THERE ANY JOINING FEES?</h1>
                    <IoIosArrowDown className='text-[#E8000D]'/>
                </div>
                <p className='w-[846px] h-[52px] font-normal text-[16px] text-[#A0A0A0] leading-[26px] tracking-normal'>Absolutely not. We believe in transparency. The price you see is the price you pay, with no hidden sign-up or administration costs.</p>
                </li>
                <li className='w-[896px] h-[146px] border-[1px] rounded-[4px] border-[#FFFFFF]/5 p-[24px] flex flex-col gap-[16px] bg-[#1C1B1B] anim-faq' style={{ transitionDelay: '300ms' }}>
                <div className='w-[846px] h-[28px] justify-between flex flex-row'>
                    <h1 className="w-[415px] h-[28px] font-bold text-[18px] leading-[28px] tracking-[-0.45px]">DO YOU OFFER STUDENT DISCOUNTS?</h1>
                    <IoIosArrowDown className='text-[#E8000D]'/>
                </div>
                <p className='w-[846px] h-[52px] font-normal text-[16px] text-[#A0A0A0] leading-[26px] tracking-normal'>We offer a 15% discount for verified students on our Pro plan. Bring your valid student ID to any of our locations to activate this rate.</p>
                </li>
            </ul>
            </div>
        </div>
    </section>
    </>
  )
}
