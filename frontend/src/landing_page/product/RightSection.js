import React from 'react';
function RightSection({ProductName,ProductDescription,learnMore,ImageURL,}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 mt-5 p-5 '>
                <h1>{ProductName}</h1>
                    <p >{ProductDescription}</p>
                    <div className='no-text-decoration '>
                    <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right" style={{marginLeft:"4px", fontSize: "12px"}}></i></a>
                    </div>
                </div>
                <div className='col-6 mb-5'>
                    <img src={ImageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;