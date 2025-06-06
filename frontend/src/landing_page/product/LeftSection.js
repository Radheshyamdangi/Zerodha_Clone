import React from 'react';
function LeftSection({ImageURL,ProductName,ProductDescription,tryDemo,learnMore,googlePlay,appStore,}) {
    return ( 
        <div className='container'>
            <div className='row  '>
                <div className='col-6 mt-5'>
                    <img src={ImageURL}/></div>
                    
                <div className='col-6 p-5 mt-5'>
                    <h1>{ProductName}</h1>
                    <p >{ProductDescription}</p>
                    <div className='no-text-decoration '>
                    <a href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right" style={{marginLeft:"4px", fontSize: "12px"}}></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn more <i class="fa-solid fa-arrow-right " style={{marginLeft:"4px", fontSize: "12px"}}></i></a>
                    </div>
                    <div className='mt-3 '>
                    <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="media\images\appstoreBadge.svg" style={{marginLeft:"50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;