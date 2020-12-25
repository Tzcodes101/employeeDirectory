import React from "react";

function Sort(props) {
    return (
        <div>
            <button onClick={props.sortEmployees}>Filter by Name</button>
        </div>
    )
}

export default Sort;