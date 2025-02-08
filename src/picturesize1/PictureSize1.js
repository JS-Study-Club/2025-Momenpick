import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import "./PictureSize1.css";

const PictureSize1 = () => {
    const webcamRef = useRef(null);
    const [showModal, setShowModal] = useState(true);
    const [countdown, setCountdown] = useState(10);
    const [photoCount, setPhotoCount] = useState(0);
    const [capturedImages, setCapturedImages] = useState([]);

    useEffect(() => {
        if (showModal) {
            const modalTimer = setTimeout(() => setShowModal(false), 3000);
            return () => clearTimeout(modalTimer);
        }

        if (countdown > 0 && photoCount < 4) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0 && photoCount < 4) {
            capturePhoto();
            setCountdown(10);
            setPhotoCount(prevCount => prevCount + 1);
        }
    }, [countdown, photoCount, showModal]);

    const capturePhoto = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                setCapturedImages(prevImages => [...prevImages, imageSrc]);
            }
        }
    };

    return (
        <div className="container">
            {showModal && <div className="dark-overlay"></div>}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <img 
                            className="picIcon"
                            src="./images/pictureIcon.png"
                            alt="사진 아이콘"
                        />
                        <h2 className="text1">잠시 후 촬영이 시작됩니다</h2>
                        <p className="text2">
                            촬영 횟수는 <span className="text3">총 4회</span> 입니다.
                        </p>
                    </div>
                </div>
            )}

            <div className="Picture-background">
                <div className="photoZone">
                    {photoCount < 4 ? (
                        <p className="Photo-countdown">{countdown}</p>
                    ) : (
                        <p className="Photo-finishText">촬영 완료!</p>
                    )}

                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="photo"
                        mirrored={false}
                    />
                </div>
                
                <div className="resultZone">
                    <img
                        src="./images/designer2.png"
                        alt="디자이너 가로"
                        className="frame"
                    />
                    {capturedImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Captured ${index + 1}`} 
                            className={`takenPhoto photo${index + 1}`} // 각 사진에 동적 클래스 추가
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PictureSize1;
