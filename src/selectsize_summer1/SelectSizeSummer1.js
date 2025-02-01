import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeSummer1.css";

const SelectSizeSummer1 = () => {
 const navigate = useNavigate();

 const [countdown, setCountdown] = useState(30); // 30초 카운트다운
   
     useEffect(() => {
       const timer = setInterval(() => {
         setCountdown((prev) => prev - 1);
       }, 1000);
   
       const timeout = setTimeout(() => {
         navigate("/"); // 30초 후 홈 화면 이동
       }, 30000);
   
       return () => {
         clearInterval(timer); // 카운트다운 정리
         clearTimeout(timeout); // 네비게이션 타이머 정리
       };
     }, [navigate]);
   
     const handleImageClick = () => {
       navigate("/"); // 사진촬영 페이지로 이동
     };

  return (
    <div className="selectSize-background">
      <div className="Select-header"> 
        <img
          src="images/backBtn.png"
          alt="Back"
          className="backBtn"
          onClick={() => navigate("/Summer")}
        />
        <div id="title">프레임 크기를 선택해주세요.</div>
        <div className="countdown-timer">{countdown}</div>
      </div>
      <img
      src="images/ex_summer1-1.png"
      alt="summer1세로예시"
      className="summer1-1"
      width={414}
      height={614}
      style={{ cursor: "pointer" }}
      onClick={handleImageClick}
      />
      <img
      src="images/ex_summer1-2.png"
      alt="summer1가로예시"
      className="summer1-2"
      width={598}
      height={614}
      style={{ cursor: "pointer" }}
      onClick={handleImageClick}
      />
    </div>
  );
};

export default SelectSizeSummer1;
