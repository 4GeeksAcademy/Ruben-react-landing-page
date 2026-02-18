import PropTypes from "prop-types";
import Jumbotron from "./Jumbotron";
import Gallery from "./Gallery";

function Body({cards}){
    return (
        <div className="container mx-auto p-4">
            <Jumbotron title="Ruben React Landing Pagee" buttonText="Vamos a ello" />
            <Gallery cards={cards}/>
        </div>
    );
};

Body.propTypes = {
    text: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Body;