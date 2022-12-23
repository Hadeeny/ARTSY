import { useState, useEffect, useRef } from "react";

const PriceSlider = ({ min, max, step, priceCap }) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(900);

  const handleMin = (e) => {
    // if (maxValue - minValue >= priceCap && maxValue <= max) {
    //   if (parseInt(e.target.value) > parseInt(maxValue)) {
    //   } else {
    //     setMinValue(parseInt(e.target.value));
    //   }
    // } else {
    //   if (parseInt(e.target.value) < minValue) {
    //     setMinValue(parseInt(e.target.value));
    //   }
    // }
    setMinValue(e.target.value)
  };

  const handleMax = (e) => {
    // if (maxValue - minValue >= priceCap && maxValue <= max) {
    //   if (parseInt(e.target.value) < parseInt(minValue)) {
    //   } else {
    //     setMaxValue(parseInt(e.target.value));
    //   }
    // } else {
    //   if (parseInt(e.target.value) > maxValue) {
    //     setMaxValue(parseInt(e.target.value));
    //   }
    // }
    setMaxValue(e.target.value)
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

  return (
    <div className="w-11/12 ">
      <div className="">
        <div className="flex items-center my-6 ">
          <div className="rounded-md w-32">
            <span className="font-semibold"> Min</span>
            <input
              onChange={(e) => setMinValue(e.target.value)}
              type="number"
              value={minValue}
              className=" w-14 rounded-md border border-gray-400"
            />
          </div>
          <div className="ml-2 font-semibold text-lg"> - </div>
          <div className=" ">
            <span className=" font-semibold"> Max</span>
            <input
              onChange={(e) => setMaxValue(e.target.value)}
              type="number"
              value={maxValue}
              className=" rounded-md w-14 border border-gray-400"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="slider relative h-1 rounded-md bg-gray-300">
            <div
              className="progress absolute h-1 bg-green-300 rounded "
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
              className="range-min absolute   -top-1  h-1   bg-transparent  appearance-none pointer-events-none"
            />

            <input
              onChange={handleMax}
              type="range"
              min={min}
              step={step}
              max={max}
              value={maxValue}
              className="range-max absolute   -top-1 h-1  bg-transparent appearance-none  pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
