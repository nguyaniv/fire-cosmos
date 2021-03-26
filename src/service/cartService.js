import firebase from 'firebase';


export async function addToCart(userMail, itemId, name, url, price, category, type, description) {

    const ammout = 1
    const cartItem = { itemId, name, url, price, category, type, description, ammout }

    if (userMail === undefined) throw console.error('please Login');

    const db = await firebase.firestore()
    await db.collection("cart").doc(userMail).collection("items").add({
        cartItem
    })
    await db.collection("cart").doc(userMail).collection("items").get()
    //  .then(snapshot => console.log(snapshot.size));
 
}
