import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {


    const user = "Niloy Paul"

    const Authinfo = { user };

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;