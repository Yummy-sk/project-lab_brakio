import one from '../static/img/one.svg';
import two from '../static/img/two.svg';
import infoWindow from './infoWindow';

const { kakao } = window;

export default function loadMultiMarker(lists, map) {
    const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 6,
    });

    const markers = lists.map(list => {
        const imgSize = new kakao.maps.Size(24, 35);

        const markerImage = new kakao.maps.MarkerImage(list.isCafe ? one : two, imgSize);

        const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(list.latitude, list.longitude),
            title: list.shop_name,
            image: markerImage,
        });

        // infoWindow(map, marker);
        return marker;
    });

    clusterer.addMarkers(markers);
}
