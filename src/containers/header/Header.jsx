const Header = () => {
  return (
    <div className="headerContainer container flex items-center justify-around pl-20 pr-20 pt-5">
      <div className="textContainer flex flex-col items-start justify-start gap-10 w-full">
        <h1 className="title font-semibold text-7xl break-keep text-transparent leading-normal bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
          Ordersentrix: Unveiling Insights Through Sentiment Analysis
        </h1>
        <p className="desc text-cyan-600 font-thin text-xl">
        Discover the genuine emotions hidden in text by diving into the world of sentiment analysis. Our cutting-edge online application uses cutting-edge AI methods to understand emotions, transforming words into insightful information.
        </p>
        <div className="headerContact mt-11">
          <input
            type="text"
            placeholder="Your Email Address"
            className="p-3 pr-28 bg-cyan-950 outline-none border-none text-cyan-400 rounded rounded-r-none placeholder-cyan-400"
          />
          <button className="headerContactButton hover:scale-110 duration-300 bg-orange-600 p-3 rounded-l-none pr-7 pl-7 rounded text-white">
            Get Started
          </button>
        </div>
      </div>
      {/* <div className="imageContainer flex items-center justify-center">
        <img src="../../../assets/headerImage.png" alt="header image" />
      </div> */}
    </div>
  );
};

export default Header;
