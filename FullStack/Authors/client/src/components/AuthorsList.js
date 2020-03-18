import React from 'react';
import { navigate } from '@reach/router';
import Axios from 'axios';

const AuthorsList = ({removeFromDom, authors}) => {
    const deleteAuthor = authorId => {
        Axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => removeFromDom(authorId))
            .catch(err => console.log(err))
    }
    
    return(
        <div className="col-6 mx-auto">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                {
                    authors.map((a, idx) => {
                        return(
                            <tr key={idx}>
                                <td>{a.name}</td>
                                <td>
                                    <button className="btn btn-dark" onClick={() => {navigate(`/edit/${a._id}`)}}>Edit</button>
                                    <button className="btn btn-danger" onClick={(e) => deleteAuthor(a._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

        </div>
    )
}

export default AuthorsList;