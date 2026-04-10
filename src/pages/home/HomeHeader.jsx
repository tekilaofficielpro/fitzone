import { Link } from "react-router-dom";

const HomeHeader = () => {
    return (
        <section className="bg-image">
            <div className="container flex items-center justify-center">
                <div className="">
                    <div className="text-secondary flex gap-5 mt-20">
                        <hr className="text-red-500 w-20 mt-3" />
                        <p>BEYOND HUMAN LIMITS</p>
                    </div>
                    <h1 className="flex flex-col leading-normal">
                        <span className="text-white text-[150px]">TRANSFORM</span>
                        <span className="text-stroke text-[100px]">YOUR BODY.</span>
                    </h1>
                    <p className="text-white/50">This is not a gym. This is a high performance laboratory <br /> where raw power meets calculated precision.</p>
                    <div className="space-x-5 mt-5">
                        <button className="bg-secondary px-4 py-3 rounded">
                            <Link to="/login" className="text-white">JOIN NOW</Link>
                        </button>
                        <button className="border border-white px-4 py-3 rounded">
                            <Link to="/classes" className="text-white">SEE CLASSES</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container max-w-4/5 h-40 bg-tertiary mx-auto flex flex-row justify-center items-center px-50 mt-10 gap-20 text-center border-l-8 border-red-700">
                <div>
                    <span className="text-secondary text-7xl font-bold">500+</span>
                    <p className="text-white font-bold text-lg">ACTIVE WARRIORS</p>
                </div>
                <div>
                    <span className="text-secondary text-7xl font-bold">20+</span>
                    <p className="text-white font-bold text-lg">WAR ZONES</p>
                </div>
                <div>
                    <span className="text-secondary text-7xl font-bold">10</span>
                    <p className="text-white font-bold text-lg">MASTER COACHES</p>
                </div>
                <div>
                    <span className="text-secondary text-7xl font-bold">5</span>
                    <p className="text-white font-bold text-lg">YEARS OF EXCELLENCE</p>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader