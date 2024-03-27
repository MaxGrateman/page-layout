import "./Rooms.css"
import {useParams} from 'react-router-dom';

function Rooms() {
    const {id, label } = useParams();

    return(
        <div className="rooms fb-x-center fb-d-row">
            <div className="rooms-col-1 fb-d-column">
                <h2>Добро пожаловать в отель «Долина 960»</h2>
                <p className="rooms-paragraph">Бутик-отель расположен на Поляне 960, верхнем уровне Курорта Красная Поляна.
                    Небольшой номерной фонд в 48 просторных номеров создает ощущение уединенности и в то же время отвечает запросам молодежной аудитории, которая ценит стиль и активный отдых.</p>
                <p className="rooms-paragraph">Ресторан отеля подает завтраки по системе «шведский стол» и примечателен интерьерным решением в стиле поп-арт.
                    Рестобар Liechtenstein временно не работает, в отеле работает только Room Service.</p>
                <p className="rooms-paragraph">Cпа-комплекс отеля предлагает гостям посетить открытый подогреваемым инфинити-бассейн с панорамным видом на горы, крытый бассейн.
                    Также в спа-центре отеля Долина 960, представлена термальная зона с финской сауной, паровой комнатой и турецким хаммамом, крытым бассейном с шезлонгами для отдыха.</p>
                <button className="rooms-book-button button-m-size">Быстрое бронирование</button>
            </div>
            <div className="rooms-col-2 fb-d-column">
                <h3>{label}</h3>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default Rooms