import React from 'react';
import S from './index.module.css';

export default class SelectButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
       value = "Select This User"
       className = {S.button}
       id = "btnSelect"/>
    );
  }
}
