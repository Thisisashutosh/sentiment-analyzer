const WhatGPT3 = () => {
  return (
    <div className="whatgpt3Container container h-screen pl-20 pb-20 pr-20 bg-gradient-to-r from-[#002145] to-[#040c18] flex items-center justify-center">
      <div className="bg-gradient-to-r from-[#05315d] to-[#183e73] h-fit w-full flex items-center justify-between flex-col">
        <div className="first flex items-center justify-between p-10">
          <div className="titele w-11/12">
            <hr className="w-10 h-1 border-none bg-gradient-to-r from-[#ae67fa] to-[#f49867]" />
            <h1 className="text-2xl font-bold text-white pt-3 w-fit">
              What is Sentiment Analysis
            </h1>
          </div>
          <div className="desc ">
            <p className="text-cyan-400">
              Sentiment analysis is a computer method for determining the
              emotional tone of text, including reviews and messages on social
              media. It categorizes the sentiment as positive, negative, or
              neutral using natural language processing and machine learning.
              This offers perceptions into popular sentiment and feelings,
              assisting organizations and people in making wise decisions and
              comprehending communication trends.
            </p>
          </div>
        </div>
        <div className="second flex items-center justify-between w-full p-10">
          <div className="w-2/4">
            <h1 className="font-semibold text-4xl break-keep text-transparent leading-normal bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
              The possibilities are beyond your imagination
            </h1>
          </div>
          <div className="">
            <a href="/analyzer" className="text-orange-500">
              Explore The Analyzer
            </a>
          </div>
        </div>
        <div className="third flex items-center justify-center p-10 gap-7">
          <div className="">
            <div className="">
              <hr className="w-10 h-1 border-none bg-gradient-to-r from-[#ae67fa] to-[#f49867]" />
              <h1 className="text-2xl font-bold pb-12 text-white pt-3">
                Brand Perception Analysis
              </h1>
            </div>
            <div className="">
              <p className="text-cyan-400">
                Examine brand-related social media mentions and reviews to get a
                sense of how people feel about your goods or services.
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <hr className="w-10 h-1 border-none bg-gradient-to-r from-[#ae67fa] to-[#f49867]" />
              <h1 className="text-2xl font-bold pb-12 text-white pt-3">
                Market Trend Prediction
              </h1>
            </div>
            <div className="">
              <p className="text-cyan-400">
                Predict changes in market patterns by examining the opinions
                stated in news stories and financial reports.
              </p>
            </div>
          </div>
          <div className="">
            <div className="">
              <hr className="w-10 h-1 border-none bg-gradient-to-r from-[#ae67fa] to-[#f49867]" />
              <h1 className="text-2xl font-bold pb-12 text-white pt-3">
                Sales Campaign Optimization
              </h1>
            </div>
            <div className="">
              <p className="text-cyan-400">
                Use sentiment analysis to assess consumer reactions to marketing
                initiatives, public relations efforts, and promotions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
