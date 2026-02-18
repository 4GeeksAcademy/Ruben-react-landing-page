import PropTypes from "prop-types";
import LinkList from "./LinkList"

function Navbar({menuLinks, brand}) {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="fw-bold fs-4">{brand}</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <LinkList menuLinks={menuLinks} />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    brand: PropTypes.string.isRequired
};

export default Navbar;