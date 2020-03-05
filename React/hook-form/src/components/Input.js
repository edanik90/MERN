import React from 'react';

const Input = ({name, type, value, handleChange, label}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
                className="form-control" 
                type={type} 
                name={name}
                value={value} 
                onChange={(e) => handleChange(e)}>
            </input>
        </div>
    )
}
export default Input;