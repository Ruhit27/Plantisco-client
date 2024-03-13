import { createContext, useEffect, useState } from "react";
import app from "../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const unsub=onAuthStateChanged(
            auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            return unsub()
        }
    },[])
    const createUser=(email,pass)=>{
        setLoading(false)
         return createUserWithEmailAndPassword(auth,email,pass)
         

    }
    const login =(email,pass)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const info ={
      createUser,
      login,
      user,
      logOut,
      loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;