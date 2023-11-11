import React from 'react'
import "./Performance_s.css"
import performance_sec_img from "./../../img/performance_sec_img.webp"
import per_sec_img1 from "./../../img/per_sec_img1.webp"
import per_sec_img2 from "./../../img/per_sec_img2.webp"
import per_sec_img3 from "./../../img/per_sec_img3.webp"
import per_sec_img4 from "./../../img/per_sec_img4.png"

function Performance_s() {
    return (
        <section id="performance_sec">
            <h2 className="text-center">POSSIBILITIES. PERFORMANCE. POWER.</h2>
            <p className="text-center">FASTER PROCESSING WITH LESS POWER</p>
            <img
                src={performance_sec_img}
                alt=""
                className="per_img"
            />
            <div className="performance_sec_con">
                <div>
                    <div className="line_type_one" />
                    <div>
                        <div className="text-center mb-3">
                            <img src={per_sec_img1} alt="" />
                        </div>
                        <div className="text-center mb-3">
                            <a className="a_style" href="#">
                                SCORPION PROCESSOR
                            </a>
                        </div>
                        <p className="text-center">
                            Tristique senectus et netus et malesuada fames ac turpis
                        </p>
                    </div>
                </div>
                <div>
                    <div className="line_type_two" />
                    <div>
                        <div className="text-center mb-3">
                            <img src={per_sec_img2} alt="" />
                        </div>
                        <div className="text-center mb-3">
                            <a className="a_style" href="#">
                                MOST POPULAR
                            </a>
                        </div>
                        <p className="text-center">
                            Donec ultrices tincidunt arcu non sodales neque sodales ut.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="line_type_one" />
                    <div>
                        <div className="text-center mb-3">
                            {" "}
                            <img src={per_sec_img3} alt="" />
                        </div>
                        <div className="text-center mb-3">
                            {" "}
                            <a className="a_style" href="#">
                                48 MP CAMERA
                            </a>
                        </div>
                        <p className="text-center">
                            Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="line_type_two" />
                    <div>
                        <div className="text-center mb-3">
                            {" "}
                            <img src={per_sec_img4} alt="" />
                        </div>
                        <div className="text-center mb-3">
                            <a className="a_style" href="#">
                                MOST POPULAR
                            </a>
                        </div>
                        <p className="text-center">
                            Natoque penatibus et magnis dis parturient montes nascetur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Performance_s