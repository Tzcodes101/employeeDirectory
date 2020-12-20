import React from "react";

function FormInput(props) {
    console.log(props);
    //form to search
    return (
        <div>
            <form className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                />
                <button onClick={props.handleFormSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default FormInput;