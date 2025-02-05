import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Email.css";

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");  
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // 이메일 형식 검사 정규식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setError("유효한 이메일 주소가 아닙니다");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!email) {
      setError("이메일을 입력해주세요");
      return;
    }

    if (error) {
      return;
    }

    // 조건을 만족하면 /finish 화면으로 이동
    navigate("/finish");
  };

  return (
    <div className="Email-background">
      <div className="Email-write">
        <div className="write-header">사진을 보내드릴 이메일을 작성해주세요</div>
        <div className="input-container">
          <input 
            type="text" 
            className="email-input" 
            placeholder="이메일을 입력하세요" 
            value={email} 
            onChange={handleEmail} 
          />
          {error && <div className="error-message">{error}</div>}
        </div>
        <label className="checkbox-container">
          <input type="checkbox" checked={isChecked} onChange={handleChecked} className="checked-box"/> 갤러리에 전시하기
        </label>
        <button className="checkBtn" onClick={handleSubmit}>확인</button>
      </div>
    </div>
  );
};

export default Email;
