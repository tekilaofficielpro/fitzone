import class5 from "../../../assets/class5.png"
import class6 from "../../../assets/class6.png"
import class7 from "../../../assets/class7.png"

const ClassExplorer = () => {
    return (
        <section className="container">
            <h1 className="text-white text-2xl px-4 md:text-3xl ">CLASS EXPLORER</h1>
            <hr className="w-30 border-t-5 border-red-700 mx-4 mt-3" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ">
                {/* card 1 */}
                <div className="w-80 rounded-md overflow-hidden bg-tertiary flex flex-col mx-auto">
                    <div className="relative">
                        <img
                            src={class5}
                            alt="velocity burn"
                            className="w-full h-65 object-cover grayscale"
                        />
                        <span className="absolute top-3 left-3 bg-secondary text-white text-xs px-2 py-1 rounded-md">
                            HIIT
                        </span>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="flex gap-2">
                            <span className="bg-gray-500/50 text-white px-2 py-1 rounded text-xs">
                                45 min
                            </span>
                            <span className="bg-gray-500/50 text-white px-2 py-1 rounded text-xs">
                                ADVANCED
                            </span>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-lg">
                                VELOCITY BURN
                            </h1>
                            <p className="text-red-200 text-sm mt-1">
                                Maximum intensity intervals designed to spike your metabolism and build explosive power.
                            </p>
                        </div>
                    </div>
                    <button className="bg-secondary text-white py-2 px-4 m-4  rounded-md">
                        BOOK CLASS
                    </button>
                </div>

                {/* card 2 */}
                <div className="w-80 rounded-md overflow-hidden bg-tertiary flex flex-col mx-auto">
                    <div className="relative">
                        <img
                            src={class6}
                            alt="velocity burn"
                            className="w-full h-65 object-cover grayscale"
                        />
                        <span className="absolute top-3 left-3 bg-secondary text-white text-xs px-2 py-1 rounded-md">
                            STRENGTH
                        </span>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="flex gap-2">
                            <span className="bg-gray-500/50 text-white px-2 py-1 rounded text-xs">
                                60 min
                            </span>
                            <span className="bg-gray-500/50 text-white px-2 py-1 rounded text-xs">
                                ALL LEVELS
                            </span>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-lg">
                                IRON LAB
                            </h1>
                            <p className="text-red-200 text-sm mt-1">
                                Surgical focus on compound movements. Build functional strength using professional-grade equipment and technique.
                            </p>
                        </div>
                    </div>
                    <button className="bg-secondary text-white py-2 px-4 m-4  rounded-md">
                        BOOK CLASS
                    </button>
                </div>

                    {/* card 3 */}
                <div className="w-80 rounded-md overflow-hidden bg-tertiary flex flex-col mx-auto">
                    <div className="relative">
                        <img
                            src={class7}
                            alt="velocity burn"
                            className="w-full h-65 object-cover grayscale"
                        />
                        <span className="absolute top-3 left-3 bg-secondary text-white text-xs px-2 py-1 rounded-md">
                            BOXIN
                        </span>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                        <div className="flex gap-2">
                            <span className="bg-gray-500/50 text-white px-2 py-1 rounded text-xs">
                                50 min
                            </span>
                            <span className="bg-gray-500/50 text-white px-2 py-1 rounded text-xs">
                                INTERMEDIATE
                            </span>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-lg">
                                SHADOW STRIKE
                            </h1>
                            <p className="text-red-200 text-sm mt-1">
                                Precision striking and defensive footwork. A high-calorie burn class that sharpens your reflexes and mental focus. 
                            </p>
                        </div>
                    </div>
                    <button className="bg-secondary text-white py-2 px-4 m-4  rounded-md">
                        BOOK CLASS
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ClassExplorer