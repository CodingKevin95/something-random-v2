import { Routes, Route } from "react-router-dom";
import Dominik from "./pages/Dominik";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dominik" element={<Dominik />} />
      </Routes>
    </div>
  );
}

export default App;
