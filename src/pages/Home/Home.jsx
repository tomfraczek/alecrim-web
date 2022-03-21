import TwoCards from "../../component/TwoCards/TwoCards";
import Slideshow from "../../component/Slideshow/Slideshow";
import OneCard from '../../component/OneCard/OneCard'
import Devider from "../../component/Devider";

const HomePage = () => {
  return(
    <div className="container">
      <Slideshow />
      <TwoCards />
      <Devider />
      <OneCard />
    </div>
  )
}

export default HomePage;