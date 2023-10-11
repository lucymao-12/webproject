import React from "react";
import NameForm from "../components/NameForm";
import Navbar from "../components/Navbar"

function Start(props) {
  return (
    <div>
      <Navbar></Navbar>
      <h2>There is a story about to begin. Enter your name and lets start!</h2>
      <NameForm callback={props.callback}></NameForm>
    </div>
  );
}
export default Start;
