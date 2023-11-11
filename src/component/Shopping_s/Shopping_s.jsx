import React from 'react'
import "./Shopping_s.css"
import shoppingImg1 from "./../../img/free-deliver-icon.webp"
import shoppingImg2 from "./../../img/offers-icon.webp"
import shoppingImg3 from "./../../img/support-icon.webp"
function Shoping_s() {
    return (
        <>
            <section id="free_shopping_sec">
                <div className="shopping_content">
                    <img src={shoppingImg1} alt="" />
                    <div>
                        <a className="a_style" href="#">
                            FREE SHOPPING
                        </a>
                        <p>For order over $50</p>
                    </div>
                </div>
                <div className="shopping_content">
                    <img src={shoppingImg2} alt="" />
                    <div>
                        <a className="a_style" href="#">
                            OFFICIAL DISCOUNTS
                        </a>
                        <p>Save Big on next product</p>
                    </div>
                </div>
                <div className="shopping_content">
                    <img src={shoppingImg3} alt="" />
                    <div>
                        <a className="a_style" href="#">
                            24/7 HELPLINE
                        </a>
                        <p>Care till the end</p>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default Shoping_s