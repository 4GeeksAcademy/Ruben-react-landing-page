import React from "react";

import Jumbotron from "./Jumbotron";
import Gallery from "./Gallery";

function Body(){
    return (
        <div className="container mx-auto p-4">
            <Jumbotron />
            <Gallery />
        </div>
    );
};

export default Body;