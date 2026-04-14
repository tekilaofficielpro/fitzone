import { useScrollReveal } from "./userScroll";
import styles from "./animationCSS";

export const MAPSection = () => {
    const mapRef = useScrollReveal();
  return (
    <>
      <style>{styles}</style>
      <section className='w-full py-[96px] bg-[#0E0E0E]'>
        <div ref={mapRef} className='container mx-auto px-6 sm:px-10 lg:px-16 z-10 reveal'>
          
          {/* Titre */}
          <div className='flex flex-row gap-2 mb-3'>
            <h2 className="font-black text-[clamp(22px,4vw,30px)] text-[#E5E2E1] leading-tight tracking-[-1.5px]">FIND</h2>
            <h2 className="font-black text-[clamp(22px,4vw,30px)] text-[#E8000D] leading-tight tracking-[-1.5px]">US</h2>
          </div>

          <p className='max-w-[444px] text-[#E9BCB6] text-[14px] mb-10'>
            VISIT OUR PERFORMANCE LAB IN THE HEART OF THE CITY
          </p>

          {/* Carte */}
          <div
            className='w-full h-[300px] sm:h-[450px] lg:h-[600px] rounded-[4px] transition-transform duration-700 hover:scale-[1.01]'
            style={{
              backgroundImage: "url('/BG_MAP1.jpeg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />

        </div>
      </section>
    </>
  )
}
