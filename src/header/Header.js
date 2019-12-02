import React from 'react';
import './Header.css';
const logoImg = require('../images/logoAssocia.png')
const facebook = require('../images/facelogo.png')
const instagram = require('../images/insta2.png')
const email = require('../images/email2.png')

function Header(){
    return (<header>
        <div id="imageContainer" style={{margin:"5px", marginLeft:"15px", marginRight:"15px", height:"90%", width: "auto", float:"left", borderRadius: "100px"}}>
            <img src={logoImg} style={{boxShadow: "1px 1px 5px #888888 !important", maxWidth:"100%",maxHeight:"100%"}}/>
        </div>
        <div style={{position: "relative", top: "50%", height:"30px", width: "auto",float:"left", margin: "5px"}}>
        <a href="https://www.facebook.com/associacaoconstrucao/"><img src={facebook} style={{maxWidth:"100%",maxHeight:"100%"}}/></a>
        </div>
        <div style={{position: "relative", top: "50%", height:"30px", width: "auto", float:"left", margin: "5px"}}>
        <a href="https://instagram.com/associacaoconstrucao?igshid=1lceiijed8ebq"><img src={instagram} style={{maxWidth:"100%",maxHeight:"100%"}}/></a>
        </div>
        <div style={{position: "relative", top: "50%", height:"30px", width: "auto", float:"left", margin: "5px"}}>
        <a href="mailto: associacaoconstrucao@gmail.com"><img src={email} style={{maxWidth:"100%",maxHeight:"100%"}}/></a>
        
        </div>
        

    </header>)
}

export default Header;