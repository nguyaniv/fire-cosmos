import React from 'react'
import { Link } from 'react-router-dom'
import ready from '../style/imgs/ready.jpg'
function GetReady() {
    return (
        <section className="get-ready">
            <div className="container">
                <h3>Get Ready</h3>
                <p>Befor you leave to camping, Make sure to checkout our special products.
                We here to make your camping a bit more comfortable, and if possible -
                    save you a bit more time . </p>
                <Link to="/store" className="link-to-prodocts">To our Products</Link>
            </div>
            <img src={ready} alt="" />
            {/* <img src="https://media1.tenor.com/images/94f48ab41e9049057165141d12970523/tenor.gif" alt="" /> */}
        </section>
    )
}

export default GetReady
