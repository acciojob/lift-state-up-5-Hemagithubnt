
import React from "react";
export default function Form(props){
    return(
        <div className="form">
            <form>
                <label htmlFor="name">UserName:</label>
                <input type="text" placeholder="UserName" id="name"/> <br/>
                <label htmlFor="pass">Password:</label>
                <input type="text" placeholder="Password" id="pass"/><br/>
                <button  onClick={props.onLogin}>Login</button>
            </form>
        </div>
    )
}