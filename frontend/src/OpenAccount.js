import React from "react";
function OpenAccount() {
  return (
    <div className="'container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-2"
          style={{
            width: "20%",
            margin: "0 auto",
            transition: "background-color 1.0s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "black")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "")}
          onClick={() => (window.location.href = "/signup")}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
