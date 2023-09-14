import React from "react";
import {Link} from "react-router-dom";
import NameForm from "../components/NameForm";

function Start(props){
    return <div>
        <h2>There is a story about to begin. Enter your name and lets start!</h2>
        <NameForm></NameForm>
    </div>
}
export default Start;