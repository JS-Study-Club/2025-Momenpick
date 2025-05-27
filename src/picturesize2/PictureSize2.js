import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam";
import "./PictureSize2.css";

const PictureSize2 = () => {
    const webcamRef = useRef(null);
    const [showModal, setShowModal] = useState(true);
    const [countdown, setCountdown] = useState(10);
    const [photoCount, setPhotoCount] = useState(0);
    const [capturedImages, setCapturedImages] = useState([]);
    const { frame } = useParams(); // URL에서 frame 값 가져오기

    const images = {
        designer: ["/images/designer2.png"],
        developer: ["/images/developer2.png"],
        summer1: ["/images/summer1-2.png"],
        summer2: ["/images/summer2-2.png"],
        summer3: ["/images/summer3-2.png"],
        teacher1: ["/images/white2.png"],
        teacher2: ["/images/ham2.png"],
        teacher3: ["/images/lee2.png"],
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

    return (
        <div className="PictureSize2-container">
            {showModal && <div className="PictureSize2-dark-overlay"></div>}
            {showModal && (
                <div className="PictureSize2-modal">
                    <div className="PictureSize2-modal-content">
                        <img 
                            className="PictureSize2-picIcon"
                            src="/images/pictureIcon.png"
                            alt="사진 아이콘"
                        />
                        <h2 className="PictureSize2-text1">잠시 후 촬영이 시작됩니다</h2>
                        <p className="PictureSize2-text2">
                            촬영 횟수는 <span className="PictureSize2-text3">총 4회</span> 입니다.
                        </p>
                    </div>
                </div>
            )}

            <div className="PictureSize2-Picture-background">
                <div className="PictureSize2-photoZone">
                    {photoCount < 4 ? (
                        <p className="PictureSize2-Photo-countdown">{countdown}</p>
                    ) : (
                        <p className="PictureSize2-Photo-countdown" style={{ visibility: "hidden" }}>0</p>
                    )}

                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="PictureSize2-photo"
                        mirrored={true}
                    />
                    <img
                        className="PictureSize2-shutterBtn"
                        src="/images/shutterBtn.png"
                        alt="셔터버튼"
                        onClick={takePhoto}
                        disabled={photoCount>=4}
                        style={{display: photoCount<4 ? "block" : "none"}}
                    />
                    <p
                        className="PictureSize2-shutterdescription"
                        style={{display: photoCount<4 ? "block" : "none"}}
                    >클릭하여 촬영하기</p>
                </div>
                
                <div className="PictureSize2-resultZone">
                    <img
                        src={images[frame] ? images[frame][0] : ""}
                        alt={`${frame} 두꺼운 프레임`}
                        className="PictureSize2-frame"
                    />
                    {capturedImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Captured ${index + 1}`} 
                            className={`PictureSize2-photo${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PictureSize2;
