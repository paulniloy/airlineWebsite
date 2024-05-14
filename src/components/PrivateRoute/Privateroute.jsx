import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';

const Privateroute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <div className='h-screen'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate to={"/login"} state={{ from: location }}></Navigate>
    );
};

export default Privateroute;