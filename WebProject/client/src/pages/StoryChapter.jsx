import React from "react";
import StorySection from "../components/storySection";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Choices from "../components/choiceButtons";
import Ending from "../components/EndingButton";
import { useEffect, useState } from "react";
function StoryChapter() {
  const { chapterNum } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // use effect means this runs on mount, so this will run when the page loads without an explicit call
    getUserInfo();
  }, []);

  function getUserInfo() {
    fetch("/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("story", data);
        setUser(data); // Save the user data in the state
      });
  }
  return (
    <div>
      <Navbar></Navbar>
      <StorySection section={chapterNum} />
      {chapterNum !== "3" && (
        <Choices section={chapterNum} user={user}></Choices>
      )}
      {chapterNum === "3" && <Ending section={chapterNum} user={user}></Ending>}
    </div>
  );
}
export default StoryChapter;
