import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam";
import "./PictureSize1.css";

const PictureSize1 = () => {
    const webcamRef = useRef(null);
    const [showModal, setShowModal] = useState(true);
    const [countdown, setCountdown] = useState(10);
    const [photoCount, setPhotoCount] = useState(0);
    const [capturedImages, setCapturedImages] = useState([]);
    const { frame } = useParams(); // URL에서 frame 값 가져오기
    const navigate = useNavigate(); 


    // 프레임 이미지 (사진 테두리 역할)
    const frameImages = {
        designer: "/images/designer1.png",
        developer: "/images/developer1.png",
        summer1: "/images/summer1-1.png",
        summer2: "/images/summer2-1.png",
        summer3: "/images/summer3-1.png",
        teacher1: "/images/white1.png",
        teacher2: "/images/ham1.png",
        teacher3: "/images/lee1.png",
    };

    // 선생님 포즈 이미지 (웹캠 위에서 보이는 사진)
    const poseImages = {
        teacher1: [
            "/images/white1-1.png",
            "/images/white1-2.png",
            "/images/white1-3.png",
            "/images/white1-4.png",
        ],
        teacher2: [
            "/images/ham1-1.png",
            "/images/ham1-2.png",
            "/images/ham1-3.png",
            "/images/ham1-4.png",
        ],
        teacher3: [
            "/images/lee1-1.png",
            "/images/lee1-2.png",
            "/images/lee1-3.png",
            "/images/lee1-4.png",
        ],
    };


    const takePhoto = useCallback(() => {
        if (photoCount < 4) {
            capturePhoto();
            setCountdown(10);
            setPhotoCount(prevCount => prevCount + 1);
        }
    }, [photoCount]);

    useEffect(() => {
        if (showModal) {
            const modalTimer = setTimeout(() => setShowModal(false), 3000);
            return () => clearTimeout(modalTimer);
        }

        if (countdown > 0 && photoCount < 4) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0 && photoCount < 4) {
            takePhoto();
        }
    }, [countdown, photoCount, showModal, takePhoto]);

    const capturePhoto = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                setCapturedImages(prevImages => [...prevImages, imageSrc]);
            }
        }
    };

    useEffect(() => {
        if (photoCount === 4) {
            const moveTimer = setTimeout(() => {
                navigate('/email');
            }, 1000);
            return () => clearTimeout(moveTimer);
        }
    }, [photoCount, navigate]);


    return (
        <div className="PictureSize1-container">
            {showModal && <div className="PictureSize1-dark-overlay"></div>}
            {showModal && (
                <div className="PictureSize1-modal">
                    <div className="PictureSize1-modal-content">
                        <img 
                            className="PictureSize1-picIcon"
                            src="/images/pictureIcon.png"
                            alt="사진 아이콘"
                        />
                        <h2 className="PictureSize1-text1">잠시 후 촬영이 시작됩니다</h2>
                        <p className="PictureSize1-text2">
                            촬영 횟수는 <span className="PictureSize1-text3">총 4회</span> 입니다.
                        </p>
                    </div>
                </div>
            )}

            <div className="PictureSize1-Picture-background">

                <div className="PictureSize1-photoZone">
                {photoCount < 4 ? (
                    <p className="PictureSize1-Photo-countdown">{countdown}</p>
                ) : (
                    <p className="PictureSize1-Photo-countdown" style={{ visibility: "hidden" }}>0</p>
                )}
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="PictureSize1-photo"
                        mirrored={true}
                    />
                    {frame.startsWith("teacher") && photoCount < 4 && (
                        <img
                            src={poseImages[frame][photoCount]}
                            alt={`${frame} 포즈 ${photoCount + 1}`}
                            className="PictureSize1-teacherPose"
                        />
                    )}

                </div>
                
                <div className="PictureSize1-resultZone">
                    <img
                        src={frameImages[frame] || ""}
                        alt={`${frame} 프레임`}
                        className="PictureSize1-frame"
                    />
                    {capturedImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Captured ${index + 1}`} 
                            className={`PictureSize1-photo${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PictureSize1;
