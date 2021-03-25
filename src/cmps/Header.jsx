import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>cosmosfire - the stars are waiting</h1>
            <Link to="/store">Our store</Link>
        </header>
    )
}
