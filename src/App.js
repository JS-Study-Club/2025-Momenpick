import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from "./main/Main";
import SelectFrame from "./selectframe/SelectFrame";
import SelectSizeDesigner from "./selectsize_designer/SelectSizeDesigner";
import SelectSizeDeveloper from "./selectsize_developer/SelectSizeDeveloper";
import SelectFrameTeacher from "./selectframe_teacher/SelectFrameTeacher";
import SelectFrameSummer from "./selectframe_summer/SelectFrameSummer";
import SelectSizeSummer1 from "./selectsize_summer1/SelectSizeSummer1";
import SelectSizeSummer2 from "./selectsize_summer2/SelectSizeSummer2";
import SelectSizeSummer3 from "./selectsize_summer3/SelectSizeSummer3";
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
          <Route path="/Designer" element={<SelectSizeDesigner /> } />
          <Route path="/Developer" element={<SelectSizeDeveloper /> } />
          <Route path="/Teacher" element={<SelectFrameTeacher /> } />
          <Route path="/Summer" element={<SelectFrameSummer /> } />
          <Route path="/Summer1" element={<SelectSizeSummer1 /> } />
          <Route path="/Summer2" element={<SelectSizeSummer2 /> } />
          <Route path="/Summer3" element={<SelectSizeSummer3 /> } />
          <Route path="/Gallery" element={<Gallery /> } />
          <Route path="/Finish" element={<Finish /> } />
          <Route path="/Email" element={<Email /> } />

      </Routes>
    </Router>
  );
}

export default App;
