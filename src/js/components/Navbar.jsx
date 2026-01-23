import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <h1 className="navbar-brand" href="#">Start Bootstrap</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Home</a></li>
                            <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Services</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                            <ul className="dropdown-menu">
                                <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Home</a></li>
                                <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Services</a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;