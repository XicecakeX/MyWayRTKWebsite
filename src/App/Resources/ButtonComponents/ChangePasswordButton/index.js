import React from 'react';
import S from './index.module.css';

export default class ChangePasswordButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Change Password"
        className = {S.button}
        id = "btnChangePassword"
        onClick = {this.handleClick}/>
    );
  }
}
