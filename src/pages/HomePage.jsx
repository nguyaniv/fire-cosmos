import React from 'react'
import Header from '../cmps/Header';
import GetReady from '../cmps/GetReady';
import Telescope from '../cmps/Telescope';
import ContactUs from '../cmps/ContactUs';

export default function HomePage() {
    return (
        <main>
            < Header />
            <GetReady />
            <ContactUs />
        </main>
    )
}
