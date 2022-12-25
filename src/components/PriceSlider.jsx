import { useState, useEffect, useRef } from "react";

const PriceSlider = ({ min, max, step, priceCap }) => {
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

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

  return (
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
              min={min}
              step={step}
              max={max}
              value={minValue}
              className="range-min w-full absolute bg-transparent -top-1 h-1  
              appearance-none pointer-events-none"
            />

            <input
              onChange={handleMax}
              type="range"
              min={min}
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
  );
};

export default PriceSlider;
