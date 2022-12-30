import { useEffect, useState } from "react";
import AuctionCarousel from "../components/AuctionCarousel";
import auction1 from "../assets/auction1.png";
import auction2 from "../assets/autionchairs.png";
import like from "../assets/like.svg";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const AuctionPage = () => {
  const auth = getAuth(app);

  // const { user } = useSelector((state) => state.product);
  const bid1CollectionRef = collection(db, "Bid1"); 
  const bid2CollectionRef = collection(db, "Bid2");
  const bid3CollectionRef = collection(db, "Bid3");

  const query1 = query(bid1CollectionRef, orderBy("createdAt"), limit(25));
  const query2 = query(bid2CollectionRef, orderBy("createdAt"), limit(25));
  const query3 = query(bid3CollectionRef, orderBy("createdAt"), limit(25));

  const [bid1] = useCollectionData(query1, { idField: "id" });
  const [bid2] = useCollectionData(query2, { idField: "id" });
  const [bid3] = useCollectionData(query3, { idField: "id" });
  // console.log(message);
  const [user] = useAuthState(auth);
  return (
    <>
      {user != null ? (
        <>
          <section className="-mt-4">
            <AuctionCarousel
              // data={data}
              bid1ref={bid1CollectionRef}
              bid2ref={bid2CollectionRef}
              bid3ref={bid3CollectionRef}
              bid1={bid1}
              bid2={bid2}
              bid3={bid3}
            />
            <div className="mx-2  md:mx-16 my-10">
              <div>
                <h3 className="my-7 text-2xl font-semibold">
                  Top bids from popular creators
                </h3>
                <div className="w-full flex flex-col gap-y-6 justify-between md:flex-row">
                  <div className="space-y-4">
                    {/* Image card */}
                    <div className="border-2 border-gray-300 rounded-md md:px-0 px-4">
                      <div className="w-full flex justify-end py-1 rounded-full ">
                        <img
                          src={like}
                          className="w-[2rem] border border-black p-1 rounded-full"
                        />
                      </div>
                      <div>
                        <img src={auction1} />
                      </div>
                      <div className="px-0 py-1  flex justify-between">
                        <h4 className="text-xl font-semibold ">
                          Out of the box
                        </h4>
                        <h4 className="text-xl font-semibold">0.35ETH</h4>
                      </div>
                    </div>
                    <div className="px-4 md:px-0">
                      <h4>
                        Creator: <span>Dan Murray</span>
                      </h4>
                      <h4>
                        Date: <span>12/08/12</span>
                      </h4>
                      <h4>
                        Highest bid: <span>0.7ETH</span>
                      </h4>
                    </div>
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
                    <div className="border-2 border-gray-300 rounded-md md:px-0 px-4">
                      <div className="w-full flex justify-end py-1 rounded-full ">
                        <img
                          src={like}
                          className="w-[2rem] border border-black p-1 rounded-full"
                        />
                      </div>
                      <div>
                        <img src={auction2} />
                      </div>
                      <div className="px-0 py-1  flex justify-between">
                        <h4 className="text-xl font-semibold ">
                          Out of the box
                        </h4>
                        <h4 className="text-xl font-semibold">0.35ETH</h4>
                      </div>
                    </div>
                    <div className="px-4 md:px-0">
                      <h4>
                        Creator: <span>Dan Murray</span>
                      </h4>
                      <h4>
                        Date: <span>12/08/12</span>
                      </h4>
                      <h4>
                        Highest bid: <span>0.7ETH</span>
                      </h4>
                    </div>
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
        </>
      ) : (
        <h3 className="text-center">
          You have to{" "}
          <Link to={"/login"}>
            <span className="text-blue-500">login</span>
          </Link>{" "}
          first
        </h3>
      )}
    </>
  );
};

export default AuctionPage;
