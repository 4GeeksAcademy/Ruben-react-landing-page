import PropTypes from "prop-types";

function Card({text, title, image}) {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="Card Image" />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    image: PropTypes.string
};

Card.defaultProps = {
    title: "Card title",
    image: "https://placehold.co/600x400"
};

export default Card;