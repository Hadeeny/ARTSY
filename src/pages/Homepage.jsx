import Featured from "../components/Featured"
import DesktopHomeSlider from "../components/DesktopHomeSlider"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import TopCreators from "../components/TopCreators"
import Upcoming from "../components/Upcoming"
import Footer from "../components/Footer"

const Homepage = () => {
    return (
        <div>
            <Hero/>
            <DesktopHomeSlider/>
            <Featured/>
            <Upcoming/>
            <TopCreators/>
            <Newsletter/>
            <Footer />
        </div>
    )
}

export default Homepage
