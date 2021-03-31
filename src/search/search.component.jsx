import React, {Component} from 'react';
import './search.styles.css'

export const Search = ({placeHolder, onChangeValue}) =>{
    return <input 
              key="search" 
              className="search"
              placeholder = {placeHolder}
              onChange= {onChangeValue}>
           </input>
}
