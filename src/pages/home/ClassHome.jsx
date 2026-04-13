import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import class1 from '../../assets/class1.png'
import class2 from '../../assets/class2.png'
import class3 from '../../assets/class3.png'

const ClassHome = () => {
    return (
        <div className='container '>
            <div className='flex justify-between mt-8 sm:mt-10 md:mt-50 xl:mt-10 px-2'>
                <h1 className="text-white text-xl sm:text-4xl xl:text-7xl font-bold ">OUR CLASSES</h1>
                <span>
                    <Link to="/classes" className="text-secondary text-sm sm:text-xl font-bold sm:mt-2 md:mt-4 inline-block underline underline-offset-8">
                        <span>EXPLORE ALL CLASSES</span>
                        <FaLongArrowAltRight className="inline-block ml-2" />
                    </Link>
                </span>
            </div>
            {/* card  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-start'>
                <div className="relative mt-10 " style={{
                    clipPath: "polygon(10% 0, 85% 0, 100% 100%, 0% 100%)"
                }}>
                    <img src={class1} alt="" className="w-md object-cover grayscale" />

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <h1 className='text-white text-2xl font-bold'>
                            HIGH INTENSITY
                        </h1>

                        <Link
                            to="/classes"
                            className="text-white/80 text-xl font-bold mt-2 inline-block underline underline-offset-8"
                        >
                            <span>DISCOVER</span>
                            <IoIosArrowForward className="inline-block ml-2" />
                        </Link>
                    </div>
                </div>
                <div className="relative mt-10" style={{
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)"
                }}>
                    <img src={class2} alt="" className="w-md object-cover grayscale" />

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <h1 className='text-white text-2xl font-bold'>
                            HIGH INTENSITY
                        </h1>

                        <Link
                            to="/classes"
                            className="text-white/80 text-xl font-bold mt-2 inline-block underline underline-offset-8"
                        >
                            <span>DISCOVER</span>
                            <IoIosArrowForward className="inline-block ml-2" />
                        </Link>
                    </div>
                </div>
                <div className="relative mt-10" style={{
                    clipPath: "polygon(10% 0, 85% 0, 100% 100%, 0% 100%)"
                }}>
                    <img src={class3} alt="" className="w-md object-cover grayscale" />

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <h1 className='text-white text-2xl font-bold'>
                            HIGH INTENSITY
                        </h1>

                        <Link
                            to="/classes"
                            className="text-white/80 text-xl font-bold mt-2 inline-block underline underline-offset-8"
                        >
                            <span>DISCOVER</span>
                            <IoIosArrowForward className="inline-block ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassHome