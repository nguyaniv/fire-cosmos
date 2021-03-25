import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import { useAuth, useStoreUpdate } from '../contexts/FirebaseContext';
import { Modal } from 'react-responsive-modal';
import EmptyCart from '../cmps/EmptyCart'
import 'react-responsive-modal/styles.css';

export default function Cart() {
    const [userMail, setUserMail] = useState(undefined)
    const [userCart, setUserCart] = useState(undefined)
    const [totalAmmout, setTotalAmmout] = useState(0)
    const user = useAuth()
    const userDoc = firebase.firestore().collection("cart").doc(userMail).collection("items")
    const updateStore = useStoreUpdate()


    const [open, setOpen] = useState(false);
    const onOpenModal = () => {
        setOpen(true)
        updateData()

    }
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        if (user.currentUser) {
            setUserMail(user.currentUser.email);
            updateStore();

        }
    }, [userCart]);

    useEffect(() => {
        updateData()
        updateStore();
    }, [userMail]);



    useEffect(() => {
        updateCart()

    }, []);

    const updateCart = () => {
        userDoc.get().then(async (querySnapshot) => {
            const cartItem = []
            querySnapshot.forEach((doc) => {
                let cart = doc.data()
                cartItem.push(cart)
            })
            await setUserCart(cartItem)
        });
    }

    const updateData = async () => {
        if (user.currentUser) {
            await updateCart()
            if (userCart) {
                let totalPrice = 0;
                await userCart.forEach(item => {
                    totalPrice += +item.cartItem.price
                    setTotalAmmout(totalPrice)
                    updateCart()
                })
            }
        }
    }


    const emptyCart = async () => {
        await userDoc.get()
            .then(res => {
                res.forEach(element => {
                    element.ref.delete();
                });
            });
        // await userDoc.set({
        //     item: firebase.firestore.FieldValue.arrayUnion()
        // })
        await updateData()
        await updateStore()
        await updateCart()
        await setTotalAmmout(0)
        await onCloseModal()

    }

    async function removeFromCart(itemId, name, url, price, category, type, description, ammout) {
        const cartItem = { itemId, name, url, price, category, type, description, ammout }
        const db = await firebase.firestore()
        const collItems = db.collection("cart").doc(userMail).collection("items").limit(1)
        const items_qurey = collItems.where('cartItem.itemId', '==', cartItem.itemId)
        try {
            await items_qurey.get().then(async function (querySnapshot) {
                querySnapshot.forEach(async function (doc) {
                    await doc.ref.delete()
                });
            })
            await items_qurey.get().then(async function (querySnapshot) {
                await updateData()
                await updateStore()
                await updateCart()
            })

        }

        catch {
            console.error('couldnt delete item');
        }
    }

    if (!userCart || userCart && userCart.length === 0) return <EmptyCart />
    return (
        <main className="main-cart">
            <div className="container">
                {userCart && userCart.length >= 1 && userCart.map((item) => {
                    return (
                        < div className="item-container" key={item.cartItem.itemId} >
                            <h3>{item.cartItem.name}</h3>
                            <p>${item.cartItem.price}</p>
                            <img height="150px" width="150px" src={item.cartItem.url} alt="" />
                            <button onClick={async () => {
                                await removeFromCart(item.cartItem.itemId, item.cartItem.name, item.cartItem.url, item.cartItem.price, item.cartItem.category, item.cartItem.type, item.cartItem.description, item.cartItem.ammout)
                            }}>X</button>
                        </div>
                    )
                })}

            </div>
            <button className="fixed-bottom-link" onClick={onOpenModal}>finish</button>
            <Modal showCloseIcon={true} open={open} onClose={onCloseModal} center>
                <div className="modal-container">
                    <div>
                        {userCart && userCart.length >= 1 &&
                            userCart.map(item => {
                                return (
                                    <div key={item.cartItem._id}>
                                        <li key={item.cartItem._id}>{item.cartItem.name} <span className="strong">{'$' + item.cartItem.price}</span></li>
                                    </div>
                                )
                            })
                        }
                        {totalAmmout &&

                            <h3>total price: ${totalAmmout}</h3>
                        }
                    </div>
                    <button onClick={emptyCart}>Click to Pay</button>
                </div>
            </Modal>
        </main >
    )
}

