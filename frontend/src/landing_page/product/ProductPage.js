import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <div style={{background: "linear-gradient(to bottom, white,rgba(193, 154, 100, 0.53),rgba(192, 134, 79, 0.58),rgba(128, 122, 47, 0.84))"
    }}>
      <Hero />
      <LeftSection 
      ImageURL= "media\images\kite.png" 
       ProductName="Kite" 
       ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""

      />
      <RightSection 
      ProductName="Console"
      ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      learnMore=""
      ImageURL="media\images\console.png"
      />
       <LeftSection 
      ImageURL= "media\images\coin.png" 
       ProductName="Coin" 
       ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""

      />
      <RightSection 
      ProductName="Kite Connect API"
      ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      learnMore=""
      ImageURL="media\images\kiteconnect.png"
      />
       <LeftSection 
      ImageURL= "media\images\varsity.png" 
       ProductName="Varsity mobile" 
       ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""

      />
      <p className="text-center mt-5 p-4 active fs-4">Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
      
      <Universe />
    </div>
  );
}

export default ProductPage;
