import React from 'react'
import "./Hero.css"
import sliderImage1 from "./../../img/phono-slider-1.webp"
import sliderImage2 from "./../../img/phono-slider-2.webp"
import sliderImage3 from "./../../img/phono-slider-3.webp"

function Hero() {
    return (
        <section id="carousel_sec">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={sliderImage1}
                            className="d-block w-100 carousel_img"
                            alt="..."
                        />
                        <div className="first_content">
                            <h2 className="text-center">ZANIA BLACK EDITION</h2>
                            <h1 className="text-center">CURVY BEVEL DUAL AUDIO</h1>
                            <button className="text-center">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={sliderImage2}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="sec_content">
                            <h2 className="text-center">4K RESOLUTION</h2>
                            <h1 className="text-center">EXCLUSIVE STEEL FRAME</h1>
                            <button className="text-center">BUY NOW</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={sliderImage3}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="third_content">
                            <h2 className="text-center">DELTA ZERTIGA PROCESSOR</h2>
                            <h1 className="text-center">FULL SCREEN DISPLAY</h1>
                            <button className="text-center">SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev red_back"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next red_back"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Hero