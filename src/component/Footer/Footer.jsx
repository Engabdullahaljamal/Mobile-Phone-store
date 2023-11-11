import React from 'react'
import "./Footer.css"
import why_photo from "./../../img/why_sec_back_img1.webp"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer id="footer_sec">
            <div className="parent">
                <img
                    src={why_photo}
                    alt=""
                    className="why_photo"
                />
                <div className="chield">
                    <div>
                        <p className="text-center">SUBSCRIBE NOW</p>
                        <h2 className="text-center">GET OUR UPDATES ALWAYS FAST</h2>
                        <p className="text-center">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
                    </div>
                    <div className="inp">
                        {" "}
                        <input type="text" placeholder="Enter your email id" />
                        <button className="footer_button">
                            <i className="fa-solid fa-angle-right" />
                        </button>
                    </div>
                    <div className="footer_container">
                        <Link to='Search'>SEAECH</Link>
                        <span>|</span>
                        <a href="">HELP </a>
                        <span>|</span>
                        <a href="">INFORMATION </a>
                        <span>|</span>
                        <a href="">PRIVACY POLICY</a>
                        <span>|</span>
                        <Link to='Go_shopping'>SHIPPING DETAILS</Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer