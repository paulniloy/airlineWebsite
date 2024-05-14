import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import "./login.css"
import { SiGroupon } from "react-icons/si";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Login = () => {

    const { googlelogin, signinwithpassword } = useContext(AuthContext)

    const [loginchecked, setloginchecked] = useState(false)
    const [loginerrormessage, seterrormessage] = useState('')
    const [loginloggedmessage, setloggedmessage] = useState('')

    const navigate = useNavigate()
    const location = useLocation();
    console.log(location);

    const from = location?.state?.from?.pathname;


    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.name.value;
        const password = form.password.value;
        signinwithpassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                seterrormessage('')
                setloggedmessage('User Successfully Logged in')
                Swal.fire({
                    title: "LogIn",
                    text: "Successful!",
                    icon: "success"
                });
                navigate("/" || from)
            })
            .catch((error) => {
                seterrormessage("Check email/password again")
                setloggedmessage('')
            })
    }


    return (
        <div>
            <div>
                <h1 className='text-center text-4xl m-20'>Login Form</h1>
            </div>
            <div className='flex justify-center items-center gap-40'>
                <div>
                    <img className='w-80' src="../../../Images/login.jpg" alt="" />
                </div>
                <form onSubmit={handlesubmit} className='border-4 rounded-xl border-gray-200 p-10' action="">
                    <h1>Name :</h1>
                    <input required className='p-2 bg-gray-200 rounded-xl' type="email" name="name" id="" placeholder='name' />
                    <h1 className='mt-5'>Password :</h1>
                    <input required className='p-2 bg-gray-200 rounded-xl' type={loginchecked ? "text" : "password"} name="password" id="" placeholder='password' />
                    <div className='flex gap-2'>
                        <input onChange={(event) => setloginchecked(event.target.checked)} type="checkbox" name="checkbox" id="" />
                        <h1>show password</h1>
                    </div>
                    <button type="submit" className='bg-primary w-1/2 flex justify-center mt-5 mx-auto rounded-sm'>Login</button>
                    <div className='flex justify-center mt-5'>
                        <button onClick={googlelogin}><SiGroupon className="h-5 w-5" /></button>
                    </div>
                    <h1>Don't have an account? <Link to={"/register"} className='text-blue-600'>Register</Link></h1>
                    <h1 className='font-medium text-red-600'>{loginerrormessage}</h1>
                    <h1 className='font-medium text-green-600'>{loginloggedmessage}</h1>
                </form>
            </div>
        </div>
    );
};

export default Login;