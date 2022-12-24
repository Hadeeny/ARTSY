import product1 from "../assets/product1.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../features/productSlice";
import CheckoutSteps from "../components/CheckoutSteps";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Cartpage = () => {
  const { cartItems, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  // sum all the items in the cart
  const totalItems = cartItems.reduce((a, b) => {
    return a + b.unit;
  }, 0);

  let totalprice;

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const tax = 3.56;

  totalprice = addDecimals(
    cartItems.reduce((acc, item) => {
      return acc + item.price * item.unit;
    }, tax)
  );

  return (
    <section className="mx-2 md:mx-16 my-10">
      {/* Checkout steps */}
      <CheckoutSteps step1 />
      {/* cart items */}
      <motion.div className="mb-[19rem] md:mb-10">
        {cartItems.map((item, i) => {
          return (
            // <AnimatePresence>
            <motion.div
              key={i}
              className="flex px-4 flex-col divide-y-2 border-black"
            >
              {/* first cart item */}
              <motion.div
                exit={{ x: 570, transition: { duration: 0.5 } }}
                className="flex w-full md:py-8 py-4 border-t-1 border-t justify-between"
              >
                <div className="flex items-center space-x-8">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-[5rem]"
                  >
                    <Link to={`/marketplace/details/${item.id}`}>
                      <img src={item.image} className="w-full" />
                    </Link>
                  </motion.div>
                  <div className="flex flex-col justify-between">
                    <Link to={`/marketplace/details/${item.id}`}>
                      <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                    </Link>
                    <p>{item.title}</p>
                    <p>Size: 200ft</p>
                    <div className="flex space-x-8 text-2xl">
                      <button onClick={() => dispatch(decrement(item.id))}>
                        -
                      </button>
                      <span>{item.unit}</span>
                      <button onClick={() => dispatch(increment(item.id))}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div
                    onClick={() => {
                      dispatch(removeItem(item.id));
                    }}
                    className="w-8 cursor-pointer h-8 flex justify-center items-center rounded-full border border-black"
                  >
                    X
                  </div>
                  <div>${item.price}</div>
                </div>
              </motion.div>
            </motion.div>
            // </AnimatePresence>
          );
        })}
      </motion.div>
      {totalItems < 1 ? (
        <h2>
          Your cart is empty,{" "}
          <Link to={"/marketplace"}>
            <span className="text-blue-600">Continue shopping</span>
          </Link>
        </h2>
      ) : (
        <>
          <div className="flex bg-white p-4 mt-10 fixed md:static bottom-0 left-0 w-full flex-col-reverse md:flex-row justify-between">
            <div className="md:w-1/2 md:px-6 w-full flex flex-col  gap-y-5">
              <Link to={"/details"}>
                <button className=" w-full py-4 bg-[#3341C1] text-white">
                  Proceed to checkout
                </button>
              </Link>
              <Link to={"/marketplace"}>
                <p className="text-[#3341C1] text-center">Continue shopping</p>
              </Link>
            </div>
            <div className="w-full  md:w-1/2 space-y-4 md:space-y-8">
              <div className="flex justify-between">
                <div>Products in cart</div>
                <div>
                  {`${totalItems} `}
                  items
                </div>
              </div>
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>$3.56</div>
              </div>
              <div className="flex justify-between">
                <div>Total</div>
                <div>${totalprice}</div>
              </div>
              <div className="flex md:hidden pb-10 justify-between border-t border-dashed border-black md:border-none">
                <div>Grand total</div>
                <div>${totalprice}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cartpage;
