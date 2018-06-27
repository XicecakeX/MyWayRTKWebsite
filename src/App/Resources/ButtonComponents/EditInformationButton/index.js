import React from 'react';
import S from './index.module.css';

export default class EditInformationButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Edit Information"
        className = {S.button}
        id = "btnEditInformation"
        onClick = {this.handleClick}/>
    );
  }
}
