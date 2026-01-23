import React from "react";

function Footer(){
    return(
        <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center" style={{height: "5rem"}}>
            <p className="m-0">Copyright @ your Website {(new Date().getFullYear())}</p>
        </div>
    );
};

export default Footer;