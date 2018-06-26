import React from 'react';
import S from './index.module.css';

export default class CancelButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Cancel"
        className = {S.button}
        id = "btnCancel"
        onClick = {this.props.handleClick}/>
    );
  }
}
