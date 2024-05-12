import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { Link } from 'react-router-dom';
import { SiGroupon } from 'react-icons/si';

const Register = () => {

    const { googlelogin } = useContext(AuthContext)

    const [checked, setchecked] = useState('false')
    console.log(checked);

    const user = useContext(AuthContext);
    console.log(user);


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
                <h1 className='text-center text-4xl m-20'>Register Form</h1>
            </div>
            <div className='flex justify-center items-center gap-40'>
                <div>
                    <img className='w-80' src="../../../Images/register.jpg" alt="" />
                </div>
                <form onSubmit={handlesubmit} className='border-4 rounded-xl border-gray-200 p-10' action="">
                    <h1>Name :</h1>
                    <input required className='p-2 bg-gray-200 rounded-xl' type="text" name="name" id="" placeholder='name' />
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
                    <h1>Already have an account? Go to <Link to={"/login"}>Login</Link></h1>
                </form>
            </div>
        </div>
    );
};

export default Register;