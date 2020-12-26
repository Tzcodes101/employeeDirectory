import React from "react";
// import UsersView from "./UsersView";

function Sort(props) {
    return (
        <div>
            <button onClick={props.sortEmployees}>Filter by Name</button>
        </div>
        
    )
}

export default Sort;