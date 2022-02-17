import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (


        <section className="page-section1 mb-0" id="about">
            <div className="container-fluid">
                <h2 className="page-section-heading text-center text-uppercase">Contact</h2>
                <div class="container card-container">


                    <div class="row justify-content-center">
                        <div class="col-6">
                            <div class="all-card1">
                                <div class="card-body custom-body">
                                    <form class="sign-in">

                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label custom-form-email"><strong>Name</strong></label>
                                            <input type="text" class="form-control custom-control"/>

                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1"
                                                class="form-label custom-pw"><strong>Email Address</strong></label>
                                            <input type="email" class="form-control custom-form" id="login-password"/>

                                        </div>
                                        <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label custom-form-email"><strong>Message</strong></label>
                                        <textarea class="form-control" id="comment-text" rows="3"></textarea>
                                        <br />
                                                <button type="submit" class="btn custom-btn1"><strong>Submit</strong></button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>



    );
}
