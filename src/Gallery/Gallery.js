import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  const navigate = useNavigate();

    return (
      <div className="gallery-background">
        <div className="gallery-header">
          <img
            src="images/backBtn.png"
            alt="Back"
            className="backBtn"
            onClick={() => navigate("/")}
          />
          <img
            src="images/galleryLogo.png"
            alt="GalleryLogo"
            className="galleryLogo"
          />
        </div>
      </div>
    );
  };
  
  export default Gallery;
  