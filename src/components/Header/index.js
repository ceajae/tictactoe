import React, {Component} from 'react';
import './style.css';




export default function Header(props){
    return(
        <div className='header'>
            <span style = {{color:"#e81764"}}>TIC</span>
            <span style = {{color:"#4d882f"}}>-TAC</span>
            <span style = {{color:"#c3b157"}}>-TOE</span>

        </div>
    );
}