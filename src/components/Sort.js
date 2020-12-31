import React from "react";
// import UsersView from "./UsersView";

function Sort(props) {
    return (
        <div>
            <button onClick={props.sortEmployees}>Sort by Name</button>
        </div>
        
    )
}

export default Sort;