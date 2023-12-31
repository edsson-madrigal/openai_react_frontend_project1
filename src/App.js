import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Stream from "./screens/Stream";
import Summarizer from "./screens/Summarizer";
import Weather from "./screens/Weather";
import Personality from "./screens/Personality";
import Similarity from "./screens/Similarity";
import Books from "./screens/Books";
import PDFChat from "./screens/PDFChat";
import ImageGeneration from "./screens/ImageGeneration";
import ImageEdition from "./screens/ImageEdition";
import ImageVariations from "./screens/ImageVariations";
import TranslateAudio from "./screens/TranslateAudio";

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
          <Route path="/books" element={<Books />}></Route>
          <Route path="/PDFchat" element={<PDFChat />}></Route>
          <Route path="/image-generation" element={<ImageGeneration />}></Route>
          <Route path="/image-edition" element={<ImageEdition />}></Route>
          <Route path="/image-variations" element={<ImageVariations />}></Route>
          <Route path="/translate-audio" element={<TranslateAudio />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
