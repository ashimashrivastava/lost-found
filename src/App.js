import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Home from './Home.js';
import Inventory from './Inventory.js';
import WWULogo from './images/western_logo_horizontal.svg';

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    // @todo: footer
    <Router>
      <div>        
        <Navbar bg="primary" variant="dark" fixed="top">
          <Navbar.Brand href="https://wwu.edu">
            <img
              src={ WWULogo }
              height="40"
              className="d-inline-block align-top"
              alt="WWU logo"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about/">About</Nav.Link>
            <Nav.Link href="/inventory/">Inventory</Nav.Link>
            <div className="nav-right">
              <Nav.Link href="https://calendar.wwu.edu/">Calendar</Nav.Link>
              <Nav.Link href="https://www.wwu.edu/directory/">Directory</Nav.Link>
              <Nav.Link href="https://www.wwu.edu/campusmaps/">Map</Nav.Link>
              <Nav.Link href="https://mywestern.wwu.edu/">myWestern</Nav.Link>
            </div>
          </Nav>
        </Navbar>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/inventory/" component={Inventory} />
      </div>
    </Router>
  );
}

export default App;
