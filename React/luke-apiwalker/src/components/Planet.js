import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obiwan from '../img/obiwan.jpg';

const Planet = ({id}) => {
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState("");
    const style = {
        fontWeight: 'bold'
    }
    useEffect(() => {
        axios.get(`https://swapi.co/api/planets/${id}`)
        // .then(res => console.log(res.data))
        .then(res => setPlanet(res.data))
        .catch(err => {
            console.log(err);
            setError("These aren't the droids you're looking for");
        })
    }, [id])
    return(
        error === ""
        ?<div className="col-6 mx-auto">
            <h1 style={style}>{planet.name}</h1>
            <h4><span style={style}>Population:</span> {planet.population}</h4>
            <h4><span style={style}>Diameter:</span> {planet.diameter}</h4>
            <h4><span style={style}>Climate:</span> {planet.climate}</h4>
            <h4><span style={style}>Terrain:</span> {planet.terrain}</h4>
        </div>
        :<div className="col-6 mx-auto">
            <h1>{error}</h1>
            <img src={obiwan} alt="Obiwan uses the Force"/>
        </div>
    )
}

export default Planet;