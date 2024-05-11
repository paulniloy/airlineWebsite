import React from 'react';

const Homepage = () => {
    return (
        <div className='h-screen' style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../../Images/plane.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment:'fixed' }}>
            <div className='text-white'>
                <h2 className='text-2xl pt-40 text-center'>Bangladesh's Private Charter with global Coverage</h2>
                <h2 className='text-l text-center'>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.</h2>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='button'>Book Now</button>
            </div>
        </div>
    );
};

export default Homepage;