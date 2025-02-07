import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectFrameSummer.css";

const SelectFrameSummer = () => {
 const navigate = useNavigate();

 const goToResult = (design) => {
  navigate(`/selectsize/${design}`); // 선택한 직업을 URL에 전달
};

  return (
    <div className="selectFrame-background">
      <div className="Select-header">
        <img
            src="images/backBtn.png"
            alt="Back"
            className="backBtn"
            onClick={() => navigate("/SelectFrame")}
          />
      </div>
      <img
        className="summer1"
        src="/images/summer1.png" 
        alt="여름1"
        width={432}
        height={664}
        onClick={() => goToResult("summer1")}
        style={{ cursor: "pointer" }}
      />
      <img
          className="summer2"
          src="/images/summer2.png" 
          alt="여름2"
          width={432}
          height={664}
          onClick={() => goToResult("summer2")}
          style={{ cursor: "pointer" }}
      />
      <img
          className="summer3"
          src="/images/summer3.png" 
          alt="여름3"
          width={432}
          height={664}
          onClick={() => goToResult("summer3")}
          style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default SelectFrameSummer;
