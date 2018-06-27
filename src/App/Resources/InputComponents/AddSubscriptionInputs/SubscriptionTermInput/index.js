import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class SubscriptionTermInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <select value = {this.props.value}
        className = {ClassNames(this.props.style, S.selectField)}
        id = "selSubscriptionTerm"
        onChange = {(event) => {this.props.setInput(event.target.value)}}>
        <option disabled hidden> NONE</option>
        <option value = "Yearly"> Yearly</option>
      </select>
    );
  }
}
