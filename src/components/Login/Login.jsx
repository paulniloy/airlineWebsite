import React, { useState } from 'react';

const Login = () => {


    const [loginchecked, setloginchecked] = useState('false')
    console.log(loginchecked);


    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const namepassword = {
            name: name, password: password
        }
        console.log(namepassword);
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
                    <input required className='p-2 bg-gray-200 rounded-xl' type="text" name="name" id="" placeholder='name' />
                    <h1 className='mt-5'>Password :</h1>
                    <input required className='p-2 bg-gray-200 rounded-xl' type={loginchecked ? "text" : "password"} name="password" id="" placeholder='password' />
                    <div className='flex gap-2'>
                        <input onChange={(event) => setloginchecked(event.target.checked)} type="checkbox" name="checkbox" id="" />
                        <h1>show password</h1>
                    </div>
                    <button type="submit" className='bg-primary w-1/2 flex justify-center mt-5 mx-auto rounded-sm'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;