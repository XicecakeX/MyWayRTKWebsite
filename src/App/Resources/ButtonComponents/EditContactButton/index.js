import React from 'react';
import S from './index.module.css';

export default class EditContactButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Edit Contact"
        className = {S.button}
        id = "btnEditContact"
        onClick = {this.handleClick}/>
    );
  }
}
