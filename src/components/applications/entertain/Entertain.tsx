import './Entertain.css'


function Entertain() {
    return(
        <div className="entertain fb-d-row">
            <div className="entertain-col-1 fb-d-column">
                <h2>Развлечения и спорт</h2>
                <p>В центре курорта Красная Поляна, где находится отель, имеется аквапарк,
                    торговые и развлекательные центры, салоны красоты и другие объекты курортной инфраструктуры</p>
                <div className="entertain-text-section fb-d-column">
                    <h3>Спортивный зал</h3>
                    <p>Спортивный зал отеля оснащен современными тренажерами для кардиотренировок, силовых нагрузок, ковриками для занятий йогой.
                        Из панорамных окон открывается красивый вид.</p>
                </div>
                <div className="entertain-text-section fb-d-column">
                    <h3>Прокат</h3>
                    <p>В службе проката можно арендовать горный или городской велосипед, сигвеи и самокаты, квадроциклы и электромопеды.
                        Прогулки на них доставят вам большое удовольствие, прокат предоставляет в пользование только новые, проверенные модели.</p>
                </div>
                <div className="entertain-text-section fb-d-column">
                    <h3>Горнолыжные трассы</h3>
                    <p>
                        Горнолыжные трассы курорта Красная Поляна имеют различный уровень сложности,
                        благодаря чему туристы могут выбрать трассу, которая соответствует их уровню подготовки.
                        Новички могут воспользоваться курсом по обучению горнолыжному спорту.
                    </p>
                </div>
            </div>
            <div className="entertain-col-2 fb-d-column">
                <div className="entertain-collage">
                    <img src="src/assets/images/collage-img.png" alt="collage-image" className="entertain-collage-item"/>
                    <img src="src/assets/images/collage-img-2.png" alt="collage-image" className="entertain-collage-item"/>
                    <img src="src/assets/images/collage-img-3.png" alt="collage-image" className="entertain-collage-item"/>
                    <img src="src/assets/images/collage-img-4.png" alt="collage-image" className="entertain-collage-item"/>
                </div>
            </div>
        </div>
    )
}

export default Entertain