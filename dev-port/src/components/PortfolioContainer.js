import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer'

import './PC.css'

const projs = [
  {
    id: 1,
    mainImage: "/images/petrec3.png",
    description: "Manage and maintain all your pet records, medications, and vaccinations in one application!  PetRec is a tool for all pet owers to assist in organizing their pets medications, vaccinations, and health records.  A profile, or chart, can be create for every pet in the househould, and individualized based on that pets' health needs!  No more papers, binders, or forgetting when your pup's next monthly heartworm medication is due!",
    technologies: "Technologies Used: HTML, CSS, Javascript, Node.js, Express.js, Bcrypt, Handlebars, MySQL (Sequelize), Multer",
    modalImage: "images/petrec2.png",
    href: "https://pet-rec.herokuapp.com/",
    gitHub: "https://github.com/eburger939/pet-ehr",
    title: "PetRec"
  },
  {
    id: 2,
    mainImage: "/images/movieroulette.png",
    description: "If you have ever been indecisive on what to watch on your preferred streaming service, let Movie Roulette assist you!  Choose your genre and streaming service then spin the wheel!  You will be presented with six random suggestion for your next movie night.  Then click on the movie of choice to find more information!",
    technologies: "Technologies Used: HTML, CSS, Javascript, Bulma, IMDB API, Streaming Services API",
    modalImage: "images/mr2.png",
    href: "https://eburger939.github.io/Movie-Roulette/",
    gitHub: "https://github.com/eburger939/Movie-Roulette",
    title: "Movie Roulette"
  },
  {
    id: 3,
    mainImage: "/images/advblog1.png",
    description: "Adventurer's blog is a website meant for explorers!  Create posts on your greatest adventures, your plans for travel and more!  As a user you can create new blogs and edit or delete your previous posts!  Users can comment on each other's posts to communicate ideas and experiences!",
    technologies: "Technologies Used: HTML, CSS, Javascript, Node.js, Express.js, Bcrypt, Handlebars, MySQL (Sequelize)",
    modalImage: "images/adv-blog2.png",
    href: "https://adv-blog.herokuapp.com/",
    gitHub: "https://github.com/eburger939/adventurers-blog",
    title: "Adventurer's Blog"
  },
  {
    id: 4,
    mainImage: "/images/weather.png",
    description: "Interested in knowing the 5 day forecast in your favorite city?  Check out this weather dashboard!  Users can see the current weather, and weather for the next five days!  Search results save on the left for easier access!",
    technologies: "Technologies Used: HTML, CSS, Javascript, Open Weather Map API",
    modalImage: "images/weatherdash1.png",
    href: "https://eburger939.github.io/weather-dashboard/",
    gitHub: "https://github.com/eburger939/weather-dashboard",
    title: "Weather Dashboard"
  },
  {
    id: 5,
    mainImage: "/images/thwider1.png",
    description: "Manage and maintain all your pet records, medications, and vaccinations in one application!  PetRec is a tool for all pet owers to assist in organizing their pets medications, vaccinations, and health records.  A profile, or chart, can be create for every pet in the househould, and individualized based on that pets' health needs!  No more papers, binders, or forgetting when your pup's next monthly heartworm medication is due!",
    technologies: "Technologies Used: HTML, CSS, Javascript, Node.js, Express.js, Bcrypt, Handlebars, MySQL (Sequelize), Multer",
    modalImage: "https://drive.google.com/file/d/13g6wy2xKoHOteDt9ejRnUupzkiZb1blv/preview",
    href: "https://drive.google.com/file/d/13g6wy2xKoHOteDt9ejRnUupzkiZb1blv/preview",
    gitHub: "https://github.com/eburger939/team-profile-generator",
    title: "Team Generator"
  },
]


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects projs={projs}/>;
    }
    return <Contact />;
  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;