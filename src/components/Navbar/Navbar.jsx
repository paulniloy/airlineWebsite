import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around bg-black text-white h-10'>
      <div className='flex justify-center items-center'>
        <img className='w-20 rounded-xl' src="/Images/dotjet.png" alt="" />
      </div>
      <div className='text-yellow-600 flex justify-center items-center gap-5 '>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/"}>Home</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/profile"}>Profile</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/mybookings"}>My Bookings</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/bookings"}>Bookings</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/login"}>Login</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/logout"}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;