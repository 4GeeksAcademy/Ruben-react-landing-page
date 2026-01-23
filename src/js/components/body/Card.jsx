import React from "react";

function Card(props) {
    return (
        <div className="card" style={{height: "30rem"}}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt="Card Image" />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{props.text}</p>
            </div>
            <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;