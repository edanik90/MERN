import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = props => {
    const style = {
        fontWeight: 'bold'
    }
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct({...res.data}))
    }, [])

    return(
        <div className="col-6 mx-auto">
            <h1><span style={style}>{product.title}</span></h1>
            <h4><span style={style}>Price:</span> ${product.price}</h4>
            <h4><span style={style}>Description:</span> {product.description}</h4>
        </div>
    )
}

export default Detail;