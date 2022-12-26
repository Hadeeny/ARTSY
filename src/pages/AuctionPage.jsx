import { useEffect, useState } from "react";
import AuctionCarousel from "../components/AuctionCarousel";
import auction1 from "../assets/auction1.png";
import like from "../assets/like.svg";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const AuctionPage = () => {
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

  // useEffect(() => {
  //   const getData = async () => {
  //     const info = await getDocs(dataCollectionRef);
  //     const bi1 = await getDocs(bid1CollectionRef);
  //     const bi2 = await getDocs(bid2CollectionRef);
  //     const bi3 = await getDocs(bid3CollectionRef);
  //     // setData(info.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     // setBid1(bi1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     // setBid2(bi2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     // setBid3(bi3.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <section>
        <AuctionCarousel
          // data={data}
          bid1ref={bid1CollectionRef}
          bid2ref={bid2CollectionRef}
          bid3ref={bid3CollectionRef}
          bid1={bid1}
          bid2={bid2}
          bid3={bid3}
        />
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
                  <h4 className="text-xl font-semibold px-6">Out of the box</h4>
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
                  <h4 className="text-xl font-semibold px-6">Out of the box</h4>
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
    </>
  );
};

export default AuctionPage;
