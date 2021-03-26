import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Menu2 from '../style/icons/menu2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useAuth, useStore } from '../contexts/FirebaseContext';
import firebase from 'firebase';

export default function MobileNavbar() {
    const user = useAuth()
    const cart = useStore()
    const [userCart, setUserCart] = useState(0)
    const [userMail, setUserMail] = useState(undefined)
    const [sideNav, setSideNav] = useState('')

    // const userDoc = userMail ? firebase.firestore().collection("cart").doc(user.currentUser.email).collection("items") : undefined;
    const itemsColl = userMail ? firebase.firestore().collection("cart").doc(user.currentUser.email).collection("items") : undefined




    const toggleNav = () => {
        sideNav === '-active' ? setSideNav('') : setSideNav('-active')
    }


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
        <>
            <div className="mobile-navbar">
                {user.currentUser && user.currentUser.email !== null ?
                    <>
                        <img onClick={toggleNav} src={Menu2} />
                        <div>
                            <Link to="/cart" className="btn-white"> <FontAwesomeIcon size="lg" icon={faShoppingCart} /><span>{userCart ? userCart : 0}</span></Link>
                            {/* <Link to={`/profile`} className="btn-white"><FontAwesomeIcon size="lg" icon={faUserCircle} /> </Link> */}
                        </div>
                    </>
                    :
                    <>
                        <img onClick={toggleNav} src={Menu2} />
                        <div>
                            <Link to="/cart" className="btn-white"> <FontAwesomeIcon size="lg" icon={faShoppingCart} /><span>0</span></Link>
                            {/* <Link to={`/login`} className="btn-white"><FontAwesomeIcon size="lg" icon={faUserCircle} /> </Link> */}
                        </div>

                    </>
                }
            </div>

            <div onClick={toggleNav} className={'side-nav' + sideNav}>
                <div className="dynamic-links">
                    {user.currentUser && user.currentUser.email !== null ?

                        <div className="dynamic-links">
                            {/* <Link onClick={toggleNav} to="/profile" className="sidenav-link" >Profile</Link> */}
                            <Link onClick={toggleNav} to="/cart" className="sidenav-link" >My Cart</Link>
                            <button onClick={() => {
                                user.logout()
                            }}>log out</button>
                        </div> :


                        <div className="dynamic-links">
                            <Link onClick={toggleNav} to="/login" className="sidenav-link" >log in</Link>
                            <Link onClick={toggleNav} to="/signup" className="sidenav-link">Sign up</Link>
                        </div>

                    }
                </div>
                <div onClick={toggleNav} className={'sidenav-links'}>
                    <Link onClick={toggleNav} className="sidnav-link" to="/homepage" >Home</Link>
                    <Link onClick={toggleNav} className="sidnav-link" to="/store" >Store</Link>
                    {/* <Link onClick={toggleNav} className="sidnav-link" to="/contact" >Contact us</Link> */}
                </div>


                <button onClick={toggleNav} className="close-nav">X</button>
            </div>


        </>
    )
}
