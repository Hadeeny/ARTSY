import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { increment, decrement, removeItem } from "../features/productSlice";

const CartItems = ({item}) => {
    const dispatch = useDispatch()
    return (
        <>
          <motion.div
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
        </>
    )
}

export default CartItems
