import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { faLess } from '@fortawesome/free-brands-svg-icons';




export default function Projects(props) {
    const [isOpen, setIsOpen] = useState(false);
    const showModal =() => {
 
        setIsOpen({ show: true})
        
    };
    const hideModal = () => {
        setIsOpen(false)
    };



    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">

                <h2 className="page-section-heading text-black text-center text-uppercase text-secondary mb-0">Projects</h2>


                <div className="row justify-content-center projects-row">
                    {props.projs.map((project) => (

                        <><div className="col-md-6 col-lg-4 mb-5" onClick={showModal} key={project.id} id={project.id}>
                            <div className="portfolio-item mx-auto port-item">
                                <div className="portfolio-item mx-auto" data-bs-toggle={"modal"} data-bs-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">{project.title}</div>
                                    </div>
                                    <img className="img-fluid" src={project.mainImage} alt="..." />
                                </div>
                            </div>
                        </div>



                        <Modal
                            show={isOpen}
                            onHide={hideModal}
                            size='lg'
                            aria-labelledby="contained-modal-title-vcenter"
                            centered>


                                <><div className="modal-header border-0"><button className="btn-close" type="button" onClick={hideModal} key={project.id} data-bs-dismiss="modal" aria-label="Close"></button></div><div className="modal-body  pb-1">
                                    <div className="container">
                                        <div className="row ">
                                            <div className="col">
                                                <h2 className="portfolio-modal-title text-secondary text-center text-uppercase mb-0">{project.title} <i className="fas fa-star-of-life custom-star"></i></h2>

                                                <a href={project.href} target="_blank"> <img className="img-fluid rounded mb-1" src={project.modalImage} alt="..." /></a>
                                                <p className="mb-4">{project.description}</p>
                                                <p>{project.technologies} </p>
                                                <div className='links text-center'>
                                                    <a href={project.href} target="_blank">Deployed Application</a>
                                                    <br />

                                                    <a href={project.gitHub} target="_blank">GitHub Repository</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></>


                            </Modal></>






                        ))}              






                </div>
            </div>






        </section>




    );
}