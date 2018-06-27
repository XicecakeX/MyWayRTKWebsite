import React from 'react';
import S from './index.module.css';

export default class SubmitButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Save"
        className = {S.button}
        id = "btnSubmit"
        onClick = {this.props.handleClick}/>
    );
  }
}
