import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Link, useNavigate } from 'react-router-dom';
import { SiGroupon } from 'react-icons/si';

const Register = () => {

    const { googlelogin, createuserwithpassword } = useContext(AuthContext);


    const [registererrormessage, seterrormessage] = useState('')
    const [registerloggedmessage, setloggedmessage] = useState('')
    const [checked, setchecked] = useState(false)
    console.log(checked);

    const user = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();



    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.name.value;
        const password = form.password.value;
        createuserwithpassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                setloggedmessage('Successfully Registered')
                seterrormessage('')
                navigate('/')
            })
            .catch((error) => {
                setloggedmessage('')
                seterrormessage('Check again')
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl m-20'>Register Form</h1>
            </div>
            <div className='flex justify-center items-center gap-40'>
                <div>
                    <img className='w-80' src="../../../Images/register.jpg" alt="" />
                </div>
                <form onSubmit={handlesubmit} className='border-4 rounded-xl border-gray-200 p-10' action="">
                    <h1>Name :</h1>
                    <input required className='p-2 bg-gray-200 rounded-xl' type="email" name="name" id="" placeholder='name' />
                    <h1 className='mt-5'>Password :</h1>
                    <input required className={`p-2 bg-gray-200 rounded-xl`} type={checked ? "text" : "password"} name="password" id="" placeholder='password' />
                    <div className='flex gap-2'>
                        <input onChange={(event) => setchecked(event.target.checked)} type="checkbox" name="checkbox" id="" />
                        <h1>show password</h1>
                    </div>
                    <button type="submit" className='bg-primary w-1/2 flex justify-center mt-5 mx-auto rounded-sm'>Register</button>
                    <div className='flex justify-center mt-5'>
                        <button onClick={googlelogin}><SiGroupon className="h-5 w-5" /></button>
                    </div>
                    <h1>Already have an account? Go to <Link to={"/login"} className='text-blue-600'>Login</Link></h1>
                    <h1 className='font-medium text-red-600'>{registererrormessage}</h1>
                    <h1 className='font-medium text-green-600'>{registerloggedmessage}</h1>
                </form>
            </div>
        </div>
    );
};

export default Register;