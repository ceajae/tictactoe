import React from 'react';
import './style.css';

function Square(props){
    console.log('hey!!!!')
        return(
            
            <button className="square" 
                    onClick= {props.onClick}
            >
                   {props.value}
            </button>
        )
    
}

export default Square;