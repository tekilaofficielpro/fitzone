import trainingSchedule from "../../../utils/training"
import { useState, useEffect, useRef } from "react";
import { planningAnimation } from "../../../components/animations/pageTrasition";

const Planning = () => {
    const [selectedFilter, setSelectedFilter] = useState("ALL TYPES");
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            planningAnimation(containerRef.current);
        }
    }, []);

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long"
    });
    const filterOptions = ["ALL TYPES", "CARDIO", "STRENGTH", "HIIT", "RECOVERY"];
    return (
        <section className="container" ref={containerRef}>
            {/* menu  */}
            <div className="flex flex-col sm:flex-col md:flex-row md:justify-between gap-4 md:gap-0 items-start md:items-center">
                <div>
                    <h1 className="text-white test-sm sm:text-2xl border-l-4 border-red-700 px-4">YOUR TRAINING WEEK</h1>
                </div>
                
                {/* Mobile Select Dropdown */}
                <select 
                    value={selectedFilter} 
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="md:hidden w-full bg-tertiary text-white text-sm px-4 py-3 rounded focus:outline-none"
                >
                    {filterOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                
                {/* Desktop Button Group */}
                <div className="hidden md:flex bg-tertiary space-x-4 h-15 py-4 px-3 rounded">
                    <span className="bg-secondary text-white text-sm px-4 py-1 hover:cursor-pointer">ALL TYPES</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-1 hover:cursor-pointer">CARDIO</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-1 hover:cursor-pointer">STRENGTH</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-1 hover:cursor-pointer">HIIT</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-1 hover:cursor-pointer">RECOVERY</span>
                </div>
            </div>

            {/* planning  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mt-10 gap-6">
                {Object.entries(trainingSchedule).map(([day, sessions]) => {

                    const isToday = day === today;

                    return (
                        <div key={day} className="flex flex-col sm:items-center px-4">

                            <h3
                                className={`text-white text-sm md:text-xs w-32 sm:w-50 md:w-28 lg:w-40 lg:text-base text-center px-4 py-3 border-b-3 hover:cursor-pointer 
          ${isToday ? "bg-gray-900 border-red-700" : "bg-gray-900 border-gray-700"}`}
                            >
                                {day}
                            </h3>

                            {sessions.map((session, index) => (
                                <div key={index}>
                                    <div
                                        className={`flex flex-col justify-center bg-tertiary border-l-4 rounded w-32 sm:w-50 md:w-28 lg:w-40 h-30 px-4 my-10 
              ${isToday ? "border-red-500" : "border-gray-800"}`}
                                    >
                                        <span className="text-secondary">{session.time}</span>
                                        <p className="text-white text-lg">{session.type}</p>
                                        <p className="text-red-200 text-sm">{session.coach}</p>
                                        <button className="bg-secondary text-white font-bold text-sm rounded-md mt-2 mb-2">
                                            BOOK NOW
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Planning