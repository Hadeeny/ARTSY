import AuctionCarousel from "../components/AuctionCarousel";
import auction1 from "../assets/auction1.png";
import like from "../assets/like.svg";

const AuctionPage = () => {
  return (
    <>
      {true ? (
        <section>
          <AuctionCarousel />
          <div className="mx-2 md:mx-16 my-10">
            <div>
              <h3 className="my-7 text-2xl font-semibold">
                Top bids from popular creators
              </h3>
              <div className="w-full flex flex-col gap-y-6 justify-between md:flex-row">
                <div className="space-y-4">
                  {/* Image card */}
                  <div className="border-2 border-gray-300 rounded-md space-y-4 py-4">
                    <div className="w-full flex justify-end px-6">
                      <img src={like} />
                    </div>
                    <div>
                      <img src={auction1} />
                    </div>
                    <h4 className="text-xl font-semibold px-6">
                      Out of the box
                    </h4>
                  </div>

                  <h4>
                    Creator: <span>Dan Murray</span>
                  </h4>
                  <h4>
                    Date: <span>12/08/12</span>
                  </h4>
                  <h4>
                    Highest bid: <span>0.7ETH</span>
                  </h4>
                  <div className="flex bg-gray-200 p-4 rounded-md justify-between">
                    <div>
                      <h4>Current bid</h4>
                      <h4>0.985ETH</h4>
                    </div>
                    <button className="bg-blue-700 px-6 py-1 text-white">
                      {" "}
                      Place bid
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {/* Image card */}
                  <div className="border-2 border-gray-300 rounded-md space-y-4 py-4">
                    <div className="w-full flex justify-end px-6">
                      <img src={like} />
                    </div>
                    <div>
                      <img src={auction1} />
                    </div>
                    <h4 className="text-xl font-semibold px-6">
                      Out of the box
                    </h4>
                  </div>

                  <h4>
                    Creator: <span>Dan Murray</span>
                  </h4>
                  <h4>
                    Date: <span>12/08/12</span>
                  </h4>
                  <h4>
                    Highest bid: <span>0.7ETH</span>
                  </h4>
                  <div className="flex bg-gray-200 p-4 rounded-md justify-between">
                    <div>
                      <h4>Current bid</h4>
                      <h4>0.985ETH</h4>
                    </div>
                    <button className="bg-blue-700 px-6 py-1 text-white">
                      {" "}
                      Place bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Signin />
      )}
    </>
  );
};

export default AuctionPage;
