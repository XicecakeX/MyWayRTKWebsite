import React from 'react';
import S from './index.module.css';

export default class CustomerBox extends React.Component{
  /**closeBox Function*/
  closeBox = (event) => {
    //Closing box
    this.props.closeBox(event);
  }

  /**Rendering Component*/
  render(){
    return(
      <div id = "customerBox" className = {S[this.props.display]}>
        <div id = "btnClose" className = {S.closeButton} onClick = {this.closeBox}> &times;</div>
        <fieldset className = {S.fieldset}>
          <legend> Select a User/Contact</legend>
          <div className = {S.boxContent}>
            <div className = {S.item}> Type in name or email</div>
            <div className = {S.item}>
              <input type = "text"
                value = {this.props.value}
                id = "txtInput"
                onChange = {this.props.getInput}/>
            </div>
            <div className = {S.item}>
              <input type = "button" id = "btnSelect" value = "Select This User"/>
              <input type = "button" id = "btnCancel" value = "Cancel" onClick = {this.closeBox}/>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
