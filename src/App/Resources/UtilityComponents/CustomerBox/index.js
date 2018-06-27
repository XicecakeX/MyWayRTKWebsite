import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';
import CloseButton from './CloseButton';
import TextInput from './TextInput';
import SelectButton from './SelectButton';
import CancelButton from './CancelButton';

export default class CustomerBox extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.displayBox], S.customerBox)}>
        <CloseButton handleClick = {(id) => {this.props.setDisplay(id)}}/>
        <fieldset className = {S.fieldset}>
          <legend> Select a User/Contact</legend>
          <div className = {S.content}>
            <div className = {S.item}> Type in name or email</div>
            <div className = {S.item}>
              <TextInput value = {this.props.value} setInput = {(value) => {this.props.setInput(value)}}/>
            </div>
            <div className = {S.item}>
              <SelectButton />
              <CancelButton handleClick = {(id) => {this.props.setDisplay(id)}}/>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
