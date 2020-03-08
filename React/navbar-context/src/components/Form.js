import React, {useContext} from 'react';
import MyContext from '../contexts/MyContext';

const Form = () => {
    const context = useContext(MyContext);
    const handleChange = e => {
		e.preventDefault();
        context.setVal({...context.val,
                [e.target.name]:e.target.value})
    }
    return(
        <div>
            <form className="col-4 mx-auto">
                <div className="form-group">
                    <label>Your name: </label>
                    <input className="form-control" name="userName" type="text" onChange={(e) => handleChange(e)}/>
                </div>
            </form>
        </div>
    )
}

export default Form;