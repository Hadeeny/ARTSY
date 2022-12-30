import CheckoutSteps from "../components/CheckoutSteps";
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {FlutterWaveButton, closePaymentModal} from 'flutterwave-react-v3'
const PaymentDetails = () => {

  const navigate = useNavigate()

  const {cartItems} = useSelector(state => state.product)
  const {userDetails} = useSelector(state => state.user)

  const {email, fullname, totalprice:totalValue, phone, country} = userDetails

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

  const config = {
    public_key: 'FLWPUBK_TEST-720742539bdea4937316ace8eec73897-X',
    tx_ref: Date.now(),
    amount: totalValue,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: phone,
      name: fullname,
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       if(response.status == 'successful'){
         return navigate('/thankyou')
       }
      // console.log(response.status)
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <section className="md:px-16 px-4 my-4">
      <CheckoutSteps step1 step2 step3 />
      <div className="w-full flex">
        <div className="w-full md:w-1/2">
          <div className="font-semibold text-xl mb-8">
            <h2>Payment Method</h2>
          </div>
          <form className="border-2 border-gray-400 p-4 space-y-4">
            <div className="flex space-x-4 items-start mb-10">
              <div>
                <input type="checkbox" />
              </div>
              <div className="space-y-4">
                <div className="font-semibold">select your wallet</div>
                <p>
                  Connect with one of our available wallet providers or add and
                  connect a new wallet.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label>Wallet type</label>
              <input
                className=" py-3 px-4 outline-none rounded-md bg-gray-100"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full">
              <label>Key</label>
              <input
                className=" py-3 px-4 outline-none rounded-md bg-gray-100"
                type="text"
                placeholder="11-203-396"
              />
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row justify-between w-full">
              <div className="flex flex-col gap-y-2 ">
                <label>Expiry date</label>
                <input
                  className=" py-3 px-4 outline-none w-full rounded-md bg-gray-100"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex flex-col gap-y-2 mb-10">
                <label>CVV</label>
                <input
                  className=" py-3 px-4 outline-none w-full rounded-md bg-gray-100"
                  type="password"
                  placeholder="..."
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <input type="checkbox" />
              </div>
              <p className="text-gray-400">
                Save my wallet details and information for future transactions
              </p>
            </div>
          </form>
          <div className="bg-blue-600 text-center text-white text-xl w-full my-12 py-4">
            {/* Confirm */}
          <FlutterWaveButton {...fwConfig} />
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <div className="flex justify-end mb-8">
            <h2 className="text-xl font-normal">Secure Server</h2>
          </div>
          <div className="divide-y-2 px-6 border-gray-500">
            <div className="py-6">
              <h3 className="text-xl font-semibold">Payment summary</h3>
            </div>
            <div className="py-6 space-y-4">
              <h3 className="font-semibold">
                Metamask wallet : 002345KJi90pzzz3
              </h3>
              <p className="text-gray-500">
                Actively linked to Yaba, Lagos Nigeria.
              </p>
            </div>
            <div className="py-6">
              <p className="text-md text-gray-500 font-semibold">
                Expected arrival date: Between 22nd September and 26th September
                20222
              </p>
            </div>
            <div className="py-6 space-y-4">
              <div className="flex justify-between">
                <div className="text-lg font-semibold text-gray-500 ">
                  Products in cart:
                </div>
                <div className="text-lg text-black">{totalItems}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-lg font-semibold text-gray-500 ">
                  Shipping:
                </div>
                <div className="text-lg text-black">${tax}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-lg font-semibold text-gray-500 ">
                  Total:
                </div>
                <div className="text-lg text-black">${totalprice}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
// FLWPUBK_TEST-720742539bdea4937316ace8eec73897-X