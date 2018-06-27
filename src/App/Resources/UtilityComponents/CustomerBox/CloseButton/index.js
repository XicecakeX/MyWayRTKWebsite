import React from 'react';
import S from './index.module.css';

export default class CloseButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div className = {S.button}
        id = "btnClose"
        onClick = {(event) => {this.props.handleClick(event.target.id)}}> &times;</div>
    );
  }
}
