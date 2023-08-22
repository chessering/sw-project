import $ from 'jquery';
window.$ = $;
// function TTS(){
//     function textToSpeech(_text) {
//         const url = "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDsQyaIDW8FI1i9uuF_NRWGMqaC5pfeyGI";
//         const data = {
//         input: {
//             text: _text,
//         },
//         voice: {
//             languageCode: 'ko-KR',
//             name: 'ko-KR-Neural2-c',
//             ssmlGender: 'MALE',
//         },
//         audioConfig: {
//             audioEncoding: "MP3",
//         },
//         };
//         const otherparam = {
//         headers: {
//             "content-type": "application/json; charset=UTF-8",
//         },
//         body: JSON.stringify(data),
//         method: "POST",
//         };
//         // 사운드 생성
//         fetch(url, otherparam)
//         .then((data) => {
//             return data.json();
//         })
//         .then((res) => {
//             console.log(res.audioContent); // base64
//         })
//         .catch((error) => {
//             console.log(error);
//         });
//     }
//     return (
//         <button onClick={()=>textToSpeech("hello")}>버튼</button>
//     );
// }
// export default TTS;

function TTS() {
    function testFun(){
        var input = document.getElementById("testInput");
        var text = input.textContent;
        var data = {    
                "voice":{
                    "languageCode":"ko-KR"
                },
                "input":{
                    "text": text
                },
                "audioConfig":{
                    "audioEncoding":"mp3"
                }
            }
        $.ajax({
            type:'POST',
            url: 'https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDsQyaIDW8FI1i9uuF_NRWGMqaC5pfeyGI',
            data: JSON.stringify(data),
            dataType: 'JSON',
             contentType: "application/json; charset=UTF-8",
            success: function(res) {
                $('#output').val(res.audioContent)
                var audioFile = new Audio();
                let audioBlob = base64ToBlob(res.audioContent, "mp3");
                audioFile.src = window.URL.createObjectURL(audioBlob);
                audioFile.playbackRate = 1; //재생속도
                audioFile.play();
            },
            error : function(request, status, error ) {
                alert("오류","오류가 발생하였습니다. 관리자에게 문의해주세요.");
            }
        });
    };
    
    function base64ToBlob(base64, fileType) {
          let typeHeader = "data:application/" + fileType + ";base64,"; // base64 헤더 파일 유형 정의
          let audioSrc = typeHeader + base64; 
          let arr = audioSrc.split(",");
          let array = arr[0].match(/:(.*?);/);
          let type;
          let mime = (array && array.length > 1 ? array[1] : type) || type;
          // url헤더 제거하고 btye로 변환
          let bytes = window.atob(arr[1]);
          // 예외를 처리하고 0보다 작은 ASCII 코드를 0보다 큰 값으로 변환
          let ab = new ArrayBuffer(bytes.length);
          // 뷰 생성(메모리에 직접): 8비트 부호 없는 정수, 길이 1바이트
          let ia = new Uint8Array(ab);
          for (let i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
          }
          return new Blob([ab], {
            type: mime
          });
    }

    return(
        <div>
            <body>
                <div id="testInput">살려줘</div>
                <button onClick={testFun}>음성으로 출력</button>
                <div id="output"></div>
            </body>
        </div>

    );
}
export default TTS;
