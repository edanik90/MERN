import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const style = {
        color: 'red'
    }
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    // const [query, setQuery] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", { title, price, description })
            .then(res => console.log("Response: ", res))
            // .then(res => setQuery(res.data))
            .catch(err => console.log("Error:", err));
        setTitle("");
        setPrice();
        setDescription("");
    }

    return (
        <form className="col-3 mx-auto" onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>Title: </label>
                <input className="form-control"
                    type="text"
                    onChange={e => { setTitle(e.target.value) }}
                    value={title} />
            </div>
            <div className="form-group">
                <label>Price: </label>
                <input className="form-control"
                    type="text"
                    value={price}
                    onChange={e => { setPrice(e.target.value) }} />
            </div>
            <div className="form-group">
                <label>Description: </label>
                <input className="form-control"
                    type="text"
                    value={description}
                    onChange={e => { setDescription(e.target.value) }} />
            </div>
            <input className="btn btn-danger" type="submit" value="Create" />
        </form>
    )
}

export default ProductForm;