import React from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';

const ProductList = props => {
    const {removeFromDom} = props;
    const onClickHandler = productId => {
        Axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res => removeFromDom(productId))
            .catch(err => console.log(err))
    }
    return(
        <div className="col-6 mx-auto">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.products.map((p, idx) => {
                        return(
                            <tr key={idx}>
                                <td><Link to={p._id}>{p.title}</Link></td>
                                <td>${p.price}</td>
                                <td><button className="btn btn-dark" onClick={e => onClickHandler(p._id)}>delete</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default ProductList;