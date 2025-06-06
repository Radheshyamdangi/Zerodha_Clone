import React from "react";
function Hero() {
  return (
    <section className="containe-fluid " id="supportHero">
      <div className="p-5 mt-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 ">
        <div className="col-6 p-5 ">
          <h1 className="fs-3 mb-4">
            Search for an answer or browser help topic to create a ticket
          </h1>
          <input placeholder="Eg. how do i activated F&O, why is my order getting rejected...  "></input>
          <br />
          
          <a href="" style={{fontSize:"25px",fontWeight:"500"}}>Intraday margins </a>
          <a href="" style={{fontSize:"25px",fontWeight:"500",marginLeft:"19px"}}>Track segment activation </a>
          <a href="" style={{fontSize:"25px",fontWeight:"500",marginLeft:"19px"}}>Track account opening </a>
          <br />
          <a href="" style={{fontSize:"25px",fontWeight:"500"}}> Kite user manual</a>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3 mb-4">Features</h1>
          <ol className="fs-3">
            <li>
              {" "}
              <a href="" style={{fontSize:"25px",fontWeight:"500"}}>Surveillance measure on scrips - August 2024</a>
            </li>
            <li>
              {" "}
              <a href="" style={{fontSize:"25px",fontWeight:"500"}}>Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
