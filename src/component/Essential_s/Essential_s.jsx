import React from 'react'
import "./Essential_s.css"
import essential_1 from "./../../img/essential_1.webp"
import essential_2 from "./../../img/essential_2.avif"
import essential_3 from "./../../img/essential_3.webp"
function Essential_s() {
    return (
        <>
            <section id="essential_sec">
                <h2 className="text-center">WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
                <p className="text-center">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
                <div className="essential_container">
                    <div className="essential_content">
                        <img src={essential_1} alt="" />
                        <a className="a_style" href="#">
                            PERFECT CUT
                        </a>
                        <a className="a_style  a_font" href="#">
                            DUAL CAMERA
                        </a>
                        <p className="text-center">
                            Tristique senectus et netus et malesuada ant reiet fames.
                        </p>
                    </div>
                    <div className="essential_content">
                        <img src={essential_2} alt="" />
                        <a className="a_style" href="#">
                            PRETTY
                        </a>
                        <a className="a_style a_font" href="#">
                            INTELLIGENT PROCESSING
                        </a>
                        <p className="text-center">
                            Consequat ac habit amet asse felis donec et odio pellentesque diam.
                        </p>
                    </div>
                    <div className="essential_content">
                        <img src={essential_3} alt="" />
                        <a className="a_style" href="#">
                            MOST POPULAR
                        </a>
                        <a className="a_style  a_font" href="#">
                            8GB DDR5 RAM
                        </a>
                        <p className="text-center">
                            Dictum varius duis at consectetur lorem donec massa sap faucibus.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Essential_s