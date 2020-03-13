import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log("Error: ", err))
    }, [products])
    return(
        <div className="col-7 mx-auto">
            <ProductForm />
            <br />
            <ProductList products={products}/>
        </div>
    )
}

export default Main;