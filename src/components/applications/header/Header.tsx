import "./Header.css"
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <div className="header">
            <div className="logo_section fb-d-row">
                <img src='src/assets/images/logo1.png' alt='First logo'/>
                <img src='src/assets/images/logo2.png' alt='Second logo'/>
            </div>
            <div className="nav_section fb-d-row">
                <NavLink to="/" className="nav_link fw-regular ">Главная</NavLink>
                <NavLink to="#" className="nav_link fw-regular ">Номера</NavLink>
                <NavLink to="#" className="nav_link fw-regular ">Развлечения</NavLink>
                <NavLink to="#" className="nav_link fw-regular ">Трансфер</NavLink>
                <NavLink to="#" className="nav_link fw-regular ">Контакты</NavLink>
            </div>
            <div className="touch_section fb-d-row">
                <img src='src/assets/icons/vk.svg' alt='vkontakte icon'/>
                <img src='src/assets/icons/telegram.svg' alt='telegram icon'/>
                <button className="header_button">Груповые заезды</button>
            </div>
        </div>
    )
}

export default Header;