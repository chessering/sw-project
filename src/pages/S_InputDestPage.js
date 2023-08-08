//speech로 도착지 입력받기
import "../components/button.js";
import "../components/page.css";
import { useState, useEffect} from 'react';
import { useSpeechRecognition } from "react-speech-kit";

const OutputSpeech = () => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      // 음성인식 결과가 value에 저장
      setValue(result);
    }
  });
  useEffect(() => {
    // 안내 음성이 끝났을 때 인식
    if (!listening) {
      // 말하는 도중이 아닌 말이 끝난 뒤(말 사이 텀이 생기면) 출력
      listen({ interimResults: false });
    }
  }, [listening]);
  
  return (
    // 대답 출력
    <div className="InputPage">
      <div className="btn">
        ddd
      </div>
          <div 

            placeholder = "도착지 입력"
            >{value}</div>
            {listening}
    </div>
  );
};
export default OutputSpeech;


