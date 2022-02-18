import React from 'react';


export default function Contact() {
    return (
        <section className="page-section1 mb-0 " id="about">
            <div className="container-fluid">
                <h2 className="page-section-heading text-center text-uppercase">Contact</h2>
                <div className="row justify-content-center">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form target="_blank" action="https://formsubmit.co/eburger939@gmail.com" method="POST">
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
                             <br />
                            <div className="text-center text-md-left">
                                <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                            </div>
                        </form>           
                    </div>
                </div>
            </div>
        </section>
    );
}
