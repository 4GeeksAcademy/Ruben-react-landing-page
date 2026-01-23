import React from "react";

import Card from "./Card";

function Gallery() {
    return (
        <div class="container-fluid text-center px-0">
            <div class="row align-items-start flex-md-row flex-column">
                <div class="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus" />
                </div>
                <div class="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                </div>
                <div class="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus" />
                </div>
                <div class="col my-2">
                    <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                </div>
            </div>
        </div>
    );
};

export default Gallery;