import React, { useState } from 'react';

const ProductForm = ({initTitle, initPrice, initDescription, buttonName, buttonClass, onSubmitProp}) => {
    const style = {
        color: 'red'
    }
    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle(initTitle);
        setPrice(initPrice);
        setDescription(initDescription);
    }

    return (
        <form className="col-3 mx-auto" onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>Title: </label>
                <input className="form-control"
                    type="text"
                    onChange={e => { setTitle(e.target.value) }}
                    value={title} />
            </div>
            <div className="form-group">
                <label>Price: </label>
                <input className="form-control"
                    type="text"
                    value={price}
                    onChange={e => { setPrice(e.target.value) }} />
            </div>
            <div className="form-group">
                <label>Description: </label>
                <input className="form-control"
                    type="text"
                    value={description}
                    onChange={e => { setDescription(e.target.value) }} />
            </div>
            <input className={buttonClass} type="submit" value={buttonName} />
        </form>
    )
}

export default ProductForm;