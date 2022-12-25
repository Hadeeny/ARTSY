import { useState, useEffect, useRef } from "react";
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
  const { products } = useSelector((state) => state.product);

  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(900);

  const handleMin = (e) => {
    setMinValue(e.target.value);
    if (e.target.value > maxValue) {
      setMinValue(maxValue);
    }
  };

  const handleMax = (e) => {
    if (e.target.value > minValue) {
      setMaxValue(e.target.value);
    } else setMaxValue(minValue);
  };

  const max = 900;
  const step = 10;

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

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
            <div className="w-9/12">
              <div className="">
                <div className="flex justify-between my-6 ">
                  <div className="rounded-md w-32 space-x-2">
                    <span className="font-semibold"> Min</span>
                    <input
                      onChange={(e) => setMinValue(e.target.value)}
                      type="number"
                      value={minValue}
                      className=" w-14 rounded-md border border-gray-400"
                    />
                  </div>
                  {/* <div className="font-semibold text-lg"> - </div> */}
                  <div className="flex space-x-2">
                    <span className=" font-semibold">Max</span>
                    <input
                      onChange={(e) => setMaxValue(e.target.value)}
                      type="number"
                      value={maxValue}
                      className=" rounded-md w-14 border border-gray-400"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="slider relative h-1 rounded-md bg-black">
                    <div
                      className="progress absolute h-1 bg-black rounded "
                      ref={progressRef}
                    ></div>
                  </div>

                  <div className="range-input relative  ">
                    <input
                      onChange={handleMin}
                      type="range"
                      min={0}
                      step={step}
                      max={max}
                      value={minValue}
                      className="range-min w-full absolute bg-transparent -top-1 h-1  
              appearance-none pointer-events-none"
                    />

                    <input
                      onChange={handleMax}
                      type="range"
                      min={0}
                      step={step}
                      max={max}
                      value={maxValue}
                      className="range-max absolute -top-1 h-1 w-full bg-transparent  
              appearance-none pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>
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
        {products
          .filter((prod) => {
            return prod.price > minValue && prod.price < maxValue;
          })
          .map((product, i) => {
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
