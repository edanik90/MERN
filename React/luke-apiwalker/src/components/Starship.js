import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obiwan from '../img/obiwan.jpg';

const Starship = ({id}) => {
    const [starship, setStarship] = useState({});
    const [error, setError] = useState("");
    const style = {
        fontWeight: 'bold'
    }
    useEffect(() => {
        axios.get(`https://swapi.co/api/starships/${id}`)
        // .then(res => console.log(res.data))
        .then(res => setStarship(res.data))
        .catch(err => {
            console.log(err);
            setError("These aren't the droids you're looking for");
        })
    }, [id])
    return(
        error === ""
        ?<div className="col-6 mx-auto">
            <h1 style={style}>{starship.name}</h1>
            <h4><span style={style}>Manufacturer:</span> {starship.manufacturer}</h4>
            <h4><span style={style}>Length:</span> {starship.length} meters</h4>
            <h4><span style={style}>Cost:</span> {starship.cost_in_credits} credits</h4>
            <h4><span style={style}>Max speed:</span> {starship.max_atmosphering_speed} km/h</h4>
        </div>
        :<div className="col-6 mx-auto">
            <h1>{error}</h1>
            <img src={obiwan} alt="Obiwan uses the Force"/>
        </div>
    )
}

export default Starship;