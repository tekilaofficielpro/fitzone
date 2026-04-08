import React from 'react'

const Pricing = () => {
  return (
    // Section Hero et Banière
    <section className='relative w-[1700px] h-[450px] mx-1  py-24 px-120 flex flex-col gap-16 '>
      <div 
        className="absolute inset-0 bg-[url('/pricingCoach1.png')] bg-cover bg-center"
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
  )
}

export default Pricing

/*  */