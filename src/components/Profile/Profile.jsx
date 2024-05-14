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
        <div>
            {
                data.slice(0, 20).map(d => {
                    const { id, title, body } = d;
                    return (
                        <div className='grid p-5 border'>
                            {id} : {title}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Profile;