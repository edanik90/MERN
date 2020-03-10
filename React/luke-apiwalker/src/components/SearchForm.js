import React, { useState } from 'react';
import { navigate } from '@reach/router';

const SearchForm = () => {
    const [resource, setResource] = useState("");
    const [id, setId] = useState("");
    
    const handleChange = (e) => {
        e.target.name === "resource" ? setResource(e.target.value) : setId(e.target.value)
    }
    
    const onSubmitHandle = (e) => {
        e.preventDefault();
        navigate(`/${resource}/${id}`);
        // setResource("");
        setId("");
    }
    return(
        <div className="col-6 mx-auto">
            <form className="col-6 mx-auto" onSubmit={(e) => onSubmitHandle(e)}>
                <div className="form-group">
                    <label>Search for: </label>
                    <select name="resource" onChange={(e) => handleChange(e)} className="form-control">
                        <option value="">--select resource--</option>
                        <option value="films">films</option>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        <option value="species">species</option>
                        <option value="starship">starships</option>
                        <option value="vehicles">vehicles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>ID: </label>
                    <input name="id" onChange={(e) => handleChange(e)} type="text" value={id} className="form-control" />
                </div>
                <input className="btn btn-primary" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchForm;