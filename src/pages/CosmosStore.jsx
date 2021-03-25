import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import ProductList from '../cmps/ProductList'
export default function CosmosStore() {
    const [isVisible, setIsVisible] = useState(false);
    const [img, setImg] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };


      const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        scrollToTop()
      }, []);

    if (loading) {
        return <h1>wait</h1>
    }
    return (
        //  TODO: use firebase to store products name,images and details
        <main className="cosmos-shop">
            <div className="header">
                <h1>The best quality - At the best price</h1>
                <Link to="/store/9">Read More..</Link>
            </div>
          

            <ProductList />

        </main>

    )
}
