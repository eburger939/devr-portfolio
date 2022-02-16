import React from "react";

const Footer = () => {
  return (
<div className="footer">
      <div className="footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
      </div>
    </div>
  );
}

export default Footer;