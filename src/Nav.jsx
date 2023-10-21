import React from "react";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/challenge-one">Challenge One</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/challenge-two">Challenge Two</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/challenge-three">Challenge Three</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/image-gallery">Image Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/use-state">useState</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo-list">ToDo List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo-list-toggle">Show Data Based On Toggle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">Props</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user-props">User Props</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form">Form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form-two">Form Two</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/form-three">Form Three</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/name">Name</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user-context">UseContext</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
}
export default Nav;