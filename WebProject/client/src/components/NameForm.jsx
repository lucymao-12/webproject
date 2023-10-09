import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NameForm() {
  //const [formData, setFormData] = useState();
  const [backEndData, setBackEndData] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value } = event.target;
    setBackEndData({name: value})
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(formData);
    //console.log(backEndData)
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backEndData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    navigate("/chapters/0");
  };
  return (
    <div>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        {/*this will be in the start page so thats the root*/}
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        ></input>
        <label> Enter your name</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NameForm;
