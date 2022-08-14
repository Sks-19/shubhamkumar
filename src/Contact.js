import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Contact.css';

function Contact_me() {
    return (
        <>
            <section class="mb-4">
              <div class="row contact">
              <div class="col-md-9 mb-md-0 mb-5">
                <h2 class="h1-responsive font-weight-bold text-left my-4">Get In Touch</h2>

                        <form id="contact-form" name="contact-form" action="#" method="#">
                            <div class="row">

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" name="name" placeholder='Your Name' class="form-control inp" />
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <input type="text" name="email" placeholder='Your Email' class="form-control inp" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form mb-0">
                                        <input type="tel" name="subject" placeholder='Your Phone' class="form-control inp" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="md-form">
                                        <textarea type="text" name="message" rows="3" placeholder='Write a Message' class="form-control md-textarea inp"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="text-center text-md-left">
                            <a class="btn btn-outline-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </div>
                        <div class="status"></div>
                    </div>
                
                    <div class="col-md-3 text-center">
                        <ul class="list-unstyled mb-0">
                        <h2 class="h1-responsive font-weight-bold text-center my-4">My contact Details</h2>
                            <li>
                            <label style={{color: "blue"}}>ADDRESS :</label>
                                <p>Angrahi, Aurangabad, Bihar, INDIA</p>
                            </li>

                            <li>
                            <label style={{color: "blue"}}>PHONE :</label>
                                <p>+91 9116 736 861</p>
                            </li>

                            <li>
                            <label style={{color: "blue"}}>EMAIL :</label>
                                <p>shubhamsks19@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact_me;