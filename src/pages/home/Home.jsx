import ClassHome from "./ClassHome"
import Commanders from "./Commanders"
import HomeHeader from "./HomeHeader"
import RatingHome from "./RatingHome"
import WhySection from "./WhySection"


const Home = () => {
  return (
    <div>
      <HomeHeader />
      <ClassHome />
      <WhySection />
      <Commanders />
      <RatingHome />
    </div>
  )
}

export default Home