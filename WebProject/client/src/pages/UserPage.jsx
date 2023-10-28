import React from "react";
import Navbar from "../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import NameForm from "../components/NameForm";
function Home(props) {
  if (Object.keys(props.user).length === 0){
    return <>
    <Navigate to="/" replace/>
    </>
  }else{
    return (
      <>
        <Navbar></Navbar>
        <h2 className="greeting"> Hello, {props.user.name} </h2>
        <div className="Endings"><h3>Endings complted:</h3>
        <ul>
          <li>{props.user.endingsCompleted[0].name}: {props.user.endingsCompleted[0].complete ? 'Complete' : 'Not Complete'}</li>
          <li>{props.user.endingsCompleted[1].name}: {props.user.endingsCompleted[1].complete ? 'Complete' : 'Not Complete'}</li>
          <li>{props.user.endingsCompleted[2].name}: {props.user.endingsCompleted[2].complete ? 'Complete' : 'Not Complete'}</li>
          <li>{props.user.endingsCompleted[3].name}: {props.user.endingsCompleted[3].complete ? 'Complete' : 'Not Complete'}</li>
        </ul></div>
        
      </>
    );
  }
  
}
export default Home;
