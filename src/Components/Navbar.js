import React from 'react'
import { a } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-light navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" to="/">
                        <h3>Junction</h3>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-a btn active" aria-current="page" to="/">
                                    Sign In
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a btn active" aria-current="page" to="/general">
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a btn active" aria-current="page" to="/general">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a btn active" aria-current="page" to="/general">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar