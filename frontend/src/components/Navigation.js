import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function navMenu() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        {/* <Link to="/homepage">Home</Link> */}
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/renovation">Renovation</Link>
        {/* <Link to="/create">Add</Link> */}
    </nav>
  );
}

export default navMenu;
