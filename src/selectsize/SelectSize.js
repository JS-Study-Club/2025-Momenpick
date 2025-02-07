import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SelectSize.css";

function SelectSize() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(30);
    const { design } = useParams(); // URL에서 design 값 가져오기

    console.log("현재 선택된 직업:", design); // 값이 정상적으로 들어오는지 확인

    // 직업별 이미지 설정
    const images = {
        designer: ["/images/ex_designer1.png", "/images/ex_designer2.png"],
        developer: ["/images/ex_developer1.png", "/images/ex_developer2.png"],
    };

    console.log("불러올 이미지 배열:", images[design]); // 이미지 배열 확인

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate("/");
        }, 30000);

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [navigate]);

    const handleImageClick = () => {
        navigate("/");
    };

    return (
        <div className="selectSize-background">
            <div className="Select-header">
                <img
                    src="/images/backBtn.png"
                    alt="Back"
                    className="backBtn"
                    onClick={() => navigate("/SelectFrame")}
                />
                <div id="title">프레임 크기를 선택해주세요.</div>
                <div className="countdown-timer">{countdown}</div>
            </div>

            <img
                alt="세로형"
                className="size1"
                src={images[design] ? images[design][0] : ""}
                style={{ cursor: "pointer" }}
                onClick={handleImageClick}
            />
            <img
                alt="가로형"
                className="size2"
                src={images[design] ? images[design][1] : ""}
                style={{ cursor: "pointer" }}
                onClick={handleImageClick}
            />
        </div>
    );
}

export default SelectSize;
