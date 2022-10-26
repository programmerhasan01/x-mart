import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <h3 className="text-center">&copy; X-MART | E-COMMERCE</h3>
        <div className="icons">
          <div className="d-flex justify-content-center fs-2 my-3">
            <FaFacebook style={{ cursor: "pointer" }} />
            <FaInstagram style={{ margin: "0 10px", cursor: "pointer" }} />
            <FaYoutube style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
