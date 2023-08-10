import React from "react";
import "../components/photo.css";

function Photo() {
  return (
    <div className="Photo">
      <button className="CameraBtn">
        사진촬영 <br />
        카메라로 이동
      </button>
      <br />
      <button className="GalleryBtn">
        갤러리에서
        <br />
        사진 추가
      </button>
    </div>
  );
}

export default Photo;
