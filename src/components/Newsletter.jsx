const Newsletter = () => {
  return (
    <section className="w-11/12 mt-16 md:mb-8 mb-2 mx-auto">
      <div className="flex flex-col md:items-center items-start py-14 gap-y-6 border-transparent md:border md:border-black">
        <h2 className="uppercase text-3xl">Newsletter</h2>
        <p className="hidden md:block text-lg">
          Subscribe to get daily update on new drops and exciting deals
        </p>
        <p className="md:hidden text-sm uppercase">
          Subscribe to get our daily updates and Newsletter
        </p>
        <form className="flex flex-col items-start md:space-x-4 gap-y-4 md:flex-row">
          <input
            placeholder="ENTER YOUR EMAIL"
            className="p-2 outline-none border w-[20rem] border-black"
          />
          <button className="px-6 py-2 bg-black text-white">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
