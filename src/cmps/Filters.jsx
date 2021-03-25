import React from 'react'

const Filters = ({filterProducts,setCurrentPage}) => {
    return (

        <div
            className="filters">
            <div onClick={() => {
                filterProducts('all')
            }} className="filter">
                <h3>All</h3>
            </div>
            <div onClick={() => {
                filterProducts('Astronomy')
            }} className="filter">
                <h3>Astronomey</h3>

            </div>
            <div onClick={() => {
                filterProducts('Camping')
                setCurrentPage(1)
            }} className="filter">
                <h3>Camping</h3>
            </div>

        </div>
    )
}

export default Filters
