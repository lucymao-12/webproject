import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/UserStart";
import StoryChapter from "./pages/StoryChapter";
import { useEffect, useState } from "react";
/** 
function App() {
  const [backEndData, setBackEndData] = useState([{}]);
  useEffect(() => {
    fetch("/test", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
}*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/chapters/:chapterNum" element={<StoryChapter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
