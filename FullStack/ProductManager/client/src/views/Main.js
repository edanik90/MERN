import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log("Error: ", err))
    }, []);

    const createPerson = product => {
        axios.post("http://localhost:8000/api/products/create", product)
            .then(res => {
                console.log("Response: ", res);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log("Error:", err));
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return(
        <div className="col-7 mx-auto">
            <ProductForm onSubmitProp={createPerson} 
                initTitle=""
                initPrice={0}
                initDescription=""
                buttonName="Create"
                buttonClass="btn btn-success"/>
            <br />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;