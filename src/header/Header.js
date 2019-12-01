import React from 'react';
import './Header.css';


function Header(){
    return (<header>
        <img style={{textAlign:"left", boxShadow: "1px 1px 5px #888888 !important", height:"150px"}} src={require('../logoAssocia.png')} />
    </header>)
}

export default Header;