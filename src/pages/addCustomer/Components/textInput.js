import React from 'react';

export default class TextInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {this.props.className}
        id = {this.props.id}
        onChange = {this.props.onChange}/>
    );
  }
}
