import Footer from "../components/Footer"
import Products from "../components/Products"
import SearchFilter from "../components/SearchFilter"

const MarketplacePage = () => {
    return (
        <div className='md:px-16 px-4 my-4'>
            <SearchFilter/>
            <Products/>
            <Footer />
        </div>
    )
}

export default MarketplacePage
