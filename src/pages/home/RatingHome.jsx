import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const RatingHome = () => {
    return (
        <section className="flex flex-row justify-center bg-tertiary  my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 p-20 gap-10">
                <div className="border-l-2 border-red-500 bg-primary w-100 h-70 rounded p-10 space-y-9">
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-1">
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                        </div>
                        <FaQuoteRight className="size-8 text-secondary" />
                    </div>
                    <p className="text-white text-xl text-center my-auto">
                        "The atmosphere here is electric. It's not just a gym,
                        it'a a performance lab that actually delivers results."
                    </p>
                    <span className="text-secondary font-bold text-center block mt-4">JAMES RODRIGUEZ</span>
                </div>

                <div className="border-l-2 border-red-500 bg-primary w-100 h-70 rounded p-10 space-y-9">
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-1">
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                        </div>
                        <FaQuoteRight className="size-8 text-secondary" />
                    </div>
                    <p className="text-white text-xl text-center my-auto">
                        "Switching to fitzone was the best decision for my prep.
                        The coaching team knows exactly how to push you."
                    </p>
                    <span className="text-secondary font-bold text-center block mt-4">ELENA FISHER</span>
                </div>

                <div className="border-l-2 border-red-500 bg-primary w-100 h-70 rounded p-10 space-y-9">
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-1">
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                            <span className="text-secondary"><FaStar /></span>
                        </div>
                        <FaQuoteRight className="size-8 text-secondary" />
                    </div>
                    <p className="text-white text-xl text-center my-auto">
                        "Professional equipment, clean environment, and a focus on high
                        performance. Exactly what I was looking for."
                    </p>
                    <span className="text-secondary font-bold text-center block mt-4">MICHAEL CHEN</span>
                </div>

            </div>
        </section>
    )
}

export default RatingHome