import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {

  
  return (
    <footer className="App-footer">
      <h5 className="footer-thankyou">Thank you for visiting Deep Wild South - Southern Belize adventures!</h5>
        <div className="flexboxHorizontal">
          <Link to="/about" className="App-link">About Us</Link>
          <Link to="/terms" className="App-link">Terms & Conditions</Link>
          <Link to="/devAbout" className="App-link">Developer Info</Link>
        </div>
    </footer>
  );
}

export default Footer;