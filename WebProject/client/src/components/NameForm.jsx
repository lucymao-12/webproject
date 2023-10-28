import "bootstrap/dist/css/bootstrap.css";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

function NameForm(props) {
  //const [formData, setFormData] = useState();
  const [backEndData, setBackEndData] = useState({});
  const [response, setResponse] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value } = event.target;
    setBackEndData({ name: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/chapters/0");
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
      .then((data) => props.callback(data)
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}


export default NameForm;

