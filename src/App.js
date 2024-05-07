import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
