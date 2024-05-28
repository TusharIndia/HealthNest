import React from 'react';

function Section2(props) {
    return (
        <div className={props.state!=="false"?'hello2':" "} >
        <div className='Section2container'>
        <div className="what-we-do-area pb-70">
            <div className="container">
                <div className="section-title wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible' }}>
                    <span className="top-title">What We Do</span>
                    <h2>Features Providers and Patients Love</h2>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-what-we-do wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible' }}>
                            <img src="https://templates.envytheme.com/tefri/default/assets/images/do/do-1.png" alt="Image" />
                            <h3>24/7 Support</h3>
                            <p>We understand that mental health doesn't follow a schedule. That's why our platform offers 24/7 support to ensure you have access to assistance whenever you need it most.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="single-what-we-do wow fadeInUp delay-0-4s animated" style={{ visibility: 'visible' }}>
                            <img src="https://templates.envytheme.com/tefri/default/assets/images/do/do-2.png" alt="Image" />
                            <h3>Therapy Virtual Assistant</h3>
                            <p>Our therapy virtual assistant is here to provide you with personalized support whenever you need it.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="single-what-we-do wow fadeInUp delay-0-6s animated" style={{ visibility: 'visible' }}>
                            <img src="https://templates.envytheme.com/tefri/default/assets/images/do/do-3.png" alt="Image" />
                            <h3>Health Plans</h3>
                            <p>Explore our range of personalized health plans designed to support your mental well-being journey.By asking you a series of questions about your symptoms and experiences,</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6">
                        <div className="single-what-we-do wow fadeInUp delay-0-8s animated" style={{ visibility: 'visible' }}>
                            <img src="https://templates.envytheme.com/tefri/default/assets/images/do/do-4.png" alt="Image" />
                            <h3>Diagnosis Virtual Assistant</h3>
                            <p>Our diagnosis virtual assistant is designed to provide you with insights into your mental health concerns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div></div></div>
    );
}

export default Section2;
