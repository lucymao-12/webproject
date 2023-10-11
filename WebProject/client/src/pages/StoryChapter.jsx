import React from "react";
import StorySection from "../components/storySection";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Choices from "../components/choiceButtons";
function StoryChapter(props) {
  const { chapterNum } = useParams();
  console.log("hat",props.user)
  return (
    <div>
      <Navbar></Navbar>
      <StorySection section={chapterNum} />
      <Choices section={chapterNum}></Choices>
    </div>
  );
}
export default StoryChapter;
