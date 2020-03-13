import React from 'react';
import { Link } from '@reach/router';

const ProductList = props => {
    return(
        <div className="col-6 mx-auto">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.products.map((p, idx) => {
                        return(
                            <tr key={idx}>
                                <td><Link to={p._id}>{p.title}</Link></td>
                                <td>${p.price}</td>
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