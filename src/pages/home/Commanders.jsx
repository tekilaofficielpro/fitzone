import coach1 from '../../assets/coach1.png'
import coach2 from '../../assets/coach2.png'
import coach3 from '../../assets/coach3.png'

const Commanders = () => {
    return (
        <section className="container">
            <h1 className='text-white text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-center'>THE COMMANDERS</h1>
            {/* card  */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center md:place-items-start gap-6 mt-10'>
                <div className='w-80 md:w-90'>
                    <div className='border-b-8 border-red-600 '>
                        <img src={coach1} alt="coach one" className='block grayscale rounded-md' />
                    </div>
                    <h2 className='text-secondary text-sm md:text-lg px-2 mt-2'>STRENGTH & CONDITIONING</h2>
                    <p className='text-white text-xl md:text-2xl px-2'>MARCUS VANCE</p>
                    <p className='text-white text-lg italic border-l-4 border-red-800 px-2'>"Precision is the only path to progression."</p>
                </div>
                <div className='w-80 md:w-90'>
                    <div className='border-b-8 border-red-60'>
                        <img src={coach2} alt="coach two" className='grayscale rounded-md' />
                    </div>
                    <h2 className='text-secondary text-sm md:text-lg px-2 mt-2'>NUTRITION & WELLNESS</h2>
                    <p className='text-white text-xl md:text-2xl px-2'>SARAH JENKINS</p>
                    <p className='text-white text-lg italic border-l-4 border-red-800 px-2'>"Burn the limits you set for yourself."</p>
                </div>
                <div className='w-80 md:w-90'>
                    <div className='border-b-8 border-red-600'>
                        <img src={coach3} alt="coach three" className='grayscale rounded-md' />
                    </div>
                    <h2 className='text-secondary text-sm md:text-lg px-2 mt-2'>COMBAT TACTICS</h2>
                    <p className='text-white '>DAVID KIM</p>
                    <p className='text-white text-lg italic border-l-4 border-red-800 px-2'>"discipline outlasts motivation every time."</p>
                </div>
            </div>
        </section>
    )
}

export default Commanders