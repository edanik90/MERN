import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Detail = props => {
    const style = {
        fontWeight: 'bold'
    }
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct({...res.data}))
    }, [])

    const onEditHandler = e => {
        e.preventDefault();
        navigate(`/${product._id}/edit`);
    }

    const onDeleteHandler = productId => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate("/");
    }

    return(
        <div className="col-6 mx-auto">
            <h1><span style={style}>{product.title}</span></h1>
            <h4><span style={style}>Price:</span> ${product.price}</h4>
            <h4><span style={style}>Description:</span> {product.description}</h4>
            <button className="btn btn-dark" onClick={onEditHandler}>Edit</button>
            <button className="btn btn-danger" onClick={e => onDeleteHandler(product._id)}>Delete</button>
        </div>
    )
}

export default Detail;