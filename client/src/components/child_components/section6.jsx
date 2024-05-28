import React from 'react';

function Section6() {
    return (
        <div className='Section6container '>
        <div className="container">
            <div className="subscribe-bg bg-color-3270ff wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible' }}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="subscribe-content">
                            <h2>Subscribe to the updates!</h2>
                            <p>Sign up to our newsletter and be the first to know about the latest news, special offers, events, and discounts.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="newsletter-wrap">
                            <form className="newsletter-form" data-toggle="validator" noValidate>
                                <input type="email" className="form-control" placeholder="Your email address" name="EMAIL" required autoComplete="off" />
        
                                <button className="default-btn disabled" type="submit" style={{ pointerEvents: 'all', cursor: 'pointer' }}>
                                    Subscribe
                                </button>
        
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>	
                    </div>
                </div>

                <img src="https://templates.envytheme.com/tefri/default/assets/images/subscribe-shape.png" className="subscribe-shape" alt="Image" />
            </div></div>
        </div>
    );
}

export default Section6;
