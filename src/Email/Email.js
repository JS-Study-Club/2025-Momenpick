import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  listAll,
  getBlob,
  uploadBytes,
} from "firebase/storage";
import { db, storage } from "../firebase";
import "./Email.css";

const Email = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { previewImageUrl, frameSize } = location.state || {};
  const timeoutRef = useRef(null);

  // 타이머 초기화 함수
  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      navigate("/"); // 홈으로 이동
    }, 60000); // 1분 = 60000ms
  };

  // 컴포넌트 마운트 시 타이머 시작
  useEffect(() => {
    resetTimer();

    // 사용자 활동 감지 이벤트들
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    const resetTimerOnActivity = () => {
      resetTimer();
    };

    // 이벤트 리스너 등록
    events.forEach(event => {
      document.addEventListener(event, resetTimerOnActivity, true);
    });

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach(event => {
        document.removeEventListener(event, resetTimerOnActivity, true);
      });
    };
  }, [navigate]);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    resetTimer(); // 체크박스 클릭 시 타이머 리셋
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    resetTimer(); // 입력 시 타이머 리셋

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      setError("유효한 이메일 주소가 아닙니다");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!email) {
      setError("이메일을 입력해주세요");
      return;
    }

    if (error) return;

    // 제출 시 타이머 정리
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      await addDoc(collection(db, "emails"), {
        email,
        galleryChecked: isChecked,
        timestamp: serverTimestamp(),
      });

      if (isChecked) {
        const imagesRef = ref(storage, "images/");
        const listResult = await listAll(imagesRef);

        if (listResult.items.length === 0) {
          console.log("images 폴더에 사진이 없습니다.");
          navigate("/finish");
          return;
        }

        const sortedItems = listResult.items.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const latestImageRef = sortedItems[sortedItems.length - 1];
        const blob = await getBlob(latestImageRef);
        const galleryRef = ref(storage, `gallery/${latestImageRef.name}`);
        await uploadBytes(galleryRef, blob);
        console.log("갤러리에 사진 복사 완료");
      }

      navigate("/finish");
    } catch (err) {
      console.error("저장 중 오류 : ", err);
      setError("저장 중 오류가 발생했습니다.");
    }
  };

  const handleRetake = (e) => {
    e.stopPropagation();
    // 다시찍기 클릭 시 타이머 정리
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    navigate("/SelectFrame");
  };

  return (
    <div className="Email-container">
      <div className={`preview-container ${frameSize === 'size1' ? 'picture-size1' : 'picture-size2'}`}>
        {previewImageUrl && (
          <img src={previewImageUrl} alt="미리보기" className="picture-preview" />
        )}
      </div>
      <div className="Email-write">
        <div className="write-header">사진을 보내드릴 이메일을 작성해주세요</div>
        <div className="input-container">
          <input
            type="email"
            className="email-input"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmail}
          />
          {error && <div className="error-message">{error}</div>}
        </div>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
            className="checked-box"
          />
          갤러리에 전시하기
        </label>
        <div style={{ display: 'flex', gap: '50px' }}>
          <button className="checkBtn" onClick={handleSubmit}>
            확인
          </button>
          <button className="checkBtn" onClick={handleRetake}>
            다시찍기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;