import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = () => {
      navigate("/SelectFrame");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    <div className="home-background"></div>
  );
};

export default Home;
