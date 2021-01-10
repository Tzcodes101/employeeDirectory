import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";

const FormInput = () => {
    const context = useContext(DataAreaContext)
    //form to search
    return (
        <div>
            <form className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={event => context.handleInputChange(event)}
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