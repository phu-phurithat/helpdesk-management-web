import { Routes, Route, Links } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import "./App.css";
function App() {
  return (
    <main className="main-content h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </main>
  );
}

export default App;
