import React from "react";

function FormInput(props) {
    console.log(props);
    //form to search
    return (
        <div>
            <form className="form">
                <input
                    value={props.firstName}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    value={props.lastName}
                    type="text"
                    placeholder="Last Name"
                />
                <button onClick={props.handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default FormInput;