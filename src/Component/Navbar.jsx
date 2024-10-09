// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><h4>Education Manage</h4></a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/student">Students</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/teacher">Teachers</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
