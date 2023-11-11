import React from 'react'
import './Login_container.css'

function Login_container() {
    return (
        <div className='login_con'>
            <h2 className="text-center">Log in </h2>
            <p className="text-center">inter your account pleas</p>
            <div className="inp">
                <input type="text" placeholder="Enter your Name" />
                <input type="text" placeholder="Enter your email id" />
                <input type="text" placeholder="Enter Phone Number" />
                <button className="footer_button">
                    <i className="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>
    )
}

export default Login_container