import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/UserStart";
import StoryChapter from "./pages/StoryChapter";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const handle_callback = (data) => {
    setUser(data.name);
    console.log(typeof data.name);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start callback={handle_callback} />}></Route>
        <Route
          path="/chapters/:chapterNum"
          element={<StoryChapter user={user} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
