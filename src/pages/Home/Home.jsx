import TwoCards from "../../components/TwoCards/TwoCards";
import Slideshow from "../../components/Slideshow/Slideshow";
import OneCard from '../../components/OneCard/OneCard'
import Devider from "../../components/Devider";

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