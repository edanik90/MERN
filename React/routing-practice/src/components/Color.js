import React from 'react';

const Color = (props) => {
    const style = {
        backgroundColor: props.color2,
        color: props.color1
    }
    return (
        <div className="col-5 mx-auto">
            {
                isNaN(props.word) == true
                ? isNaN(props.color1) == true && isNaN(props.color2) == true
                    ? <h1 style={style}>The word is: {props.word}</h1> 
                    : null
                : null
            }
        </div>
    )
}
export default Color;