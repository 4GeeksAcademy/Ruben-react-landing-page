import PropTypes from "prop-types";

function LinkList ({menuLinks}){
    
    const list= menuLinks.map((object) => 
        <li key={object.id} className="nav-item" >
            <a className="nav-link" href={object.href}>{object.name}</a>
        </li>
    )
    return(
        <>{list}</>
    )
}

LinkList.propTypes = {
    menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LinkList;