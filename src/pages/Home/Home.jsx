import TwoCards from "../../component/TwoCards/TwoCards";
import Slideshow from "../../component/Slideshow/Slideshow";

const HomePage = () => {
  return(
    <div className="container">
      <Slideshow />
      <TwoCards />
    </div>
  )
}

export default HomePage;