import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obiwan from '../img/obiwan.jpg';

const Species = ({id}) => {
    const [species, setSpecies] = useState({});
    const [error, setError] = useState("");
    const style = {
        fontWeight: 'bold'
    }
    useEffect(() => {
        axios.get(`https://swapi.co/api/species/${id}`)
        // .then(res => console.log(res.data))
        .then(res => setSpecies(res.data))
        .catch(err => {
            console.log(err);
            setError("These aren't the droids you're looking for")
        })
    }, [id])
    return(
        error === ""
        ?<div className="col-6 mx-auto">
            <h1 style={style}>{species.name}</h1>
            <h4><span style={style}>Classification:</span> {species.classification}</h4>
            <h4><span style={style}>Designation:</span> {species.designation}</h4>
            <h4><span style={style}>Average height:</span> {species.average_height} cm</h4>
            <h4><span style={style}>Language:</span> {species.language}</h4>
        </div>
        :<div className="col-6 mx-auto">
            <h1>{error}</h1>
            <img src={obiwan} alt="Obiwan uses the Force"/>
        </div>
    )
}

export default Species;