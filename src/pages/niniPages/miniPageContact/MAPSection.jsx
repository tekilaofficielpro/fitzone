import { useScrollReveal } from "./userScroll";
import styles from "./animationCSS";

export const MAPSection = () => {
    const mapRef = useScrollReveal();
  return (
    <>
      <style>{styles}</style>
      <section className='h-[959px] py-[96px] bg-[#0E0E0E]'>
        <div ref={mapRef} className='container mx-auto relative right-60 z-10 reveal'>
            <div className='text-[#FFFFFF] text-8xl font-bold flex flex-row gap-2'>
            <h1 className="font-black text-[30px] text-[#E5E2E1] leading-[36px] tracking-[-1.5px] align-middle">FIND</h1>
            <h1 className="font-black text-[30px] text-[#E8000D] leading-[36px] tracking-[-1.5px] align-middle">US</h1>
            </div>
            <h2 className='max-w-[444px] text-[#E9BCB6] text-[14px] mt-3'>VIST OUR PERFORMANCE LAB IN THE HEART OF THE CITY</h2>
        </div>
        <div 
            className='w-[1800px] h-[660px] my-10 mx-auto transition-transform duration-700 hover:scale-[1.01]'
            style={{ backgroundImage: "url('/BG_MAP1.jpeg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
        />
       </section>
    </>
  )
}
