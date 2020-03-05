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
                <Input
                    label="First Name:"
                    name="firstName"
                    type="text"
                    value={formState.firstName}
                    handleChange={handleFormChange}
                />
                <Input
                    label = "Last Name:"
                    name = "lastName"
                    type = "text"
                    value = {formState.lastName}
                    handleChange = {handleFormChange}
                />
                <Input
                    label = "Email:"
                    name = "email"
                    type = "email"
                    value = {formState.email}
                    handleChange = {handleFormChange}
                />
                <Input
                    label = "Password:"
                    name = "password"
                    type = "password"
                    value = {formState.password}
                    handleChange = {handleFormChange}
                />
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