import { createContext } from "react";
import app from "../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const createUser=(email,pass)=>{
         return createUserWithEmailAndPassword(auth,email,pass)
    }
    const info ={
      createUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;