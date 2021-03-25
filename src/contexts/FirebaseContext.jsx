import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import firebase from '../firebase/firebase';

const FirebaseContext = React.createContext()
const StoreContext = React.createContext()
const StoreContextUpdate = React.createContext()

export function useAuth() {
    return useContext(FirebaseContext)
}
export function useStore() {
    return useContext(StoreContext)
}

export function useStoreUpdate() {
    return useContext(StoreContextUpdate)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)
    const [userMail, setUserMail] = useState(undefined)
    const [userCart, setUserCart] = useState(undefined)
    const userDoc = firebase.firestore().collection("cart").doc(userMail).collection("items")

    const updateCart = () => {
        userDoc.get().then(async (querySnapshot) => {
            const item = await []
            await querySnapshot.forEach(async (doc) => {
                await item.push(doc.data())
            })
            await setUserCart(item)
        })

    }


    async function refreshCart() {
        await setUserMail(currentUser.email)
        await updateCart()
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, pasword) {
        return auth.signInWithEmailAndPassword(email, pasword)
    }

    function logout() {
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            await setCurrentUser(user)
            await setLoading(false)
        })
        return unsubscribe
    }, [currentUser])


    useEffect(() => {
        if (currentUser && currentUser.email) {
            console.log(userCart.length);
            refreshCart()
        }
    }, [userMail])

    useEffect(() => {

        updateCart()
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <FirebaseContext.Provider value={value}>
            <StoreContext.Provider value={userCart && userCart.length}>
                <StoreContextUpdate.Provider value={updateCart}>
                    {!loading && children}
                </StoreContextUpdate.Provider>
            </StoreContext.Provider>
        </FirebaseContext.Provider>
    )
}
