import React from 'react'
import "./Arrivals_s.css"
import { useEffect, useState } from 'react'
import Arrivals_card from '../Arrivals_card/Arrivals_card'
function Arrivals_s() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setRecords(data.products))

    }, [])
    const data = records

    return (
        <section id="new_arrivals">
            <h2 className="text-center">NEW ARRIVALS</h2>
            <p className="text-center mb-5">FIND THE PERFECT PHONE FOR YOU</p>
            <div className="cards_area new_arrivals_con">
                {

                    data.slice(0, 6).map((e) => (

                        <Arrivals_card img={e.images[0]} title={e.title} description={e.description} price={e.price} />
                    )

                    )
                }
            </div>
        </section>
    )
}


export default Arrivals_s