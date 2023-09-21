import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Stream from "./screens/Stream";
import Summarizer from "./screens/Summarizer";

import "./styles/bootstrap-custom.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stream" element={<Stream />}></Route>
          <Route path="/summarizer" element={<Summarizer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
