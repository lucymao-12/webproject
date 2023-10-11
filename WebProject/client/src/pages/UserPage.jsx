import React from "react";
import Navbar from "../components/Navbar";
function Home(props) {
  return (
    <>
      <Navbar></Navbar>
      <p>{props.user.name}</p>
    </>
  );
}
export default Home
