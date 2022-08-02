import { Routes, Route } from "react-router-dom";
import Dominik from "./pages/Dominik";
import './App.css';
import Kevin from "./pages/Kevin"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/dominik" element={<Dominik />} />
        <Route path="/kevin" element={<Kevin />} />
      </Routes>
    </div>
  );
}

export default App;
