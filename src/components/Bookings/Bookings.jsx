import React, { useState } from 'react';

const Bookings = () => {

    const [cities] = useState(['Dhaka', "Chittagong", "Sylhet"])
    const [fromcity, setfromcity] = useState('Dhaka');
    const [tocity, settocity] = useState("Chittagong");
    
    
    const handlesubmit = event => {
        event.preventDefault()
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const from = fromcity;
        const to = tocity
        console.log(from, to, firstname, lastname)
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
            <h1>First Name : </h1>
            <input className='bg-yellow-200 text-black' type="text" name="firstname" id="" />
            <h1>Last Name : </h1>
            <input className='bg-yellow-200 text-black' type="text" name="lastname" id="" />
                <select  onChange={e=>{
                    setfromcity(e.target.value)
                }} name="" id="">
                    {
                        cities.filter(item=>{
                            return item != tocity;
                        }).map(city=>{
                            return <option key={city} value={city}>{city}</option>
                        })
                    }
                </select>
                <select onChange={(e)=>settocity(e.target.value)} name="" id="">
                    {
                        cities.filter((city)=>{
                            return city != fromcity
                        }).map(item=>{
                            return <option key={item}  value={item}>{item}</option>
                        })
                    }
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Bookings;