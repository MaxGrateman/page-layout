import "./Header.css"
import Nav from "../navigation/Nav.tsx";

function Header() {
    return(
        <div className="header">
            <div className="logo-section fb-d-row">
                <img src='src/assets/images/logo1.png' alt='First logo'/>
                <img src='src/assets/images/logo2.png' alt='Second logo'/>
            </div>
            <Nav />
            <div className="touch-section fb-d-row">
                <img src='src/assets/icons/vk.svg' alt='vkontakte icon'/>
                <img src='src/assets/icons/telegram.svg' alt='telegram icon'/>
                <button className="header-button button-s-size">Груповые заезды</button>
            </div>
        </div>
    )
}

export default Header;