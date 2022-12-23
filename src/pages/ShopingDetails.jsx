import { increment, decrement, removeItem } from "../features/productSlice";
import product1 from "../assets/product1.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import {motion} from 'framer-motion'

const ShopingDetails = () => {
  const { cartItems, products } = useSelector((state) => state.product);

  const dispatch = useDispatch()
// sum all the items in the cart
const totalItems = cartItems.reduce((a, b)=>{
  return a + b.unit;
}, 0)

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
      <CheckoutSteps step1 step2 />
      <div className="flex">
        {/* Customer address */}
        <motion.form initial={{opacity:0, scale: 0.8}} animate={{opacity:1, scale:1}} transition={{duration: 1.3}} 
        className="w-full px-4 space-y-6 md:w-1/2">
          <div className="flex flex-col gap-y-2 w-full  md:w-11/12">
            <label>Your Email</label>
            <input
              className=" py-3 px-4 outline-none rounded-md bg-gray-200"
              type="text"
              placeholder="oluwasegunadeniyi064@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>Your fullname</label>
            <input
              className=" py-3 px-4 outline-none rounded-md bg-gray-200"
              type="text"
              placeholder="Oluwasegun Adeniyi"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>Choose a wallet</label>
            <input
              className=" py-3 px-4 outline-none rounded-md bg-gray-200"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>City</label>
            <input
              className=" py-3 px-4 outline-none rounded-md bg-gray-200"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row justify-between w-full md:w-11/12">
            <div className="flex flex-col gap-y-2 ">
              <label>Country</label>
              <input
                className=" py-3 px-4 outline-none w-full rounded-md bg-gray-200"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label>postal code</label>
              <input
                className=" py-3 px-4 outline-none w-full rounded-md bg-gray-200"
                type="text"
                placeholder="001001"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 w-full md:w-11/12">
            <label>Phone number</label>
            <input
              className=" py-3 px-4 mb-10 outline-none rounded-md bg-gray-200"
              type="text"
              placeholder="11-203-396"
            />
          </div>

          <Link to={"/payment"}>
            <button className="py-4 w-full md:w-11/12 bg-blue-600 text-white">
              Proceed to payment
            </button>
          </Link>
        </motion.form>
        {/* cart items */}
        <motion.div animate={{opacity:1, x:0}} className="hidden md:flex w-1/2 flex-col divide-y-2 border-black">
          {/* first cart item */}
          {cartItems.map((item, i) => {
            return (
              <div
                key={i}
                className="flex w-full py-8 border-t-1 border-t justify-between"
              >
                <div className="flex space-x-8">
                  <div className="w-[10rem]">
                    <motion.img src={item.image} className="w-full" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p>Clearamane</p>
                    <p>Size: 400ft</p>
                    <div className="flex space-x-8 text-2xl">
                      <button onClick={()=>{dispatch(decrement(item.id))}}>-</button>
                      <span>{item.unit}</span>
                      <button onClick={()=>{dispatch(increment(item.id))}}>+</button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div onClick={()=>{
                  dispatch(removeItem(item.id))
                }} className="w-10 cursor-pointer h-10 flex justify-center items-center rounded-full border border-black">
                    X
                  </div>
                  <div>$35.5</div>
                </div>
              </div>
            );
          })}
          <div className='space-y-8 pt-8'>
            <div className='flex justify-between'>
              <h3 className='text-black/60 font-semibold text-xl'>Products in cart:</h3>
              <span>
              {`${totalItems} `}            
             items</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='text-black/60 font-semibold text-xl'>Shipping:</h3>
              <span>$3.56</span>
            </div>
            <div className='flex justify-between'>
              <h3 className='text-black/60 font-semibold text-xl'>Total:</h3>
              <span>${totalprice}</span>
            </div>
          </div>
          {/*  */}
        </motion.div>
      </div>
    </section>
  );
};

export default ShopingDetails;
