import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function YMap() {
    const coordinates = [43.682027, 40.216573];

    return(
        <>
            <YMaps>
                <div>
                    <Map defaultState={{ center: [43.682027, 40.216573], zoom: 10 }} width={635} height={450}>
                        <Placemark geometry={coordinates}/>
                    </Map>
                </div>
            </YMaps>
        </>
    );
}

export default YMap