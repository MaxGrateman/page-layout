import {Link} from "react-router-dom";

function Nav() {
    return(
        <div className="nav-section fb-d-row">
            <Link to="/" className="nav-link fw-regular">Главная</Link>
            <Link to="/rooms" className="nav-link fw-regular">Номера</Link>
            <Link to="" className="nav-link fw-regular">Развлечения</Link>
            <Link to="" className="nav-link fw-regular">Трансфер</Link>
            <Link to="/contacts" className="nav-link fw-regular">Контакты</Link>
        </div>
    )
}

export default Nav;