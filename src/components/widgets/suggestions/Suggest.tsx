import Card from "../cards/Card.tsx";
import "./Suggest.css"
import {Link} from "react-router-dom";

function Suggest() {
    const rooms = [
        {
            id: 1,
            img: ('src/assets/images/appartment-card-1.png'),
            label: 'Премиум Кинг',
            price: '4.000',
            text: 'В номере: большая двуспальная кровать/2 односпальные кровати, рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi, кондиционер, сейф, чайно-кофейная станция.' +
                ' В ванной комнате: подогреваемый пол, душевая кабина, полотенца, косметические средства, халаты, тапочки.'
        },
        {
            id: 2,
            img: ('src/assets/images/appartment-card-2.png'),
            label: 'Эксклюзивный Кинг',
            price: '5.000',
            text: 'В номере: большая двуспальная кровать/2 односпальные кровати, рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi, кондиционер, сейф, чайно-кофейная станция.' +
                ' В ванной комнате: подогреваемый пол, душевая кабина, полотенца, косметические средства, халаты, тапочки.'
        },
        {
            id: 3,
            img: ('src/assets/images/appartment-card-3.png'),
            label: 'Star Кинг',
            price: '8.000',
            text: 'В номере: большая двуспальная кровать/2 односпальные кровати, рабочее место, кресло, встроенный шкаф, LCD телевизор, Wi-Fi, кондиционер, сейф, чайно-кофейная станция.' +
                ' В ванной комнате: подогреваемый пол, душевая кабина, полотенца, косметические средства, халаты, тапочки.'
        }
    ]

    return(
        <div className="suggest-container">
            <h2 className="fw-medium">Лучшие предложения</h2>
            <div className="suggest-cards fb-d-row">
                {rooms.map(room => (
                    <Card key={room.id} height={168} width={340}  padding={20} gap={24} flexDirection={'row'} justifyContent={'space-between'}>
                        <img src={room.img} width={128} height={128} alt="appartment-iamge-1" style={{ flex: "0 0 auto" }}/>
                        <div className="card-info">
                            <p className="card-label">{room.label}</p>
                            <h3 className="card-price">₽ {room.price}</h3>
                            <Link to={`/room/${room.id}`}>
                                <button className="card-button button-s-size">Подробнее</button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Suggest