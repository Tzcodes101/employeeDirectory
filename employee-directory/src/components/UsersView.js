import React from "react";
import RenderEmployees from "./RenderEmployees";

function UsersView(props) {
    //render employees
    return (
    <div>
        <RenderEmployees employees={props.employees} />
    </div>
    )
}

export default UsersView;