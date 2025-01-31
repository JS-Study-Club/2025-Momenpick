import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectFrameSummer.css";

const SelectFrameSummer = () => {
 const navigate = useNavigate();
  return (
    <div className="select-background">
      <img
          src="images/backBtn.png"
          alt="Back"
          className="backBtn"
          onClick={() => navigate("/SelectFrame")}
        />
    </div>
  );
};

export default SelectFrameSummer;
