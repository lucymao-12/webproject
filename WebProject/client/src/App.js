import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/UserStart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/:storyChapter"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
