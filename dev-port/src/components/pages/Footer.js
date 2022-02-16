import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

const envelope = <FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth inverse />
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="lg" fixedWidth inverse/>
const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth inverse/>

  return (
<div className="footer">
<section className="page-section" id="contact">
            <div className="container">

         <div className="row d-flex justify-content-center">      
                 <div className="col-lg-4 mb-lg-0 d-flex justify-content-center">
                        <a className="btn mx-2" href="mailto:emb.burger@yahoo.com">{envelope}</a>
                        <a className="btn mx-2" target="_blank" href="https://www.linkedin.com/in/emburger">{linkedIn}</a>
                        <a className="btn mx-2" target="_blank" href="https://github.com/eburger939">{gitHub}</a>
                    </div>    

                </div>       
                  
                </div>

        </section>
        </div>
  );
}

export default Footer;