import PropTypes from "prop-types";
import Card from "./Card";

function Gallery({cards}) {

    const cardList = cards.map((card) =>
        <div key={card.id} className="col my-2">
            <Card title={card.title} text={card.text} buttonText={card.buttonText} />
		</div>
    )

    return (
        <div className="container-fluid text-center px-0">
            <div className="row align-items-start flex-md-row flex-column">
                {cardList}
            </div>
        </div>
    );
};

Gallery.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;