import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import NameForm from "../components/NameForm";
function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //console.log('hello??') // use effect means this runs on mount, so this will run when the page loads without an explicit call
    getUserInfo();
  }, []);

  function getUserInfo() {
    //console.log("hello??")
    fetch("/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data); // Save the user data in the state
        //console.log(user)
      });

    //console.log("fetched user: ", user)
  }

  return (
    <>
      <Navbar></Navbar>
      {user && (
        <>
          <h2 className="greeting"> Hello, {user.name} </h2>
          <div className="Endings">
            <h3>Endings completed:</h3>
            <ul>
              {Object.entries(user.endingsCompleted).map(([key, ending]) => (
                <li key={key}>
                  {ending.name}: {ending.complete ? "Complete" : "Not Complete"}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
export default Home;
/**
 * 
 */
