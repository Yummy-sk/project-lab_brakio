import loadMultiMarker from './loadMultiMarker';

const { kakao } = window;

export default function mapScript(lists) {
    const container = document.getElementById('map');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 10,
    };
    const map = new kakao.maps.Map(container, options);

    loadMultiMarker(lists, map);
}
