import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class StartDateInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "date"
        className = {ClassNames(this.props.style, S.dateField)}
        id = "txtStartDate"
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
