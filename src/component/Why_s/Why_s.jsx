import React from 'react'
import "./Why_s.css"
import why_photo from "./../../img/why_sec_back_img1.webp"
import why_mob_img from "./../../img/why_sec_img.webp"
function Why_s() {
    return (
        <section id="why">
            <div className="parent">
                <img
                    src={why_photo}
                    alt=""
                    className="why_photo"
                />
                <div className="chield">
                    <h2 className="text-center">SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h2>
                    <p className="text-center">DESIGNED TO PERFECTION</p>
                    <div className="why_container">
                        <img
                            src={why_mob_img}
                            alt=""
                            className="why_mob_img"
                        />
                        <div className="why_content">
                            <div
                                className="accordion accordion-flush"
                                id="accordionFlushExample"
                            >
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            NEW GRADIENT COLOR FINISHES
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is
                                            the first item's accordion body.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            FOUR-SIDED CURVED CERAMIC BODY
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is
                                            the second item's accordion body. Let's imagine this being
                                            filled with some actual content.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            4000MAH HIGH-CAPACITY BATTERY
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is
                                            the third item's accordion body. Nothing more exciting
                                            happening here in terms of content, but just filling up the
                                            space to make it look, at least at first glance, a bit more
                                            representative of how this would look in a real-world
                                            application.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseFour"
                                        >
                                            FULLY HIDDEN CAMERA LENS
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Placeholder content for this accordion, which is intended to
                                            demonstrate the <code>.accordion-flush</code> class. This is
                                            the third item's accordion body. Nothing more exciting
                                            happening here in terms of content, but just filling up the
                                            space to make it look, at least at first glance, a bit more
                                            representative of how this would look in a real-world
                                            application.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_s