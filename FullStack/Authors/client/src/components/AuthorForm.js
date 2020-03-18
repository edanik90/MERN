import React, { useState } from 'react';
import { Link } from '@reach/router';

const AuthorForm = ({initName, initBook1, initBook2, initBook3, buttonClass, buttonName, onSubmitProp, errors}) => {
    const [name, setName] = useState(initName);
    const [book1, setBook1] = useState(initBook1);
    const [book2, setBook2] = useState(initBook2);
    const [book3, setBook3] = useState(initBook3);

    const style = {
        card:{
            borderRadius: '10px',
            margin: '15px',
            padding: '15px',
            textAlign: 'left'
        },
        label:{
            fontWeight: 'bold'
        },
        span: {
            color: 'red'
        },
        invalid: {
            display: 'inline-block',
            fontSize: '14px',
            color: 'red',
            margin: '0px',
            padding: '0px'
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, book1, book2, book3})
    }

    return(
        <div className="row justify-content-center">
            <div className="card col-4" style={style.card}>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label style={style.label}>Name:</label>
                        <input className="form-control" 
                            type="text" 
                            onChange={e => { setName(e.target.value)}} 
                            value={name}/>
                        <div style={style.invalid}>{errors.name ? errors.name.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Book 1:</label>
                        <input className="form-control" 
                        type="text" 
                        onChange={e => { setBook1(e.target.value) }} 
                        value={book1}/>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Book 2:</label>
                        <input className="form-control" 
                        type="text" 
                        onChange={e => { setBook2(e.target.value) }} 
                        value={book2}/>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Book 3:</label>
                        <input className="form-control" 
                            type="text" 
                            onChange={e => { setBook3(e.target.value) }} 
                            value={book3}/>
                    </div>
                    <input className={buttonClass} type="submit" value={buttonName} />
                    <span>&nbsp;</span>
                    <Link className="btn btn-dark" to="/">Cancel</Link>
                </form>
            </div>
        </div>


    )
}

export default AuthorForm;