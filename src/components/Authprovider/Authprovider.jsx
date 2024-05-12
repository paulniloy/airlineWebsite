import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";
export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();


    const googlelogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    const createuserwithpassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinwithpassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Authinfo = {
        googlelogin,
        createuserwithpassword,
        signinwithpassword
    };

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;