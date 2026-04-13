import coach4 from "../../../assets/coach4.png"
import coach5 from "../../../assets/coach5.png"
import coach6 from "../../../assets/coach6.png"

const CardCoach = () => {
    return (
        <section className="bg-tertiary">
            <div className="grid grid-cols-1 md:grid-cols-3 py-5 container">
                <div className="relative w-80 group">
                    <img
                        src={coach5}
                        alt="Coach 5"
                        className="grayscale object-cover rounded-md h-100"
                    />

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <p className="text-secondary text-sm">HYBRID ATHELTE</p>
                        <p className="text-white text-2xl">ELENA ROSS</p>
                        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-900">
                            <p className="text-red-300 text-sm mt-2">
                                Specializes in functional mobility and high-performance endurance...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-80 group">
                    <img
                        src={coach4}
                        alt="Coach 4"
                        className="grayscale object-cover rounded-md h-100"
                    />

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <p className="text-secondary text-sm">STRENGTH SPECIALIST</p>
                        <p className="text-white text-2xl">MARCUS VANCE</p>
                        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-900">
                            <p className="text-red-300 text-sm mt-2">
                                Expert in powerlifting and metabolic conditioning...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative w-80 group">
                    <img
                        src={coach6}
                        alt="Coach 6"
                        className="grayscale object-cover rounded-md h-100"
                    />

                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <p className="text-secondary text-sm">CONDITIONING PRO</p>
                        <p className="text-white text-2xl">JAXON REED</p>
                        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-900">
                            <p className="text-red-300 text-sm mt-2">
                                Former D1 athlete focusing on explosive power and athletic...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardCoach