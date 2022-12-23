import {Link } from 'react-router-dom'

const CheckoutSteps = ({step1, step2, step3}) => {
    return (
        <div>
            <ul className='hidden md:flex w-1/2 mx-auto justify-between mb-10 border-b border-gray-300'>
                {step1 ? (
                    <Link to={'/cart'}>
                    <li className='py-2 text-black border-b border-black font-semibold'>
                        <h3>
                            Shopping cart
                        </h3>
                    </li>
                    </Link>
                ): (
                    <li className='py-2 text-black/30 font-semibold'>
                    <h3>
                        Shopping cart
                    </h3>
                </li>
                )}
                {step2 ? (
                    <Link to={'/details'}>
                    <li className='py-2 text-black border-b border-black font-semibold'>
                        <h3>
                        Shipping details
                        </h3>
                    </li>
                    </Link>
                ): (
                    <li className='py-2 text-black/30 font-semibold'>
                    <h3>
                        Shipping details
                    </h3>
                </li>
                )}
                {step3 ? (
                    <Link to={'/payment'}>
                    <li className='py-2 text-black border-b border-black font-semibold'>
                        <h3>
                            Payment details
                        </h3>
                    </li>
                    </Link>
                ): (
                    <li className='py-2 text-black/30 font-semibold'>
                    <h3>
                        Payment details
                    </h3>
                </li>
                )}
                
            </ul>
        </div>
    )
}

export default CheckoutSteps
