import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/FirebaseContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import firebase from 'firebase';

import Logo from '../cmps/Logo'


export default function DesktopNav() {
    const history = useHistory()
    const user = useAuth()
    const [userCart, setUserCart] = useState(0)
    const [userMail, setUserMail] = useState(undefined)
    
    const itemsColl = userMail ? firebase.firestore().collection("cart").doc(user.currentUser.email).collection("items") : undefined


    const updateCart = () => {
        if (itemsColl === undefined) return
        itemsColl.get().then(async (querySnapshot) => {
            setUserCart(querySnapshot.size)
        })
    }

    useEffect(() => {
        if (user.currentUser) {

            setUserMail(user.currentUser.email);
            updateCart()
        }
    },
        [itemsColl])

 

    return (
        <div className="desktop-navbar">
            <Logo />
            <div className="nav-links">
                <Link to="/homepage" className="nav-link">Home</Link>
                <Link to="/store" className="nav-link">Store</Link>
                {/* <Link to="/about" className="nav-link">About</Link> */}
            </div>

            {user.currentUser && user.currentUser.email !== null ?
                <div className="dynamic-links">
                    <Link to="/cart" className="btn-white"> <FontAwesomeIcon size="lg" icon={faShoppingCart} />
                        <span>{userCart && userCart}</span></Link>
                    <button onClick={() => {
                        user.logout()
                        history.push("/")
                    }}>log out</button>
                </div>
                :
                <div className="dynamic-links">
                    <Link to="/login" className="nav-link">log in</Link>
                    <Link to="/signup" className="nav-link">Sign up</Link>
                </div>
            }
        </div>
    )
}
