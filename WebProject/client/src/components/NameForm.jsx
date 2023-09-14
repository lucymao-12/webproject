import React from "react";

function NameForm(){
    return <div>
        <form action="/" method="POST"> {/*this will be in the start page so thats the root*/}
            <input type="text" id="name" name="name"></input>
            <label> Enter your name</label>
            <button type="submit"></button>
        </form>
    </div>
}

export default NameForm;