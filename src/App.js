import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from "./main/Main";
import SelectFrame from "./selectframe/SelectFrame";
import SelectSize from "./selectsize/SelectSize";
import SelectFrameTeacher from "./selectframe_teacher/SelectFrameTeacher";
import SelectFrameSummer from "./selectframe_summer/SelectFrameSummer";
import Gallery from "./Gallery/Gallery";
import Finish from "./Finish/Finish";
import Email from "./Email/Email";

function App() {

  return (
    <Router>
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />  {/* 잘못된 경로일 경우 Main으로 리다이렉트 */}
          <Route path="/selectFrame" element={<SelectFrame /> } />
          <Route path="/selectSize/:design" element={<SelectSize />} />
          <Route path="/Teacher" element={<SelectFrameTeacher /> } />
          <Route path="/Summer" element={<SelectFrameSummer /> } />
          <Route path="/Gallery" element={<Gallery /> } />
          <Route path="/Finish" element={<Finish /> } />
          <Route path="/Email" element={<Email /> } />

      </Routes>
    </Router>
  );
}

export default App;
