import "./App.css"
import { Routes, Route } from "react-router-dom";
import Dominik from "./pages/Dominik";
import Linfeng from "./pages/Linfeng"
import Kevin from "./pages/Kevin"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/linfeng" element={<Linfeng /> } />
        <Route path="/dominik" element={<Dominik />} />
        <Route path="/kevin" element={<Kevin />} />
      </Routes>

    </div>
  )
}

export default App
