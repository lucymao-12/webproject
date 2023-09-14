import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import Start from "./pages/UserStart";

function App() {
  return (
    <div>
      <switch>
        <Routes>
          <Route path="/" Component={Start}></Route>
          <Route path="/:storyChapter"></Route>
        </Routes>
      </switch>
    </div>
  );
}

export default App;
