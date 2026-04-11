import trainingSchedule from "../../../utils/training"

const Planning = () => {
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long"
    });
    return (
        <section className="container">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-white text-2xl border-l-4 border-red-700 px-4">YOUR TRAINING WEEK</h1>
                </div>
                <div className="bg-tertiary space-x-4 h-15 py-4 px-3 rounded">
                    <span className="bg-secondary text-white text-sm px-4 py-3 hover:cursor-pointer">ALL TYPES</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-3 hover:cursor-pointer">CARDIO</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-3 hover:cursor-pointer">STRENGTH</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-3 hover:cursor-pointer">HIIT</span>
                    <span className="bg-gray-500 text-white text-sm px-4 py-3 hover:cursor-pointer">RECOVERY</span>
                </div>
            </div>

            {/* planning  */}
            <div className="grid grid-cols-2 md:grid-cols-7 mt-10 gap-6">
                {Object.entries(trainingSchedule).map(([day, sessions]) => {

                    const isToday = day === today;

                    return (
                        <div key={day}>

                            <h3
                                className={`text-white text-center px-4 py-3 border-b-3 hover:cursor-pointer 
          ${isToday ? "bg-gray-900 border-red-700" : "bg-gray-900 border-gray-700"}`}
                            >
                                {day}
                            </h3>

                            {sessions.map((session, index) => (
                                <div key={index}>
                                    <div
                                        className={`flex flex-col justify-center bg-tertiary border-l-4 rounded w-40 h-30 px-4 my-10 
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