import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch-year=:id" element={<Home />} />
        <Route path="/launch-success=:successLaunchId" element={<Home />} />
        <Route path="/land-success=:successLandId" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
