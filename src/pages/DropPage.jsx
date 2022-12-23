import Newsletter from "../components/Newsletter";
import image1 from "../assets/auction1.png";
import Footer from "../components/Footer";
const DropPage = () => {
  return (
    <>
      <section className="md:px-16 px-4 my-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Upcoming drops</h2>
          <p className="text-md hidden md:block text-gray-400">
            {" "}
            Turn on notifications so that no drops will miss you
          </p>
          <p className="text-md md:hidden text-md text-gray-400">
            {" "}
            You may turn on notifications so that no drops will miss you
          </p>
          <button className="px-12 py-2 border border-black text-black font-semibold text-md">
            Notify me
          </button>
        </div>

        {/* drop 11 */}
        <div className="w-full flex flex-col gap-y-4 md:flex-row my-8">
          <div className="w-full md:w-1/2">
            <img src={image1} className="full" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between items-start px-0 md:px-4">
            <button className="px-2 py-1 bg-blue-400 uppercase text-sm text-white rounded-lg">
              Upcoming
            </button>
            <p className="text-gray-400 text-md">November 21 at 11am WAT</p>
            <h3 className="text-2xl font-semibold">Eyo : Eko for show</h3>
            <p className="text-gray-400 text-md max-w-md md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <div className="text-md font-semibold">
              Creator: <span className="text-blue=400">Aliya Mina</span>
            </div>
            <div className="border-b-2 border-blue-400 text-blue-400 text-md">
              Get notified
            </div>
          </div>
        </div>
        {/* drop 11 */}
        <div className="w-full flex flex-col gap-y-4 md:flex-row my-12">
          <div className="w-full md:w-1/2">
            <img src={image1} className="full" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between items-start px-0 md:px-4">
            <button className="px-2 py-1 bg-green-400 uppercase text-sm text-white rounded-lg">
              Upcoming
            </button>
            <p className="text-gray-400 text-md">November 21 at 11am WAT</p>
            <h3 className="text-2xl font-semibold">Eyo : Eko for show</h3>
            <p className="text-gray-400 text-md max-w-md md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <div className="text-md font-semibold">
              Creator: <span className="text-blue=400">Aliya Mina</span>
            </div>
            <div className="border-b-2 border-blue-400 text-blue-400 text-md">
              Get notified
            </div>
          </div>
        </div>
        {/* drop 11 */}
        <div className="w-full flex flex-col gap-y-4 md:flex-row my-12">
          <div className="w-full md:w-1/2">
            <img src={image1} className="full" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between items-start px-0 md:px-4">
            <button className="px-2 py-1 bg-gray-400 uppercase text-sm text-white rounded-lg">
              Upcoming
            </button>
            <p className="text-gray-400 text-md">November 21 at 11am WAT</p>
            <h3 className="text-2xl font-semibold">Eyo : Eko for show</h3>
            <p className="text-gray-400 text-md max-w-md md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <div className="text-md font-semibold">
              Creator: <span className="text-blue=400">Aliya Mina</span>
            </div>
            <div className="border-b-2 border-blue-400 text-blue-400 text-md">
              Get notified
            </div>
          </div>
        </div>
        {/* drop 11 */}
        <div className="w-full flex flex-col gap-y-4 md:flex-row my-12">
          <div className="w-full md:w-1/2">
            <img src={image1} className="full" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between items-start px-0 md:px-4">
            <button className="px-2 py-1 bg-gray-400 uppercase text-sm text-white rounded-lg">
              Upcoming
            </button>
            <p className="text-gray-400 text-md">November 21 at 11am WAT</p>
            <h3 className="text-2xl font-semibold">Eyo : Eko for show</h3>
            <p className="text-gray-400 text-md max-w-md md:max-w-sm">
              Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
              vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
            </p>
            <div className="text-md font-semibold">
              Creator: <span className="text-blue=400">Aliya Mina</span>
            </div>
            <div className="border-b-2 border-blue-400 text-blue-400 text-md">
              Get notified
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="px-6 py-2 border border-black">See more</button>
        </div>
        <Newsletter />
      </section>
      <Footer />
    </>
  );
};

export default DropPage;
