import { useState } from "react";
import { createContext } from "react";
export const userContext = createContext()
import app from "../firebase/firebase.config"
import {getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, sendEmailVerification  } from "firebase/auth";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [verified, setVerified] = useState(false)

    //authentication methods
    const signInWithGoogle = ()=> signInWithPopup(auth, googleProvider);
    const signInWithGithub = () => signInWithPopup(auth, githubProvider);
    const registerNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const signUserWithPwd = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const resetUserPassword = (email) => sendPasswordResetEmail(auth, email)
    const updateUserProfile = (userInformation) => updateProfile(auth.currentUser, userInformation)
    const sendEmailConfirmation = () => sendEmailVerification(auth.currentUser)
    const logOutUser = () => signOut(auth)

    const userInfo = {
        user,
        setUser,
        signInWithGoogle,
        signInWithGithub,
        registerNewUser,
        signUserWithPwd,
        resetUserPassword,
        updateUserProfile,
        loading,
        sendEmailConfirmation,
        logOutUser,
        verified,
        setVerified
    }

    useEffect(()=>{
       const unsbuscribe =  onAuthStateChanged(auth, user=>{
          setUser(user)
          setLoading(false)
        })

        return ()=>unsbuscribe()
    }, [user])


  return (
    <userContext.Provider value={userInfo}>
        {children}
    </userContext.Provider>
  )
}

export default AuthProvider