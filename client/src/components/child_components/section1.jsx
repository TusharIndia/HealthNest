import React from 'react';

function Section1() {
    return (
        <div className='section1container'>
            <div className="row align-items-end">
                <div className="col-xl-7">
                    <div className="banner-content">
                        <span className="top-title wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible' }}>Start Your Journey</span>
                        <h1 className="wow fadeInUp delay-0-4s animated" style={{ visibility: 'visible' }}>We provide Remote Mental Health Care Services</h1>
                        <p className="porttitor wow fadeInUp delay-0-6s animated" style={{ visibility: 'visible' }}>Creating a mental health website with therapy resources and a diagnosis assistant could offer support and guidance to many people.</p>

                        <div className="banner-btn wow fadeInUp delay-0-8s animated" style={{ visibility: 'visible' }}>
                            <a href="/diagnosis" className="default-btn" style={{height:'3.3rem'
                            }} >
                                Get Started
                            </a>
                            <a href="/therpy" className="video-btn popup-youtube">
                                <i className="ri-play-fill"></i>
                                <span>Therpy</span>
                            </a>
                        </div>

                        <p className="question wow fadeInUp delay-0-1s animated" style={{ visibility: 'visible' }}>Have question? <a href="contact-us.html">Please contact us</a></p>

                       
                    </div>
                </div>

                <div className="col-xl-5">
                    <div className="banner-img wow fadeInUp delay-0-6s animated" style={{ visibility: 'visible' , width:'35rem' }}>
                        <img src="https://etimg.etb2bimg.com/photo/105395878.cms" alt="Image" style={{height:'30rem',width:"45rem"}}/>
                        <img src="https://templates.envytheme.com/tefri/default/assets/images/banner/banner-img-shape-1.png" className="banner-shape-1" alt="Image"/>
                        <img src="https://templates.envytheme.com/tefri/default/assets/images/banner/banner-img-shape-2.png" className="banner-shape-2" alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
