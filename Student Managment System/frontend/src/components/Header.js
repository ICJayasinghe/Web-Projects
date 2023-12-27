import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className="nav-link">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/enroll" className="nav-link">Enroll</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/edit" className="nav-link">Edit</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/details" className="nav-link">Details</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
