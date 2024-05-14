import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';

const Privateroute = ({ children }) => {
    
    const {loading, user} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <h1>loading</h1>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate to={"/login"} state={{from : location}}></Navigate>
    );
};

export default Privateroute;