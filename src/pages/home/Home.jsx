import ClassHome from "./ClassHome"
import Commanders from "./Commanders"
import HomeHeader from "./HomeHeader"
import RatingHome from "./RatingHome"
import WhySection from "./WhySection"
import Review from "./Review"


const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Review />
      <ClassHome />
      <WhySection />
      <Commanders />
      <RatingHome />
    </div>
  )
}

export default Home