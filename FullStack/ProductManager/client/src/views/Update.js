import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';

const Update = ({id}) => {
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(!loaded);
            })
    }, [])

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/update/${id}`, product)
            .then(res => {
                console.log(res);
                navigate(`/${id}`);
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="col-6 mx-auto">
            <h1>Update a product:</h1>
            {
                loaded && (
                    <ProductForm onSubmitProp={updateProduct}
                    initTitle={product.title}
                    initPrice={product.price}
                    initDescription={product.description}
                    buttonName="Update"
                    buttonClass="btn btn-primary"/>
                )
            }
        </div>
    )
}

export default Update;