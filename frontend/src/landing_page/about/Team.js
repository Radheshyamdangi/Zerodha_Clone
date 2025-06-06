import React from 'react';
function Team() {
    return ( 
        <div className='container'>
            <h1 className='text-center mt-5 fs-2 '>People</h1>
            <div className='row p-5'>
                <div className='col-6 text-center mt-3'> 
                    <img src="media\images\nithinKamath.jpg"  style={{ borderRadius: '100%', width:"50%"}}
                        alt="Nithin Kamath"/>
                    <h4 className='mt-4'>Nitin Kamath</h4>
                    <h5 className='text-muted'> Founder, CEO</h5>
                </div>
                <div className='col-6 p-4 fs-5 text-muted mb-4'>
                <p>  Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p> Playing basketball is his zen.</p>

                <p> Connect on <a href=""> Homepage</a> /<a href="">TradingQnA</a>  /<a href="">Twitter</a> </p>
                </div>
            </div>
        </div>
     );
}

export default Team;