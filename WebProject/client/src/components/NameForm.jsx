import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NameForm(props) {
  //const [formData, setFormData] = useState();
  const [backEndData, setBackEndData] = useState({});
  const [response, setResponse] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBackEndData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(backEndData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const choice = document.activeElement.name; //picking which button was pressed

    let path = "/";
    if (choice === "login") {
      path = "/login";
    } else {
      console.log(choice);
      path = "/register";
    }

    navigate("/chapters/0");
    fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backEndData),
    })
      .then((response) => response.json())
      .then(
        (data) => props.callback(data)
        //console.log(data)
      );
  };
  return (
    <form action="/" method="POST" onSubmit={handleSubmit}>
      <div className="name-form">
        {/*this will be in the start page so thats the root*/}
        <input
          className="form-control form-control-lg"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        ></input>
        <input
          className="form-control form-control-lg"
          type="text"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
        ></input>
        <button type="submit" className="btn btn-primary" name="login">
          Login
        </button>
        <button type="submit" className="btn btn-primary" name="register">
          Register
        </button>
      </div>
    </form>
  );
}

export default NameForm;
