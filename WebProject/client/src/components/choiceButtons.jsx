import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Choices(props) {
  const navigate = useNavigate();
  /**
   * props.left - text in the button
   * props.right - text in the button
   */
  let left;
  let right;
  function handlePress(event){
    switch (props.section) {
      case '0':
        if(event.target.className.split(' ').find((name) => name === "left")){
          navigate("/chapters/1")
        }else{
          navigate("/chapters/2")
        }
        break;
      case '1':
        if(event.target.className.split(' ').find((name) => name === "left")){
          navigate("/chapters/-1")
        }else{
          navigate("/chapters/-1")
        }
        break;
      case '2':
        if(event.target.className.split(' ').find((name) => name === "left")){
          navigate("/chapters/-1")
        }else{
          navigate("/chapters/3")
        }
        break;
      case '3':
        if(event.target.className.split(' ').find((name) => name === "left")){
          navigate("/chapters/0")
        }else{
          navigate("/chapters/-1")
        }
        break;
      default:
        if(event.target.className.split(' ').find((name) => name === "left")){
          navigate("/chapters/1")
        }else{
          navigate("/chapters/2")
        }
      }
  }
  switch (props.section) {
    case '0':
      left = "Bring your friends";
      right = "Go alone";
      break;
    case '1':
      left = "Go alone";
      right = "Go with Sylvie";
      break;
    case '2':
      left = "Keep walking";
      right = "Go back";
      break;
    case '3':
      left = "Go to start";
    default:
      left = "WHAT";
      right = "THE FUCK";
  }
  return (
    <div className="choices">
      {props.section !== '3' && (
        <>
          <button className="btn btn-secondary left" onClick={handlePress}>{left}</button>
          <button className="btn btn-secondary right" onClick={handlePress}>{right}</button>
        </>
      )}
      {props.section === '3' && (
        <button className="btn btn-secondary" onClick={handlePress}>{left}</button>
      )}
    </div>
  );
}
export default Choices;
