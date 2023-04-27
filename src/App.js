import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // -we are passing the currentPage from state abd the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // -- Here we are calling the renderPage method which will return the component */}
      {renderPage()}
    </div>
  );
}
