const Possibility = () => {
  return (
    <div className="possibilutyContainer container flex justify-center items-center gap-10 h-full pr-20 pl-20 pt-5 pb-5 bg-gradient-to-r from-[#002145] to-[#040c18]">
      <div className="left w-2/5">
        <div className="imgContainer flex items-center justify-start">
          <img
            src="../../../src/assets/Feature Image.png"
            alt="feature image"
            className=""
          />
        </div>
      </div>
      <div className="right flex flex-col justify-center gap-5 items-start w-2/5 h-full">
        <p className="text-cyan-400">Request Early Access to Get Started</p>
        <h1 className="font-semibold text-4xl break-keep text-transparent leading-snug bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-cyan-400">
        Sentiment analysis can provide valuable insights into public opinions, customer feedback, and trends by utilizing natural language processing (NLP) and machine learning algorithms, allowing businesses and individuals to make informed decisions, tailor their strategies, and gain a deeper understanding of the emotions and sentiments driving human communication.
        </p>
        <a href="#" className="text-orange-500">
          Request Early Access to Get Started
        </a>
      </div>
    </div>
  );
};

export default Possibility;
