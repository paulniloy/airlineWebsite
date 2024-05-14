import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { Bars } from 'react-loader-spinner';

const Privateroute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {

        return (
            <div className="flex justify-center h-screen items-center">
                <Bars
                    height="100"
                    width="100"
                    color=""
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )

    }
    if (user) {
        return children;
    }

    return (
        <Navigate to={"/login"} state={{ from: location }} replace={true}></Navigate>
    );
};

export default Privateroute;