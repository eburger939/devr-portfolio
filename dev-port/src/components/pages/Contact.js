import React from 'react';
import Button from 'react-bootstrap/Button';





export default function Contact() {
    return (


        <section className="page-section1 mb-0" id="about">
            <div className="container-fluid">
                <h2 className="page-section-heading text-center text-uppercase">Contact</h2>
                <div className="container card-container">
                <div class="container">
  <h1>FormSubmit Demo</h1>
  <form target="_blank" action="https://formsubmit.co/eburger939@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>




{/* 
                    <div className="row justify-content-center">


                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="https://formsubmit.co/eburger939@gmail.com" method="POST">


                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label for="name" className="">Your name</label>
                                            <input type="text" id="name" name="name" className="form-control" />

                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="md-form mb-0"><label for="email" className="">Your email</label>
                                            <input type="text" id="email" name="email" className="form-control" />

                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0"><label for="subject" className="">Subject</label>
                                            <input type="text" id="subject" name="subject" className="form-control" />

                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-md-12">

                                        <div className="md-form"><label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>

                                        </div>

                                    </div>
                                </div>


                            </form>
                            <br />
                            <div className="text-center text-md-left">
                                <a className="btn email-btn">Send</a>
                            </div>
                            <div className="status"></div>
                        </div>


                    </div> */}

               
                </div>
            </div>
        </section>



    );
}
