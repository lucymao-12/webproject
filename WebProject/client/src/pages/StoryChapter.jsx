import React from "react";
import StorySection from "../components/storySection";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Choices from "../components/choiceButtons";
function StoryChapter() {
  const user = null;
  const { chapterNum } = useParams();
  console.log("username: ",user)
  return (
    <div>
      <Navbar></Navbar>
      <StorySection section={chapterNum} />
      <Choices section={chapterNum}></Choices>
    </div>
  );
}
export default StoryChapter;
