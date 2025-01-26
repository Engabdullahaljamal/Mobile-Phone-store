import React from 'react'
import "./Qualities_s.css"
import qualitie_img from "./../../img/iphon_16_img.jpeg"
import qualities_img_1 from "./../../img/qualities_img_1.png"
import qualities_img_2 from "./../../img/qualities_img_2.webp"
import qualities_img_3 from "./../../img/qualities_img_3.webp"
import qualities_img_4 from "./../../img/qualities_img_4.webp"
import qualities_img_5 from "./../../img/qualities_img_5.webp"
import qualities_img_6 from "./../../img/qualities_img_6.png"
function Qualities_s() {
    return (
        <section id="Qualities">
            <h2 className="text-center">INNOVATIVE QUALITIES &amp; FEATURES</h2>
            <p className="text-center">SHOW YOURS TO THE WORLD</p>
            <div className="qualities_container">
                <div className="qualities_content">
                    <div>
                        <a className="a_style" href="#">
                            HD SURROUND AUDIO
                        </a>{" "}
                        <img
                            className="qual_img_one"
                            src={qualities_img_1}
                            alt=""
                        />
                        <p>
                            Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis
                            mauris sit am.
                        </p>
                    </div>
                    <div>
                        <a className="a_style" href="#">
                            STYLISH BEVEL EDGES
                        </a>{" "}
                        <img
                            className="qual_img_one"
                            src={qualities_img_2}
                            alt=""
                        />
                        <p>
                            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incidid
                        </p>
                    </div>
                    <div>
                        <a className="a_style" href="#">
                            {" "}
                            INTELLIGENT PROCESSOR
                        </a>{" "}
                        <img
                            className="qual_img_one"
                            src={qualities_img_3}
                            alt=""
                        />
                        <p>
                            Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana
                            erti qeueri
                        </p>
                    </div>
                </div>
                <div className="qualities_content">
                    <img
                        src={qualitie_img}
                        alt=""
                        className="quality_phone_photo"
                    />
                </div>
                <div className="qualities_content">
                    <div>
                        <img
                            className="qual_img_two"
                            src={qualities_img_4}
                            alt=""
                        />
                        <a className="a_style" href="#">
                            4.0 WIFI SPECS
                        </a>
                        <p className="ms-5">
                            Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis ipsum
                            sed iacus.
                        </p>
                    </div>
                    <div>
                        <img
                            className="qual_img_two"
                            a=""
                            src={qualities_img_5}
                            alt=""
                        />
                        <a className="a_style" href="#">
                            MULIT TASKING &amp; THREADING
                        </a>
                        <p className="ms-5">
                            Amet consectetur adipiscing velit laoreet nega id elit pellentesque
                            habitant morbi .
                        </p>
                    </div>
                    <div>
                        <img
                            className="qual_img_two"
                            src={qualities_img_6}
                            alt=""
                        />
                        <a className="a_style" href="#">
                            CLOUD STORAGE
                        </a>
                        <p className="ms-5">
                            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididun
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualities_s