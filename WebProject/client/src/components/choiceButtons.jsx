import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Choices(props) {
  /**
   * props.left - text in the button
   * props.right - text in the button
   */
  let left;
  let right;
  function handlePress(){
    
  }
  switch (props.section) {
    case '0':
      left = "Touch the Stone";
      right = "Let go, go back";
      break;
    default:
      left = "WHAT";
      right = "THE FUCK";
  }
  return (
    <div className="choices">
      <button className="btn btn-secondary">{left}</button>
      <button className="btn btn-secondary">{right}</button>
    </div>
  );
}
export default Choices;
