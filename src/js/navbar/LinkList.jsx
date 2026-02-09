function LinkList ({menuLinks}){
    
    const list= menuLinks.map((name,linkIndex) => 
        <li key={linkIndex} className={linkIndex === 0 ? "nav-item active" : "nav-item"}  aria-current={linkIndex === 0 ? "page" : ""} >
            <a className="nav-link" href="#">{name}</a>
        </li>
    )
    return(
        <>
            {list}
        </>
    )
}
export default LinkList;