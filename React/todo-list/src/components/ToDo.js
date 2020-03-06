import React from 'react';

const ToDo = ({todo,  handleCheck, handleDestroy, idx}) => {
    const style = {
        textDecoration: 'line-through'
    }
    return(
        <div>
            <p style={todo.isChecked ? style: null}>{todo.task}</p>
            <input type="checkbox"
                    checked={todo.isChecked} 
                    onClick={(e) => handleCheck(e, idx)} readOnly/>

            <button className="btn btn-danger"
                    disabled={todo.isChecked ? false:true}
                    onClick={(e) => handleDestroy(e, idx)}>
                    Delete
            </button>
        </div>
    )
}
export default ToDo;