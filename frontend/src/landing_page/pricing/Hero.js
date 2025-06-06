import React from 'react';
function Hero() {
    return ( 
       <div className='container'>
        <div className='row border-bottom mt-5 p-5 mb-4 text-center'>
            <h1>Pricing</h1>
            <h2 className='fs-4 mt-3 text-muted  '>Free equity investments and flat ₹20 intraday and F&O trades</h2>

        </div>
        <div className='row text-center'>
            <div className='col-4 p-5'>
                <img src="media\images\pricing0.svg"></img>
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted mt-2 fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-5'>
                <img src="media\images\intradayTrades.svg"></img>
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p  className='text-muted mt-2 fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-5'>
                <img src="media\images\pricingMF.svg"></img>
                <h1 className='fs-3'>Free direct MF</h1>
                <p  className='text-muted mt-2 fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;