import React from 'react';
import InputMask from 'react-input-mask';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class PhoneInput extends React.Component{
  /**parseInput Function*/
  parseInput = (value) => {
    //Parsing string
    var number = value.replace(/[\s+-]/g,'');

    //Setting data
    var data = {value: number, mask: value};

    //Returning data
    this.props.setInput(data);
  }

  /**Rendering Component*/
  render(){
    return(
      <InputMask value = {this.props.value}
        className = {ClassNames(this.props.style, S.textField)}
        id = {this.props.id}
        mask = "+1 999-999-9999"
        maskChar = "_"
        onChange = {(event) => {this.parseInput(event.target.value)}}/>
    );
  }
}
