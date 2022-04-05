import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume"
import Stockdashboard from "./pages/Stockdashboard";
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Stockdashboard" element={<Stockdashboard />} />
          <Route path="Resume" element={<Resume />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));