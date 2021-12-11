/*global kakao*/
import React, { useEffect } from 'react';

const Map = () => {
  // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
  //   var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.48955192726942, 126.91397340946133),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(map);
    // 카테고리로 은행을 검색합니다
    ps.categorySearch('CE7', placesSearchCB, { useMapCenter: true });
    // ps.categorySearch('CE7', placesSearchCB, { useMapBounds: true });

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    // data = result array, status = 응답코드
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
        }
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        title: place.place_name,
      });

      displayInfoWindow(marker, place);

      // 마커에 클릭이벤트를 등록합니다
      //   kakao.maps.event.addListener(marker, 'click', function () {
      //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      //     infowindow.setContent(
      //       '<div style="padding:5px;font-size:12px;">' +
      //         place.place_name +
      //         '</div>',
      //     );
      //     infowindow.open(map, marker);
      //   });
    }

    function displayInfoWindow(marker, place) {
      var infowindow = new kakao.maps.InfoWindow({
        position: place.LatLng,
        content:
          '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          '</div>',
      });
      infowindow.open(map, marker);
    }

    // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'dragend', function () {
      // 지도 중심좌표를 얻어옵니다
      var latlng = map.getCenter();

      // 지도 이동이 완료되면 지도 중심을 기준으로, 카페를 재 검색합니다.
      ps.categorySearch('CE7', placesSearchCB, { useMapCenter: true });
    });
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '900px' }}></div>
    </div>
  );
};

export default Map;
