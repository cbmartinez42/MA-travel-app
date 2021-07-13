import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {

  
  return (
    <footer className="App-footer">
      <h5>Thank you for visiting Do This!</h5>
        <div className="flexboxHorizontal">
          <Link to="/about" className="App-link">About Us</Link>
          <Link to="/terms" className="App-link">Terms & Conditions</Link>
        </div>
    </footer>
  );
}

export default Footer;