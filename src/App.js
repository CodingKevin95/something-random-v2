import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dominik from "./pages/Dominik";
import Linfeng from "./pages/Linfeng"
import Kevin from "./pages/Kevin"
import John from "./pages/John";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/linfeng" element={<Linfeng />} />
        <Route path="/dominik" element={<Dominik />} />
        <Route path="/kevin" element={<Kevin />} />
        <Route path ="/john" element={<John />} />
      </Routes>

    </div>
  );
}

export default App;
