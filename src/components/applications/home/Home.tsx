import './Home.css'
import Suggest from "../../widgets/suggestions/Suggest.tsx";

function Home() {
    return(
        <>
            <div className="home fb-d-column">
                <img className="five-start-icon" src="src/assets/icons/stars-wrapper.svg" alt="five-star"/>
                <h1>Отель
                    «Долина 960»</h1>
                <button className="home-book-button button-m-size">Быстрое бронировани</button>
            </div>
            <Suggest/>
        </>
    )
}

export default Home;