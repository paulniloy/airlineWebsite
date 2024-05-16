import axios from '../../Axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {

    const [data, setdata] = useState([]);


    const getapi = async () => {
        await axios.get('/posts')
            .then(res => {
                setdata(res.data)
            });
    }

    useEffect(() => {
        getapi()
    }, [])

    return (
        <div className='grid grid-cols-4 gap-5 border-2 border-black'>
            {
                data.slice(0, 20).map(d => {
                    const { id, title, body } = d;
                    return (
                        <div className='border-2 border-black p-2'>
                            {id} : {title}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Profile;