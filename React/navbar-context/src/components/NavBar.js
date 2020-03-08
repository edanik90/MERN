import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const NavBar = () => {
    const style = {
        color: 'white'
    }
    const context = useContext(MyContext);
    return (
        <nav className="navbar navbar-dark bg-primary">
            <h2 style={style}>Hi, {context.val.userName}</h2>
        </nav>
    )
}

export default NavBar;