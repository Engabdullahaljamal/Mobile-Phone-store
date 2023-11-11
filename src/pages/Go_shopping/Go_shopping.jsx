import React from 'react'
import { useEffect, useState } from 'react'
import Arrivals_card from './../../component/Arrivals_card/Arrivals_card'
function Go_shopping() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setRecords(data.products))

    }, [])
    const data = records
    return (
        <section id="new_arrivals">
            <h2 className="text-center mt-5" >SHOPPING NOW</h2>
            <p className="text-center mb-5">FIND THE PERFECT PRUDUCT FOR YOU</p>
            <div className="cards_area new_arrivals_con">
                {

                    data.slice(0, 12).map((e) => (

                        <Arrivals_card img={e.images[0]} title={e.title} description={e.description} price={e.price} />
                    )

                    )
                }
            </div>
        </section>
    )
}

export default Go_shopping