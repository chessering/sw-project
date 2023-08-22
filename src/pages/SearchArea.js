import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import $ from 'jquery';
import InputCheck from "./InputCheck";
window.$ = $;
/*global Tmapv2 */

const StyledInput = styled.input`
    border: none;
    border-radius: 23px;
    background: #E1FF68;
    line-height: 5;
    outline: none;
    text-indent: 1em;
    margin-left: 5%;
    color: rgba(0, 5, 24, 0.30);

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

function SearchArea() {
  // const {onCopy} = props;
  const [map, setMap] = useState(null);
  const [markerArr, setMarkerArr] = useState([]);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [inputData, setInputData] = useState({
  //   searchKeyword: ''
  // });
  const list = [];

  // const onSubmit = () => {
  //   const _inputData = {
  //     searchKeyword: {searchKeyword}
  //   }
  //   onCopy(_inputData);
  //   navigate('/StartCheck');
  //   setSearchKeyword('');
  // }

  useEffect(() => {
    initTmap();
  }, []);

  const initTmap = () => {
    setMap(
      new Tmapv2.Map("map_div", {
        center: new Tmapv2.LatLng(37.5652045, 126.98702028),
      })
    );
  };

  const handleSearchClick = () => {
    const headers = {};

    $("#btn_select").click(function(){
		
		var searchKeyword = $('#searchKeyword').val();
		var headers = {}; 
		headers["appKey"]="42A56BlnlX8kJ6FHES50m5vsbOXz77jO8rSeP3Sq";

		$.ajax({
			method:"GET",
			headers : headers,
			url:"https://apis.openapi.sk.com/tmap/pois?version=1&format=json&callback=result",
			async:false,
			data:{
				"searchKeyword" : searchKeyword,
				"resCoordType" : "EPSG3857",
				"reqCoordType" : "WGS84GEO",
				"count" : 10
			},
			success:function(response){
				var resultpoisData = response.searchPoiInfo.pois.poi;
				
				// 기존 마커, 팝업 제거
				if(markerArr.length > 0){
					for(var i in markerArr){
						markerArr[i].setMap(null);
					}
				}
				var innerHtml ="";	// Search Reulsts 결과값 노출 위한 변수
				var positionBounds = new Tmapv2.LatLngBounds();		//맵에 결과물 확인 하기 위한 LatLngBounds객체 생성
				
				for(var k in resultpoisData){
					
					var noorLat = Number(resultpoisData[k].noorLat);
					var noorLon = Number(resultpoisData[k].noorLon);
					var name = resultpoisData[k].name;
          for (var p in resultpoisData[k].newAddressList.newAddress) {
            var address = resultpoisData[k].newAddressList.newAddress[p].fullAddressRoad;
          }
					
					var pointCng = new Tmapv2.Point(noorLon, noorLat);
					var projectionCng = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(pointCng);
					
					var lat = projectionCng._lat;
					var lon = projectionCng._lng;
					
					var markerPosition = new Tmapv2.LatLng(lat, lon);
					
					var marker = new Tmapv2.Marker({
				 		position : markerPosition,
				 		//icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_a.png",
				 		// icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_" + k + ".png",
						// iconSize : new Tmapv2.Size(24, 38),
            fulladdress : address,
						title : name,
						map:map
				 	});
					innerHtml += "<li><span style={{margin:'30px', fontSize:'35px'}}>"+name+"</span></li>";
          innerHtml += "<li><span style={{margin:'30px', fontSize:'25px'}}>"+address+"</span></li>"
					markerArr.push(marker);
					positionBounds.extend(markerPosition);	// LatLngBounds의 객체 확장
				}

				
				$("#searchResult").html(innerHtml);	//searchResult 결과값 노출
				map.panToBounds(positionBounds);	// 확장된 bounds의 중심으로 이동시키기
				map.zoomOut();
				
			},
			error:function(request,status,error){
				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
        });
  });
}

  return (
    <div className="basePage" style={{marginLeft:"10%", marginTop:"20%"}}>
        <StyledInput
        type="text"
        className="text_custom"
        id="searchKeyword"
        name="searchKeyword"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button id="btn_select" onClick={handleSearchClick}>
            검색
        </button>


      <div>
        {/* 검색 결과 영역 */}
        <div style={{ width: "100%", float: "left"}}>
          <ul id="searchResult" name="searchResult" onClick={() => navigate('/InputCheck')}>
          </ul>
        </div>

        {/* 지도 영역 */}
        <div id="map_div" style={{
            float:"left",
        }}></div>
      </div>
    </div>
  );
}

export default SearchArea;