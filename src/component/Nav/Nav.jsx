import React from 'react'
import "./Nav.css"
import usaFlag from "./../../img/us_flag.png"
import frenchFlag from "./../../img/FRENSH.png"
import syrianFlag from "./../../img/syria_flag.jpeg"
import GER_FLAG from "./../../img/GER_FLAG.png"
import UAE_FLAG from "./../../img/UAE_FLAG.png"
import UK_FLAG from "./../../img/UK_FLAG.jpeg"
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid ps-5 pe-5">
                <a className="navbar-brand" href="#">
                    PHONO
                </a>
                <ul className="sec_part">
                    <li>
                        <button
                            className="navbar-toggler "
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    Offcanvas
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Link
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to='/'><i class="fa-solid fa-house"></i> </Link>
                    </li>
                    <li>
                        <Link to='Login'> <i className="fa-solid fa-user" /></Link>
                    </li>

                    <li>
                        <Link to='Go_shopping'>  <i className="fa-solid fa-cart-shopping" /> </Link>
                    </li>
                    <li>

                        <Link to='Search'><i className="fa-solid fa-magnifying-glass" /></Link>

                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            US{" "}
                            <img src={usaFlag} className="flag_img" alt="" />
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    FRE{" "}
                                    <img
                                        src={frenchFlag}
                                        className="flag_img"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    SYR
                                    <img
                                        src={syrianFlag}
                                        className="flag_img"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    GER
                                    <img
                                        src={GER_FLAG}
                                        className="flag_img"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    UAE
                                    <img
                                        src={UAE_FLAG}
                                        className="flag_img"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    UK
                                    <img
                                        src={UK_FLAG}
                                        className="flag_img ms-2"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav