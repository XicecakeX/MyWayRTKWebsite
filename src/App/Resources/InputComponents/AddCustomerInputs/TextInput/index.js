import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class TextInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {ClassNames(this.props.style, S.textField)}
        id = {this.props.id}
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
