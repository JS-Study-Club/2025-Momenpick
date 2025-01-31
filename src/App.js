import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Main from "./main/Main";
import SelectFrame from "./selectframe/SelectFrame";


function App() {

  return (
    <Router>
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />  {/* 잘못된 경로일 경우 Main으로 리다이렉트 */}
          <Route path="/selectFrame" element={<SelectFrame /> } />
      </Routes>
    </Router>
  );
}

export default App;
