import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function Ending(props){
    const navigate = useNavigate();   
    function updateEnding(chapterNum) {
      //console.log("new user: ", props.user);
      if (chapterNum === '3') {
        console.log("hello");
        const updatedUser = {
          ...props.user,
          endingsCompleted: {
            ...props.user.endingsCompleted,
            "4": {
              ...props.user.endingsCompleted["4"],
              complete: true
            }
          }
          
        };
        console.log("new user: ", updatedUser);
        fetch("/updateEnding", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(updatedUser), // Send the updated user object as the request body
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Handle the response from the backend
            navigate("/home");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
      
    }
    return <div className="btn btn-secondary ending-button" onClick={updateEnding(props.section)}> Go back to start</div>
}
export default Ending;