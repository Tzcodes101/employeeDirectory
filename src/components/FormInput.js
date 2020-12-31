import React from "react";

function FormInput(props) {
    console.log(props);
    //form to search
    return (
        <div>
            <form className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={event => props.handleInputChange(event)}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="search"
                />
                {/* <button onClick={event => props.handleFormSubmit(event)} className="btn btn-dark mt-3">
                    Search
                </button> */}
            </form>
        </div>
    );
}

export default FormInput;