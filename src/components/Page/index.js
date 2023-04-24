import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';


export default function Page({ currentPage }) {

    const renderPage = () => {
      switch (currentPage.name) {
        case 'about me':
          return <About />;
        case 'portfolio':
          return <Portfolio />;
        case 'contact':
          return <Contact />;
        case 'resume':
          return <Resume />;
        default:
          return <About />;
      }
    };  
  
  return (
    <section>
      <h2>{(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>    
  );
}
