import React, { useState } from 'react';
import Input from './Input'

const UserForm = (props) => {
    const[ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPw: ""
    });
    const validation = {
        color: "red"
    }
    const handleFormChange = (e) => {
        console.log("Hello")
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="card col-5 mx-auto">
            <form className="col-7 mx-auto">
                {formState.firstName.length < 2 && formState.firstName.length != 0 ?
                    <span style={validation}>First Name must be at least 2 characters</span>: <span>&nbsp;</span>}
                <Input
                    label="First Name:"
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    handleChange={handleFormChange}
                />
                {formState.lastName.length < 2 && formState.lastName.length != 0?
                    <span style={validation}>Last Name must be at least 2 characters</span>: <span>&nbsp;</span>}
                <Input
                    label = "Last Name:"
                    name = "lastName"
                    type = "text"
                    value = {formState.lastName}
                    handleChange = {handleFormChange}
                />
                {formState.email.length < 5 && formState.email.length != 0?
                    <span style={validation}>Email must be at least 5 characters</span>: <span>&nbsp;</span>}
                <Input
                    label = "Email:"
                    name = "email"
                    type = "email"
                    value = {formState.email}
                    handleChange = {handleFormChange}
                />
                {formState.password.length < 8 && formState.password.length != 0?
                    <span style={validation}>Password must be at least 8 characters</span>: <span>&nbsp;</span>}
                <Input
                    label = "Password:"
                    name = "password"
                    type = "password"
                    value = {formState.password}
                    handleChange = {handleFormChange}
                />
                {formState.password != formState.confirmPw ?
                    <span style={validation}>Passwords do not match!</span>: <span>&nbsp;</span>}
                <Input
                    label = "Confirm password:"
                    name = "confirmPw"
                    type = "password"
                    value = {formState.confirmPw}
                    handleChange = {handleFormChange}
                />
            </form>
            <h2>Your form data: </h2>
            <p>First Name: {formState.firstName}</p>
            <p>Last Name: {formState.lastName}</p>
            <p>Email: {formState.email}</p>
            <p>Password: {formState.password}</p>
            <p>Confirm password: {formState.confirmPw}</p>
        </div>
    )
}

export default UserForm;