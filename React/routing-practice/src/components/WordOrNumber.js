import React from 'react';

const WordOrNumber = (props) => {
    return (
        <div className="col-5 mx-auto">
            {
                isNaN(props.id) == true
                ? <h1>The word is: {props.id}</h1> 
                : <h1>This number is: {props.id}</h1>
            }
        </div>
    )
}
export default WordOrNumber;