import React, { useState } from 'react';

const Bookings = () => {

    const [cities] = useState(['Dhaka', "Chittagong", "Sylhet"])
    const [fromcity, setfromcity] = useState('')
    const [tocity, settocity] = useState('');
    
    
    const handlesubmit = event => {
        event.preventDefault()
        const from = fromcity;
        const to = tocity
        console.log(from, to)
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <select onChange={e=>setfromcity(e.target.value)} name="" id="">
                    {
                        cities.map(city=>{
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