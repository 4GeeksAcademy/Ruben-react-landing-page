import PropTypes from "prop-types";

function Jumbotron({title, text, buttonText}) {
    return (
        <div className="p-5 mb-4 bg-body-secondary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{title}</h1>
                <p className="col-md-8 fs-4">{text}</p>
                <button className="btn btn-primary btn-lg" type="button">{buttonText}</button>
            </div>
        </div>
    );
};

Jumbotron.propTypes = {
    title : PropTypes.string,
    text : PropTypes.string,
    buttonText : PropTypes.string
};

Jumbotron.defaultProps = {
    title : "A Warm Welcome!",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis vitae quas, doloribus eos suscipit inventore excepturi perferendis",
    buttonText : "Call to action!"
};

export default Jumbotron;