// import React, { useEffect } from 'react';
// import "../components/button.js";
// import "../components/page.css";

// const MapComponent = () => {
//     const initTmap = () => {
// // 1. 지도 띄우기
//         map = new Tmapv2.Map("map_div", {
//             center: new Tmapv2.LatLng(37.56520450, 126.98702028),
//             width : "70%",
//             height : "400px",
//             zoom : 17,
//             zoomControl : true,
//             scrollwheel : true

//         });

//         // 2. POI 통합 검색 API 요청
//         $("#btn_select").click(function(){

//             var searchKeyword = $('#searchKeyword').val();
//             var headers = {};
//             headers["appKey"]="g4mnXE29Io7KhmmGpvAZn3ycCRIFKRQx7BEaAY6P";

//             $.ajax({
//                 method:"GET",
//                 headers : headers,
//                 url:"https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result",
//                 async:false,
//                 data:{
//                     "searchKeyword" : searchKeyword,
//                     "resCoordType" : "EPSG3857",
//                     "reqCoordType" : "WGS84GEO",
//                     "count" : 10
//                 },
//                 success:function(response){
//                     var resultpoisData = response.searchPoiInfo.pois.poi;

//                     // 기존 마커, 팝업 제거
//                     if(markerArr.length > 0){
//                         for(var i in markerArr){
//                             markerArr[i].setMap(null);
//                         }
//                     }
//                     var innerHtml ="";	// Search Reulsts 결과값 노출 위한 변수
//                     var positionBounds = new Tmapv2.LatLngBounds();		//맵에 결과물 확인 하기 위한 LatLngBounds객체 생성

//                     for(var k in resultpoisData){

//                         var noorLat = Number(resultpoisData[k].noorLat);
//                         var noorLon = Number(resultpoisData[k].noorLon);
//                         var name = resultpoisData[k].name;

//                         var pointCng = new Tmapv2.Point(noorLon, noorLat);
//                         var projectionCng = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(pointCng);

//                         var lat = projectionCng._lat;
//                         var lon = projectionCng._lng;

//                         var markerPosition = new Tmapv2.LatLng(lat, lon);

//                         marker = new Tmapv2.Marker({
//                             position : markerPosition,
//                             //icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png",
//                             icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_" + k + ".png",
//                             iconSize : new Tmapv2.Size(24, 38),
//                             title : name,
//                             map:map
//                         });

//                         innerHtml += "<li><img src='http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_" + k + ".png' style='vertical-align:middle;'/><span>"+name+"</span></li>";

//                         markerArr.push(marker);
//                         positionBounds.extend(markerPosition);	// LatLngBounds의 객체 확장
//                     }

//                     $("#searchResult").html(innerHtml);	//searchResult 결과값 노출
//                     map.panToBounds(positionBounds);	// 확장된 bounds의 중심으로 이동시키기
//                     map.zoomOut();

//                 },
//                 error:function(request,status,error){
//                     console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//                 }
//             });
//         });
//     };

//     useEffect(() => {
//       initTmap();
//     }, []);

//     return (
//       <div>
//         <div>
//           <input type="text" className="text_custom" id="searchKeyword" name="searchKeyword" defaultValue="서울시" />
//           <button id="btn_select">적용하기</button>
//         </div>
//         <div>
//           <div style={{ width: '30%', float: 'left' }}>
//             <div className="title"><strong>Search</strong> Results</div>
//             <div className="rst_wrap">
//               <div className="rst mCustomScrollbar">
//                 <ul id="searchResult" name="searchResult">
//                   <li>검색결과</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div id="map_div" className="map_wrap" style={{ float: 'left' }}></div>
//         </div>
//       </div>
//     );
// };

// export default MapComponent;
