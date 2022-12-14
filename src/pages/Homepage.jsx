import Featured from "../components/Featured"
import DesktopHomeSlider from "../components/DesktopHomeSlider"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import TopCreators from "../components/TopCreators"
import Upcoming from "../components/Upcoming"
import Footer from "../components/Footer"

const Homepage = () => {
    return (
        <div className='w-full'>
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

// API_KEY='AIzaSyCxC0j1Q4GTom937gSPu2_WrK3rvS0vRxY',
// SENDER_ID='106500282608',
// APP_ID='1:106500282608:web:9e05578f94104f33044a35',
// MEASUREMENT_ID='G-9Q0S6Q66CX',