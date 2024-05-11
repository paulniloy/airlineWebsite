import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='h-screen' style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../../Images/plane.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment:'fixed' }}>
            <div className='text-white'>
                <h2 className='text-4xl pt-40 text-center'>Bangladesh's Private Charter with global Coverage</h2>
                <h2 className='text-sm px-40 text-center'>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.</h2>
            </div>
            <div className='flex justify-center mt-5'>
                <button className='button'><Link to={"/bookings"}>Book Now</Link></button>
            </div>
        </div>
    );
};

export default Homepage;