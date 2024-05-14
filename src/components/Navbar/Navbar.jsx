import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import Swal from 'sweetalert2';

const Navbar = () => {

  const {signout,setuser, user} = useContext(AuthContext);

  const navigate = useNavigate()


  const handlesignout = () =>{
    signout()
    .then(()=>{
      setuser(null)
      navigate("/login")
      Swal.fire({
        title: "LogOut",
        text: "Successful!",
        icon: "success"
      });
    })
    .catch(()=>{
      
    })
  }



  return (
    <div className='flex justify-around bg-black h-10'>
      <div className='flex justify-center items-center'>
        <img className='w-20 rounded-xl' src="/Images/dotjet.png" alt="" />
      </div>
      <div className='text-white text-sm font-thin flex justify-center items-center gap-5 '>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/"}>Home</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/profile"}>Profile</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/mybookings"}>My Bookings</Link>
        <Link className='hover:text-yellow-400 transition delay-100' to={"/bookings"}>Bookings</Link>
        {
          user ?
            <button onClick={handlesignout} className='hover:text-yellow-400 transition delay-100'>Logout</button> :
            <div className='gap-5 flex'>
              <Link onClick={handlesignout} className='hover:text-yellow-400 transition delay-100' to={"/login"}>Login</Link>
              <Link className='hover:text-yellow-400 transition delay-100' to={"/register"}>Register</Link>
            </div>
        }
      </div>
    </div>
  );
};

export default Navbar;