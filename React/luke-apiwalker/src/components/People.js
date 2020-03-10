import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obiwan from '../img/obiwan.jpg';

const People = ({id}) => {
    const [person, setPerson] = useState({});
    const [error, setError] = useState("");
    const style = {
        fontWeight: 'bold'
    }
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/${id}`)
        // .then(res => console.log(res.data))
        .then(res => setPerson(res.data))
        .catch(err => {
            console.log(err);
            setError("These aren't the droids you're looking for")
        })
    }, [id])
    return(
            error === "" 
            ?<div className="col-6 mx-auto">
                <h1 style={style}>{person.name}</h1>
                <h4><span style={style}>Height:</span> {person.height}</h4>
                <h4><span style={style}>Weight:</span> {person.mass}</h4>
                <h4><span style={style}>Eye color:</span> {person.eye_color}</h4>
                <h4><span style={style}>Hair color:</span> {person.hair_color}</h4>
            </div>
            :<div className="col-6 mx-auto">
                <h1>{error}</h1>
                <img src={obiwan} alt="Obiwan uses the Force"/>
            </div>
    )
}

export default People;