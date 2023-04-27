import React from 'react';
import Resume from '../../assets/resume.pdf'

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div style={{"background-color": "beige"}}>
      <div className="text-center m-3">
        <p>
          <hr
            style={{ display: "inline-block", width: "100px", margin: "6px 30px" }}
          />
          <b>Denny Allen </b>
          <hr
            style={{ display: "inline-block", width: "100px", margin: "6px 30px" }}
          />
        </p>
      </div>
      <div className="">
        <div className="col col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href={Resume}
                target="_blank"
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

}
