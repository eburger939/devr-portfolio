import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
      <div className="container">
        <button
          className="navbar-toggler text-uppercase font-weight-bold text-white rounded"
          type="button"
          databstoggle="collapse"
          databstarget="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a 
              href="#home"
              onClick={() => handlePageChange('Home')} 
              className={currentPage === 'Home' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                Home
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a 
              href="#about"
              onClick={() => handlePageChange('About')} 
              className={currentPage === 'About' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
            <a 
              href="#projects"
              onClick={() => handlePageChange('Projects')} 
              className={currentPage === 'Projects' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                Projects
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
            <a 
              href="#contact"
              onClick={() => handlePageChange('Contact')} 
              className={currentPage === 'Contact' ? 'nav-link active py-3 px-0 px-lg-3 rounded' : 'nav-link py-3 px-0 px-lg-3 rounded'}>
                Contact
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="https://docs.google.com/document/d/1WIVkR4UozjCZEKY1K6jnAtTmb2j2-fe2/edit?usp=sharing&ouid=109654594711223862457&rtpof=true&sd=true"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavBar;
