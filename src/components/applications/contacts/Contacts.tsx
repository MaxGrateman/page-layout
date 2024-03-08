import "./Contacts.css";

function Contacts() {
    return(
        <div className="contacts fb-d-row">
            <div className="contacts-col-1 fb-d-column">
                <h1 className="fw-bold">Контакты</h1>
                <div className="contacts-telegram">
                    <img src="src/assets/icons/telegram.svg" alt="telegram-icon" style={{marginRight: "10px"}}/>
                    <p style={{margin: "0px"}}>Telegram канал «Лучшие горнолыжные курорты России»</p>
                </div>
                <div className="contacts-touch fb-d-column">
                    <h2>Свяжитесь с нами:</h2>
                    <ul>
                        <li>
                            <span className="triangle"></span>
                            8 (861) 205-07-32 (бронирование в Москве)
                        </li>
                        <li>
                            <span className="triangle"></span>
                            8 (499) 322-14-78 (корпоративный отдел)
                        </li>
                    </ul>
                </div>
                <div className="contacts-tour">
                    <h2>Адрес туристической компании:</h2>
                    <ul>
                        <li>
                            <span className="triangle"></span>
                            г. Москва, ул. Бауманская, д.6, стр.2, Бизнес-центр Виктория Плаза, 8 этаж, 804 офис.
                        </li>
                    </ul>
                </div>
                <div className="contacts-address fb-d-column">
                    <h2>Адрес:</h2>
                    <ul>
                        <li>
                            <span className="triangle"></span>
                            Россия, г. Сочи, Курорт Красная Поляна 960, ул. Горная, д. 2.
                        </li>
                    </ul>
                </div>
                <p className="contacts-note">*Обращаем Ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях результаты расчетов не являются публичной офертой,
                    определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.
                    За окончательным расчетом обращайтесь к нашим менеджерам.
                    Данный ресурс не является официальным сайтом отеля.</p>
            </div>
            <div className="contacts-col-2">

            </div>
        </div>
    )
}

export default Contacts;