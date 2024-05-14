import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";
export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {

    const [loading, setloader] = useState(true)
    const [user, setuser] = useState('')

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
                setloader(true)
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
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinwithpassword = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        setloader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                setloader(false);
                console.log(user);
            }
        })
        return () => {
            unsubscribe();
        }
    })

    const Authinfo = {
        googlelogin,
        createuserwithpassword,
        signinwithpassword,
        signout, user, loading, setloader, setuser
    };

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;