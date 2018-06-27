import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames'

export default class SelectCustomerButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Select Customer"
        className = {ClassNames(this.props.style, S.button)}
        id = "btnSelectCustomer"
        onClick = {(event) => {this.props.handleClick(event.target.id)}}/>
    );
  }
}
