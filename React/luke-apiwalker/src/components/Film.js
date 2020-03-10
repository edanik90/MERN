import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obiwan from '../img/obiwan.jpg';

const Film = ({id}) => {
    const [film, setFilm] = useState({});
    const [error, setError] = useState("");
    const style = {
        fontWeight: 'bold'
    }
    useEffect(() => {
        axios.get(`https://swapi.co/api/films/${id}`)
        // .then(res => console.log(res.data))
        .then(res => setFilm(res.data))
        .catch(err => {
            console.log(err);
            setError("These aren't the droids you're looking for")
        })
    }, [id])
    return(
        error === ""
        ?<div className="col-6 mx-auto">
            <h1 style={style}>{film.title}</h1>
            <h4><span style={style}>Director:</span> {film.director}</h4>
            <h4><span style={style}>Producer:</span> {film.producer}</h4>
            <h4><span style={style}>Release date:</span> {film.release_date}</h4>
            <h4><span style={style}>Description:</span> {film.opening_crawl}</h4>
        </div>
        :<div className="col-6 mx-auto">
            <h1>{error}</h1>
            <img src={obiwan} alt="Obiwan uses the Force"/>
        </div>
    )
}

export default Film;