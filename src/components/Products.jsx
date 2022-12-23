import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filter from "../assets/filter.svg";
import { Link } from "react-router-dom";
import angle from "../assets/angle.svg";
import PriceSlider from "./PriceSlider";
const Products = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [priceRange, setPriceRange] = useState(0);
  const [showArtist, setShowArtist] = useState(false);
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(900);

  const { products } = useSelector((state) => state.product);

  return (
    <div className="w-full flex my-10">
      {/* sidebar with filters options */}
      <div className="hidden md:block w-3/12 space-y-4">
        <div className="border-4 flex space-x-4 border-transparent py-2 w-[10rem] border-b-black">
          <img width="20rem" src={filter} />
          <h2 className="text-2xl font-semibold">Filter</h2>
        </div>
        {/* Filter caterogy */}
        <div>
          <div
            onClick={() => {
              setShowCategory(!showCategory);
            }}
            className="flex w-[75%] justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl font-normal">By category</h2>
            <img
              className={`duration-500 ${
                showCategory ? "rotate-180" : "rotate-0"
              }`}
              src={angle}
            />
          </div>
          <form
            className={`my-4 space-y-4 ${showCategory ? "block" : "hidden"}`}
          >
            <div className="flex space-x-4 items-center">
              <input type="checkbox" className="bg-gray-400" />
              <label>Editorials</label>
            </div>
            <div className="flex space-x-4 items-center">
              <input type="checkbox" className="bg-gray-400" />
              <label>Editorials</label>
            </div>
            <div className="flex space-x-4 items-center">
              <input type="checkbox" className="bg-gray-400" />
              <label>Editorials</label>
            </div>
            <div className="flex space-x-4 items-center">
              <input type="checkbox" className="bg-gray-400" />
              <label>Editorials</label>
            </div>
          </form>
        </div>
        {/* Filter by price */}
        <div>
          <div
            onClick={() => {
              setShowPrice(!showPrice);
            }}
            className="flex w-[75%] justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl font-normal">By price</h2>
            <img
              className={`duration-500 ${
                showPrice ? "rotate-180" : "rotate-0"
              }`}
              src={angle}
            />
          </div>
          <form className={`my-4 space-y-4 ${showPrice ? "block" : "hidden"}`}>
            <PriceSlider 
            // minValue={minValue} 
            // maxValue={maxValue} 
            // setMinValue={setMinValue} 
            // setMaxValue={setMaxValue} 
            min={0} 
            max={900} 
            priceCap={900} 
            step={10} />
          </form>
        </div>
        {/* filter by artist */}
        <div>
          <div
            onClick={() => {
              setShowArtist(!showArtist);
            }}
            className="flex w-[75%] justify-between items-center cursor-pointer"
          >
            <h2 className="text-xl font-normal">By artist</h2>
            <img
              className={`duration-500 ${
                showArtist ? "rotate-180" : "rotate-0"
              }`}
              src={angle}
            />
          </div>
          <ul className={`my-4 space-y-4 ${showArtist ? "block" : "hidden"}`}>
            <h3 className="underline">All</h3>
            <li>Below $100.00</li>
            <li>$100.00 - $150.00</li>
            <li>$150.00 - $200.00</li>
            <li>Above $200.00</li>
          </ul>
        </div>
      </div>
      {/* Product display */}
      <div className="w-full md:w-9/12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, i) => {
          return (
            <Link key={i} to={`details/${product.id}`}>
              <div className="p-2 space-y-4 cursor-pointer rounded-lg shadow-md bg-white">
                <div className="w-full">
                  {console.log(product.image)}
                  <img src={product.image} className="w-full" />
                </div>
                <div className="flex flex-row md:flex-col gap-y-3 pb-4 justify-between">
                  <h3>{product.title}</h3>
                  <h3>{product.price}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
