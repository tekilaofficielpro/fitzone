import coach1 from '../../assets/coach1.png'
import coach2 from '../../assets/coach2.png'
import coach3 from '../../assets/coach3.png'

const Commanders = () => {
    return (
        <section className="container">
            <h1 className='text-white text-7xl font-bold text-center'>THE COMMANDERS</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                <div>
                    <div className='border-b-8 border-red-600 w-90'>
                        <img src={coach1} alt="coach one" className='block grayscale rounded-md w-90' />
                    </div>
                    <h2 className='text-secondary mt-2'>STRENGTH & CONDITIONING</h2>
                    <p className='text-white text-2xl'>MARCUS VANCE</p>
                    <p className='text-white text-lg italic border-l-4 border-red-800 px-2'>"Precision is the only path to progression."</p>
                </div>
                <div>
                    <div className='border-b-8 border-red-600 w-90'>
                        <img src={coach2} alt="coach two" className='grayscale rounded-md w-90' />
                    </div>
                    <h2 className='text-secondary mt-2'>NUTRITION & WELLNESS</h2>
                    <p className='text-white text-2xl'>SARAH JENKINS</p>
                    <p className='text-white text-lg italic border-l-4 border-red-800 px-2'>"Burn the limits you set for yourself."</p>
                </div>
                <div>
                    <div className='border-b-8 border-red-600 w-90'>
                        <img src={coach3} alt="coach three" className='grayscale rounded-md w-90' />
                    </div>
                    <h2 className='text-secondary mt-2'>COMBAT TACTICS</h2>
                    <p className='text-white text-2xl'>DAVID KIM</p>
                    <p className='text-white text-lg italic border-l-4 border-red-800 px-2'>"discipline outlasts motivation every time."</p>
                </div>
            </div>
        </section>
    )
}

export default Commanders