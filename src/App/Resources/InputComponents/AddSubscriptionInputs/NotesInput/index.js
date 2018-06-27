import React from 'react';
import S from './index.module.css';

export default class NotesInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <textarea value = {this.props.value}
        className = {S.textAreaField}
        id = "txtNotes"
        onChange = {(event) => {this.props.setInput(event.target.value)}}>
      </textarea>
    );
  }
}
