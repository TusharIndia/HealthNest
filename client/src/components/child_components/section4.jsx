import React from 'react';

function Section4() {
    return (
        <div className='Section4container '>
        <section className="wh-wrap style1 bg-chathamas ptb-100">
            <div className="container">
                <div className="row align-items-center mb-40">
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <div className="section-title style2">
                            <span>Why Choose us</span>
                            <h2>Owr Best Services & Quite Popular Online Treatment</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <p className="section-para style2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ex maxime itaque corporis ipsam dolores non explicabo, ipsa temporibus impedit, quos architecto ad pariatur! Itaque fugit nesciunt doloremque quos! Nam?</p>
                    </div>
                </div>
                <div className="row align-items-center gx-5">
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                        <div className="wh-img-wrap">
                            <div className="wh-shape-one">
                                <img src="https://templates.hibotheme.com/teli/default/assets/img/why-choose-us/wh-shape-1.png" alt="Image" className=" bounce" />
                            </div>
                            <img src="https://templates.hibotheme.com/teli/default/assets/img/why-choose-us/wh-img-5.jpg" alt="Image" className="wh-img-one" />
                            <img src="https://templates.hibotheme.com/teli/default/assets/img/why-choose-us/wh-img-2.jpg" alt="Image" className="wh-img-two" />
                        </div>
                    </div>
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                        <div className="wh-content">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="ri-check-line"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h3>Therapy Virtual Assistant</h3>
                                        <p>Our therapy virtual assistant is here to provide you with personalized support whenever you need it. Whether you're feeling overwhelmed, anxious, or just need someone to talk to, our virtual assistant is available 24/7 to lend an empathetic ear and offer guidance</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="ri-check-line"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h3>Diagnosis Virtual Assistant</h3>
                                        <p>Our diagnosis virtual assistant is designed to provide you with insights into your mental health concerns</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="ri-check-line"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h3>Meditation</h3>
                                        <p>Explore our collection of guided meditation sessions to help you find peace and tranquility in your daily life</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partner-slider-one owl-carousel pt-100 owl-loaded owl-drag">
                    {/* You can add content for the owl-carousel here */}
                </div>
            </div>
        </section></div>
    );
}

export default Section4;
