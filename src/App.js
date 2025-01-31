import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from "./main/Main";
import SelectFrame from "./selectframe/SelectFrame";
import SelectSizeDesigner from "./selectsize_designer/SelectSizeDesigner";
import SelectSizeDeveloper from "./selectsize_developer/SelectSizeDeveloper";
import SelectSizeTeacher from "./selectsize_teacher/SelectSizeTeacher";
import SelectFrameSummer from "./selectframe_summer/SelectFrameSummer";

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
          <Route path="/Teacher" element={<SelectSizeTeacher /> } />
          <Route path="/Summer" element={<SelectFrameSummer /> } />

      </Routes>
    </Router>
  );
}

export default App;
