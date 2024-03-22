import Card from "../cards/Card.tsx";
import "./Suggest.css"

function Suggest() {
    return(
        <div className="suggest-container">
            <h2 className="fw-medium">Лучшие предложения</h2>
            <div className="suggest-cards fb-d-row">
                <Card height={168} width={340}  padding={20} gap={24} flexDirection={'row'} justifyContent={'space-between'}>
                    <img width={128} height={128} src="src/assets/images/appartment-card-1.png" alt="appartment-iamge-1" style={{ flex: "0 0 auto" }}/>
                    <div className="card-info">
                        <p className="card-label">Премиум Кинг</p>
                        <h3 className="card-price">₽ 4 000</h3>
                        <button className="card-button button-s-size">Подробнее</button>
                    </div>
                </Card>

                <Card height={168} width={340} padding={20} gap={24} flexDirection={'row'} justifyContent={'space-between'}>
                    <img width={128} height={128} src="src/assets/images/appartment-card-2.png" alt="appartment-iamge-2"/>
                    <div className="card-info">
                        <p className="card-label">Эксклюзивный Кинг</p>
                        <h3 className="card-price">₽ 5 000</h3>
                        <button className="card-button button-s-size">Подробнее</button>
                    </div>
                </Card>

                <Card height={168} width={340} padding={20} gap={24} flexDirection={'row'} justifyContent={'space-between'}>
                    <img width={128} height={128} src="src/assets/images/appartment-card-3.png" alt="appartment-iamge-3"/>
                    <div className="card-info">
                        <p className="card-label">Star Кинг</p>
                        <h3 className="card-price">₽ 8 000</h3>
                        <button className="card-button button-s-size">Подробнее</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Suggest