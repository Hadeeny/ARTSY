import location from "../assets/location.svg";
import email from "../assets/email.svg";

const Footer = () => {
  return (
    <footer className="w-11/12 mx-auto">
      {/* main footer */}
      <div className="flex justify-between">
        <div className="hidden md:flex items-center">
          <h2 className="uppercase text-3xl font-bold">Artsy.</h2>
        </div>
        <ul className="hidden md:block space-y-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Auction</a>
          </li>
          <li>
            <a href="#">Drops</a>
          </li>
        </ul>
        <ul className="hidden md:block space-y-4">
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Wallet</a>
          </li>
          <li>
            <a href="#">Rates</a>
          </li>
          <li>
            <a href="#">High bids</a>
          </li>
        </ul>
        <ul className="space-y-4 pb-8">
          <li className="flex items-center space-x-4">
            <img width="20rem" src={email} />
            <a href="#">artsystudio@gmail.com</a>
          </li>
          <li className="flex items-center space-x-4">
            <img width="20rem" src={location} />
            <a href="#">Lagos, Nigeria</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block text-center text-sm mt-10 mb-2">
        <h2>Artsystudio 2022 All right reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
