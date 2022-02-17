import { React, useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const showModal = () => {
        setIsOpen(true)
    };
    const hideModal = () => {
        setIsOpen(false)
    };



    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-black text-center text-uppercase text-secondary mb-0">Projects</h2>


                <div className="row justify-content-center projects-row">

                    <div className="col-md-6 col-lg-4 mb-5" onClick={showModal}>
                        <div className="portfolio-item mx-auto port-item">
                            <div className="portfolio-item mx-auto" data-bs-toggle={"modal"} data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/petrec3.png" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5" onClick={showModal}>
                        <div className="portfolio-item mx-auto port-item">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="/images/movieroulette.png" alt="..." />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto port-item">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="images/advblog1.png" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto port-item">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>

                                <img className="img-fluid" src="images/weather.png" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto port-item">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="images/thwider1.png" alt="..." />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <Modal
                show={isOpen}
                onHide={hideModal}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered>


                <div className="modal-header border-0"><button className="btn-close" type="button" onClick={hideModal} data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body  pb-1">
                    <div className="container">
                        <div className="row ">
                            <div className="col">
                                <h2 className="portfolio-modal-title text-secondary text-center text-uppercase mb-0">petRec <i className="fas fa-star-of-life custom-star"></i></h2>

                                <a href="https://pet-rec.herokuapp.com/" target="_blank"> <img className="img-fluid rounded mb-1" src="images/petrec2.png" alt="..." /></a>
                                <p className="mb-4">Manage and maintain all your pet records, medications, and vaccinations in one application!  PetRec is a tool for all pet owers to assist in organizing their pets medications, vaccinations, and health records.  A profile, or chart, can be create for every pet in the househould, and individualized based on that pets' health needs!  No more papers, binders, or forgetting when your pup's next monthly heartworm medication is due!</p>
                                <p>Technologies Used: HTML, CSS, Javascript, Node.js, Express.js, Bcrypt, Handlebars, MySQL (Sequelize), Multer </p>
                                <div className='links text-center'>
                                    <a href="https://pet-rec.herokuapp.com/" target="_blank">Deployed Application</a>
                                    <br/>

                                    <a href="https://github.com/eburger939/pet-ehr" target="_blank">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-header border-0"><button className="btn-close" type="button" onClick={hideModal} data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div className="modal-body  pb-1">
                    <div className="container">
                        <div className="row ">
                            <div className="col">
                                <h2 className="portfolio-modal-title text-secondary text-center text-uppercase mb-0">Movie Roulette <i className="fas fa-star-of-life custom-star"></i></h2>

                                <a href="https://pet-rec.herokuapp.com/" target="_blank"> <img className="img-fluid rounded mb-1" src="images/petrec2.png" alt="..." /></a>
                                <p className="mb-4">Manage and maintain all your pet records, medications, and vaccinations in one application!  PetRec is a tool for all pet owers to assist in organizing their pets medications, vaccinations, and health records.  A profile, or chart, can be create for every pet in the househould, and individualized based on that pets' health needs!  No more papers, binders, or forgetting when your pup's next monthly heartworm medication is due!</p>
                                <p>Technologies Used: HTML, CSS, Javascript, Node.js, Express.js, Bcrypt, Handlebars, MySQL (Sequelize), Multer </p>
                                <div className='links text-center'>
                                    <a href="https://pet-rec.herokuapp.com/" target="_blank">Deployed Application</a>
                                    <br/>

                                    <a href="https://github.com/eburger939/pet-ehr" target="_blank">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Modal>

        </section>




    );
}