import React from 'react';
import InputMask from 'react-input-mask';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class ZipInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <InputMask value = {this.props.value}
        className = {ClassNames(this.props.style, S.textField)}
        id = {this.props.id}
        mask = "99999"
        maskChar = "-"
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
