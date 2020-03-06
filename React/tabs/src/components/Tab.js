import React from 'react';

const Tab = ({tab, text, handleClick, idx}) => {
    const style = {
        width: '150px',
        height: '50px',
        display: 'inline-block',
        margin: '15px',
        padding: '10px',
        fontWeight: 'bold',
    };
    const style2 = {
        width: '150px',
        height: '50px',
        display: 'inline-block',
        margin: '15px',
        padding: '10px',
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: 'white'
    };

    return(
        <div className="card col-5 mx-auto" style={tab.isSelected ? style2: style} onClick={handleClick} idx={idx}>
            <p>{text}</p>
        </div>
    )
}
export default Tab;