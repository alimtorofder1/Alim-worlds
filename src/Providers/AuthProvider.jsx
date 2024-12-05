import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,   signInWithPopup,   signOut,  updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxisPublic from "../hooks/useAxisPublic";
// import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser]=useState(null)
    const [loading , setLoading]=useState(true)
    const googleAuthProvider = new GoogleAuthProvider();
    const axiosPublic = useAxisPublic();

    const createUser=(email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);       
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth , googleAuthProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name , photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name , photoURL:photo
          });
        }

    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt' , userInfo)
                .then(res =>{
                   if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                   }
                })
            }  
            else{
                localStorage.removeItem('access-token');
            }
            setLoading(false);
            
        })
        return ()=>{
            return unsubcribe();
        }
    },[axiosPublic])



    const Authinfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        updateUserProfile,
        logOut,
    }

    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;