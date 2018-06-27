import React from 'react';
import S from './index.module.css';

export default class CheckBoxInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "checkbox"
        checked = {this.props.checked}
        className = {S.checkBoxField}
        id = "chkSame"
        onChange = {(event) => {this.props.setInput(event.target.checked)}}/>
    );
  }
}
