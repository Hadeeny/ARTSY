import thanks from "../assets/thankyou.png";
import blue from "../assets/blueEllipse.svg";
import red from "../assets/redEllipse.svg";
import blurblue from "../assets/blurBlue.svg";
import blurviolet from "../assets/blurViolet.svg";
import blurorange from "../assets/blurOrange.svg";
import cone from "../assets/cone.svg";
const ThankyouPage = () => {
  return (
    <section
      // className='w-full h-[30rem] bg-center bg-no-repeat bg-contain bg-[url("./assets/thankyou.png")]'
      className=""
    >
      <div className="w-[22rem] hidden md:block absolute left-0 top-0 h-[22rem]">
        <img src={blue} className="w-full h-full" alt="" />
      </div>
      <div className="w-[20rem] absolute hidden md:block left-0 top-0 h-[20rem]">
        <img src={red} className="w-full h-full" alt="" />
      </div>
      <div className="w-[20rem] absolute md:hidden block left-4 top-[10rem] h-[20rem]">
        <img src={blurblue} className="w-full h-full" alt="" />
      </div>
      <div className="w-[20rem] absolute md:hidden block left-10 top-[40rem] h-[20rem]">
        <img src={blurviolet} className="w-full h-full" alt="" />
      </div>
      <div className="w-[20rem] absolute md:hidden block right-0 top-0 h-[20rem]">
        <img src={blurorange} className="w-full h-full" alt="" />
      </div>

      <div className="w-[30rem] h-[30rem] mx-auto">
        <img className="w-full h-full" src={thanks} />
      </div>
      <h3 className="text-center text-md md:text-2xl font-semibold">
        Hey Oluwasegun, thank you for your purchase
      </h3>
      <div className="flex justify-center py-4 items-center">
        <div className=" font-semibold">
          You were amazing. Cheers to being{" "}
          <span className="text-blue-500 uppercase text-md">artsy!</span>
        </div>
        <div className="w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem] mt-[-2rem] mr-[-2.5rem]">
          <img src={cone} className="w-full h-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ThankyouPage;
