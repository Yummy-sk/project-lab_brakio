export default function infoWindow(map, marker) {
    const { kakao } = window;

    var content =
        `<div class="wrap">` +
        `    <div class="info">` +
        `        <div class="title">` +
        `            카카오 스페이스닷원` +
        `            <div class="close" title="닫기"></div>` +
        `        </div>` +
        `        <div class="body">` +
        `            <div class="img">` +
        `                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">` +
        `           </div>` +
        `            <div class="desc">` +
        `                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>` +
        `                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>` +
        `                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>` +
        `            </div>` +
        `        </div>` +
        `    </div>` +
        `</div>`;

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
    });

    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    // kakao.maps.event.addListener(marker, 'click', () => overlay.setMap(map));

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
}
