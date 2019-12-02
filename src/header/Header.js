import React from 'react';
import './Header.css';
let imgs = require('../logoAssocia.png')

function Header(){
    return (<header>
        <div id="imageContainer" style={{margin:"5px", marginLeft:"15px", marginRight:"15px", height:"90%", width: "auto", float:"left", borderRadius: "100px"}}>
            <img src={imgs} style={{boxShadow: "1px 1px 5px #888888 !important", maxWidth:"100%",maxHeight:"100%"}}/>
        </div>

    </header>)
}

export default Header;