import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectSizeSummer3.css";

const SelectSizeSummer3 = () => {
 const navigate = useNavigate();
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
      </div>
      <img
      src="images/ex_summer3-1.png"
      alt="summer3세로예시"
      className="summer3-1"
      width={414}
      height={614}
      />
      <img
      src="images/ex_summer3-2.png"
      alt="summer3가로예시"
      className="summer3-2"
      width={598}
      height={614}
      />
    </div>
  );
};

export default SelectSizeSummer3;
