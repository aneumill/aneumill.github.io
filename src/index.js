import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume"
import Stockdashboard from "./pages/Stockdashboard";
import './index.css'

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="Stockdashboard" element={<Stockdashboard />} />
          <Route path="Resume" element={<Resume />}> </Route>
      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

ReactDOM.render(<App />, document.getElementById("root"));