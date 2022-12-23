import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AuctionPage from "../pages/AuctionPage";
import Cartpage from "../pages/Cartpage";
import DropPage from "../pages/DropPage";
import MarketplacePage from "../pages/MarketplacePage";
import PaymentDetails from "../pages/PaymentDetails";
import ProductDetails from "../pages/ProductDetails";
import ShopingDetails from "../pages/ShopingDetails";
import Homepage from "../pages/Homepage";
import Livebid from "../pages/Livebid";
import { AnimatePresence } from "framer-motion";
import Loginpage from "../pages/Loginpage";
import Signuppage from "../pages/Signuppage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/marketplace/details/:id" element={<ProductDetails />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/details" element={<ShopingDetails />} />
        <Route path="/drops" element={<DropPage />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/livebids" element={<Livebid />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
