import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Stream from "./screens/Stream";
import Summarizer from "./screens/Summarizer";
import Weather from "./screens/Weather";
import Personality from "./screens/Personality";
import Similarity from "./screens/Similarity";

import "./styles/bootstrap-custom.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stream" element={<Stream />}></Route>
          <Route path="/summarizer" element={<Summarizer />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/personality" element={<Personality />}></Route>
          <Route path="/similarity" element={<Similarity />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
