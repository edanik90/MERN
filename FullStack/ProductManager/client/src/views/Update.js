import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = ({id}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title, price, description})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate(`/${id}`);
    }
    return(
        <div className="col-6 mx-auto">
            <h1>Update a product:</h1>
            <form className="col-3 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Title: </label>
                    <input className="form-control" 
                        type="text" 
                        onChange={e => {setTitle(e.target.value)}}
                        value={title} />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input className="form-control" 
                        type="text" 
                        value={price}
                        onChange={e => {setPrice(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input className="form-control" 
                        type="text" 
                        value={description}
                        onChange={e => {setDescription(e.target.value)}} />
                </div>
                <input className="btn btn-dark" type="submit" value="Update" />
            </form>

        </div>
    )
}

export default Update;