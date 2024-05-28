import Footer from "./child_components/footer"
import Header from "./child_components/header"

function Contact(){
    return(<>
            <Header/>
        <div className="contactContainer">
            <div>
            <section class="page-title-area page-title-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Contact</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
            <div>
            <section class="contact-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <span>Send Message</span>
                    <h2>Drop us message for any query</h2>
                    <p>If you have an idea, we would love to hear about it.</p>
                </div>

                <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class="contact-form">
                            <form id="contactForm" novalidate="true">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" required="" data-error="Please enter your name" placeholder="Name"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" required="" data-error="Please enter your email" placeholder="Email"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required="" data-error="Please enter your number" class="form-control" placeholder="Phone"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" required="" data-error="Please enter your subject" placeholder="Subject"/>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" required="" data-error="Write your message" placeholder="Your Message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="btn btn-primary disabled" styles={{ pointerEvents: "all", cursor: "pointer" }}>Send Message <i class="flaticon-right-chevron"></i></button>
                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12">
                        <div class="contact-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <span>Address</span>
                                    CA 560 Bush St &amp; 20th Ave, Apt 5 San Francisco, 230909, Canada
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <span>Email</span>
                                    <a href="#">fovia@email.com</a>
                                    <a href="#">fax@email.com</a>
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <span>Phone</span>
                                    <a href="#">+44 587 154756</a>
                                    <a href="#">+55 5555 14574</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-map"><img alt="image" data-cfsrc="assets/img/bg-map.png" src="https://templates.envytheme.com/fovia/default/assets/img/bg-map.png"/></div>
        </section>
            </div>
            

        </div><Footer/></>
    )
}

export default Contact