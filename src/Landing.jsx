import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./containers/header/Header.jsx";
import WhatAnalyzer from "./containers/whatAnalyzer/WhatAnalyzer.jsx";
import Possibility from "./containers/possibility/Possibility.jsx";
import Cta from "./components/cta/Cta.jsx";
import Blog from "./containers/blog/Blog.jsx";
import Footer from "./containers/footer/Footer.jsx";

const Landing = () => {
  return (
    <div className="box-border m-0 p-0 scroll-smooth bg-[var(--color-bg)] h-screen bg-gradient">
      <div className="gradient_bg h-screen">
        <Navbar />
        <Header />
      </div>
      <WhatAnalyzer />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landing;
