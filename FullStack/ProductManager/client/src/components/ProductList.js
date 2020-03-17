import React from 'react';
import { Link } from '@reach/router';
import Delete from './Delete';

const ProductList = ({removeFromDom, products}) => {
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
                    products.map((p, idx) => {
                        return(
                            <tr key={idx}>
                                <td><Link to={p._id}>{p.title}</Link></td>
                                <td>${p.price}</td>
                                <td><Delete productId={p._id} removeFromDom={removeFromDom}/></td>
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