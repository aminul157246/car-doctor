import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {


    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in 
    const  signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            console.log('current user' , currentUser);
        })
        return () => {
            return unSubscribe;
        }
    },[])


    const authInfo = {

        user, loading, createUser, signIn

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;