import React from 'react'
import "./Arrivals_card.css"

function Arrivals_card({ img, title, description, price }) {
    return (


        <div className='card'>
            <img src={img} alt="" className="card-img-top img_style" />
            <div className='card-body'>
                <h5 className='title text-center'>{title}</h5>
                <p className='card-text text-center'>{description}</p>
                <p className='card-text text-center red_p'>the price :{price}$</p>
            </div>

        </div>


    )
}

export default Arrivals_card