import React from 'react';

export default function Home() {
  return (
    <header className="masthead text-white custom-header">
    <div className="d-flex justify-content-between custom-title">
        <div className="container d-flex flex-column">
             <img className="masthead-avatar mb-0" src="./images/portss.png" alt="..." />
          
           </div>
    <div className="container d-flex flex-column hello-container">
        <h1 className="masthead-heading align-items-baseline text-uppercase">hi i'm emily.</h1>
        <p className="masthead-subheading font-weight-light mb-0">Full Stack Software Developer</p>
   
    </div>

    </div>
</header>
  );
}
